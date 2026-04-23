import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import type { ReactNode } from "react";
import type { SanityImageSource } from "@sanity/image-url";

import HomeFooter from "@/components/layout/HomeFooter";
import PreviewImage from "@/components/projects/PreviewImage";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectBySlugQuery, relatedProjectsBySlugQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60;
export const dynamic = "force-static";

type ProjectDetail = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  year?: string;
  client?: string;
  timeline?: string;
  liveUrl?: string;
  heroImage?: unknown;
  heroAlt?: string;
  types: { title: string; slug?: string }[];
  services?: { title: string; slug?: string }[];
  body: ProjectBodyBlock[];
};

type ProjectBodyBlock =
  | {
      _type: "block";
      _key?: string;
      style?: string;
      children: Array<{ _type: "span"; text: string; marks?: string[] }>;
      markDefs?: Array<{ _key: string; _type: "link"; href: string }>;
    }
  | {
      _type: "image";
      _key?: string;
      alt?: string;
    }
  | {
      _type: "codeBlock";
      _key?: string;
      language?: string;
      code?: string;
    };

type RelatedProject = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  heroImage?: unknown;
  heroAlt?: string;
  types?: string[];
};

async function getProject(slug: string) {
  return sanityFetch<ProjectDetail | null>({
    query: projectBySlugQuery,
    params: { slug },
    revalidate,
  });
}

async function getRelatedProjects(slug: string) {
  return (
    (await sanityFetch<RelatedProject[]>({
      query: relatedProjectsBySlugQuery,
      params: { slug },
      revalidate,
    })) ?? []
  );
}

function getProjectImageUrl(image: unknown, width: number, quality: number) {
  if (!image) return null;

  return urlFor(image).width(width).quality(quality).auto("format").url();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "Project yang Anda cari tidak ditemukan.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description =
    project.description ||
    `${project.title} adalah salah satu project Flaat Studio di bidang web development, AI, dan digital marketing.`;
  const image = getProjectImageUrl(project.heroImage, 1200, 80) || "/assets/images/og-image.webp";

  return {
    title: project.title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}/`,
    },
    openGraph: {
      type: "article",
      title: project.title,
      description,
      url: `/projects/${project.slug}/`,
      images: [
        {
          url: image,
          alt: project.heroAlt || project.title,
        },
      ],
    },
    twitter: {
      title: project.title,
      description,
      images: [image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [project, relatedProjects] = await Promise.all([
    getProject(slug),
    getRelatedProjects(slug),
  ]);

  if (!project) notFound();

  const heroUrl = getProjectImageUrl(project.heroImage, 2000, 85);
  const heroAlt = project.heroAlt || project.title;

  const typeLabel = project.types?.length
    ? project.types.map((t) => t.title).join(", ")
    : "";
  const pageUrl = `https://flaat.studio/projects/${project.slug}/`;
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: "https://flaat.studio/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Portofolio",
            item: "https://flaat.studio/projects/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "CreativeWork",
        name: project.title,
        url: pageUrl,
        description: project.description,
        image: heroUrl || "https://flaat.studio/assets/images/og-image.webp",
        creator: {
          "@type": "Organization",
          name: "Flaat Studio",
        },
        datePublished: project.year || undefined,
        keywords: project.types?.map((type) => type.title),
      },
    ],
  };

  const ptComponents: PortableTextComponents = {
    types: {
      image: ({ value }: { value: SanityImageSource & { alt?: string; asset?: unknown } }) => {
        if (!value.asset) return null;

        const imageUrl = urlFor(value)
          .width(1800)
          .quality(85)
          .auto("format")
          .url();
        const alt = value.alt || "";

        return (
          <div className='relative w-full overflow-hidden bg-panel'>
            <PreviewImage
              src={imageUrl}
              alt={alt}
              width={1800}
              height={1200}
              sizes='(min-width: 1200px) 65vw, 100vw'
              className='block w-full h-auto max-h-[clamp(14rem,36vw,28rem)] object-contain'
            />
          </div>
        );
      },
      codeBlock: ({ value }: { value: { language?: string; code?: string } }) => {
        const language = value.language || "text";
        const code = value.code || "";

        return (
          <pre className='my-6 rounded-lg bg-gray-900 text-gray-100 p-4 overflow-x-auto'>
            <code className={`language-${language}`}>{code}</code>
          </pre>
        );
      },
    },
    block: {
      h1: ({ children }) => (
        <h2 className='mt-10 mb-4 text-3xl tab:text-4xl leading-tight font-semibold font-sans text-primary'>
          {children}
        </h2>
      ),
      h2: ({ children }) => (
        <h2 className='mt-8 mb-3 text-2xl leading-tight font-semibold font-sans text-primary'>
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className='mt-6 mb-3 text-xl leading-tight font-semibold font-sans text-primary'>
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className='mt-5 mb-2 text-lg leading-tight font-semibold font-sans text-primary'>
          {children}
        </h4>
      ),
      normal: ({ children }) => (
        <p className='mt-0 mb-5 text-lg leading-[1.7] tracking-[-0.01em] font-body text-gray-500'>
          {children}
        </p>
      ),
      blockquote: ({ children }) => (
        <blockquote className='my-6 border-l-4 border-gray-200 pl-4 text-lg leading-[1.65] tracking-[-0.01em] font-body text-gray-600'>
          {children}
        </blockquote>
      ),
    },
    marks: {
      link: ({ children, value }: { children: ReactNode; value?: { href?: string } }) => {
        const href = value?.href;
        if (!href) return <>{children}</>;

        return (
          <a
            href={href}
            className='text-gray-800 underline underline-offset-4'
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            target={href.startsWith("http") ? "_blank" : undefined}
          >
            {children}
          </a>
        );
      },
    },
    list: {
      bullet: ({ children }) => (
        <ul className='mt-2 mb-5 pl-6 list-disc space-y-1 text-lg leading-[1.65] tracking-[-0.01em] font-body text-gray-500'>
          {children}
        </ul>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className='my-1'>{children}</li>,
    },
  };

  return (
    <main className='min-h-screen px-5 pb-8 desk:pl-[260px] desk:px-10'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <div className='relative w-full max-w-[1300px] mx-auto flex flex-col gap-[7.5rem] pt-24 px-5 tab:p-8 desk:pt-10 desk:p-8 desk:border-r desk:border-gray-200'>
        <div className='flex flex-col gap-12 desk:grid desk:grid-cols-[1fr_340px] desk:gap-16'>
          <div className='flex flex-col gap-12 order-2 desk:order-1'>
            {heroUrl ? (
              <div className='relative w-full overflow-hidden bg-panel'>
                <PreviewImage
                  src={heroUrl}
                  alt={heroAlt}
                  width={2000}
                  height={1307}
                  sizes='(min-width: 1200px) 65vw, 100vw'
                  className='block w-full h-auto max-h-[clamp(16rem,42vw,32rem)] object-contain'
                  priority
                />
              </div>
            ) : null}

            <div className='flex flex-col [&>*:first-child]:mt-0 [&>*:last-child]:mb-0'>
              <PortableText value={project.body} components={ptComponents} />
            </div>
          </div>

          <aside className='order-1 desk:order-2 desk:sticky desk:top-10 desk:max-h-[calc(100vh-5rem)]'>
            <div className='flex flex-col gap-10 bg-[#fafafa] p-6 tab:p-8'>
              <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-4'>
                  <h1 className='m-0 text-xl leading-tight tracking-tight font-medium font-sans text-primary'>
                    {project.title}
                  </h1>
                  {project.description ? (
                    <p className='m-0 max-w-[28ch] text-base leading-[1.3] tracking-[-0.02em] font-body text-gray-500'>
                      {project.description}
                    </p>
                  ) : null}
                </div>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex w-fit items-center gap-2 border-b border-current text-primary no-underline font-sans text-base leading-[1.3] tracking-[-0.02em] transition-opacity duration-250 hover:opacity-70'
                  >
                    <span>Kunjungi Website</span>
                    <span aria-hidden='true'>↗</span>
                  </a>
                ) : null}
              </div>

              <div className='flex flex-col'>
                {project.year ? (
                  <MetaRow label='Year' value={project.year} />
                ) : null}

                {typeLabel ? <MetaRow label='Type' value={typeLabel} /> : null}

                {project.client ? (
                  <MetaRow label='Client' value={project.client} />
                ) : null}

                {project.timeline ? (
                  <MetaRow label='Timeline' value={project.timeline} />
                ) : null}
              </div>
            </div>
          </aside>
        </div>

        {relatedProjects.length ? (
          <section className='flex flex-col gap-6'>
            <div aria-hidden='true' className='w-full border-t border-gray-300' />
            <div className='flex items-center justify-between gap-4'>
              <p className='m-0 font-mono text-xs tracking-widest uppercase text-gray-800'>
                NEXT
              </p>
              <h2 className='m-0 text-xl leading-tight font-semibold font-sans'>
                Projek Lainnya
              </h2>
            </div>

            <div className='grid grid-cols-1 gap-x-3 gap-y-6 tab:grid-cols-2'>
              {relatedProjects.map((relatedProject) => {
                const relatedImageUrl = relatedProject.heroImage
                  ? urlFor(relatedProject.heroImage).width(1200).quality(80).auto("format").url()
                  : null;
                const relatedAlt = relatedProject.heroAlt || relatedProject.title;

                return (
                  <Link
                    key={relatedProject._id}
                    href={`/projects/${relatedProject.slug}`}
                    className='group flex flex-col gap-1 no-underline'
                  >
                    <div className='relative aspect-[1.53056] overflow-hidden bg-panel'>
                      {relatedImageUrl ? (
                        <Image
                          src={relatedImageUrl}
                          alt={relatedAlt}
                          fill
                          sizes='(min-width: 1200px) 44vw, (min-width: 810px) 48vw, 100vw'
                          className='object-cover transition-transform duration-250 ease-in-out group-hover:scale-[1.02]'
                        />
                      ) : null}

                      {relatedProject.description ? (
                        <p className='m-0 text-lg leading-[1.3] tracking-[-0.02em] font-body opacity-0 transition-opacity duration-250 ease-in-out group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-accent/70 text-white p-4 text-center'>
                          {relatedProject.description}
                        </p>
                      ) : null}
                    </div>

                    <div className='flex flex-col gap-0'>
                      {relatedProject.types?.length ? (
                        <p className='m-0 py-0.5 text-sm leading-normal font-body text-gray-500'>
                          {relatedProject.types.join(", ")}
                        </p>
                      ) : null}

                      <h3 className='m-0 py-0.5 text-lg leading-normal font-medium font-sans'>
                        {relatedProject.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ) : null}

        <HomeFooter />
      </div>
    </main>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className='grid grid-cols-[1fr_auto] items-center gap-4 border-b border-gray-300 py-3'>
      <p className='m-0 font-sans text-base leading-[1.3] tracking-[-0.02em] text-gray-800'>
        {label}
      </p>
      <p className='m-0 text-right text-base leading-[1.3] tracking-[-0.02em] font-body text-gray-500'>
        {value}
      </p>
    </div>
  );
}
