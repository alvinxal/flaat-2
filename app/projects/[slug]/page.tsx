import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import type { ReactNode } from "react";
import type { SanityImageSource } from "@sanity/image-url";

import HomeFooter from "@/components/layout/HomeFooter";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectBySlugQuery } from "@/sanity/lib/queries";
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

async function getProject(slug: string) {
  return sanityFetch<ProjectDetail | null>({
    query: projectBySlugQuery,
    params: { slug },
    revalidate,
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return { title: "Project Not Found - Flaat Studio" };
  }

  return {
    title: `${project.title} - Flaat Studio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) notFound();

  const heroUrl = project.heroImage
    ? urlFor(project.heroImage).width(2000).quality(85).auto("format").url()
    : null;
  const heroAlt = project.heroAlt || project.title;

  const typeLabel = project.types?.length
    ? project.types.map((t) => t.title).join(", ")
    : "";

  const ptComponents: PortableTextComponents = {
    types: {
      image: ({ value }: { value: SanityImageSource & { alt?: string } }) => {
        const imageUrl = urlFor(value)
          .width(1800)
          .quality(85)
          .auto("format")
          .url();
        const alt = value.alt || "";

        return (
          <div className='relative w-full overflow-hidden bg-panel'>
            <Image
              src={imageUrl}
              alt={alt}
              width={1800}
              height={1200}
              className='block w-full h-auto'
              unoptimized
            />
          </div>
        );
      },
      codeBlock: ({ value }: { value: { language?: string; code?: string } }) => {
        const language = value.language || "text";
        const code = value.code || "";

        return (
          <pre className='m-0 rounded-lg bg-gray-900 text-gray-100 p-4 overflow-x-auto'>
            <code className={`language-${language}`}>{code}</code>
          </pre>
        );
      },
    },
    block: {
      h1: ({ children }) => (
        <h1 className='m-0 text-2xl tab:text-3xl leading-tight font-semibold font-sans text-gray-800'>
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className='m-0 text-xl leading-tight font-semibold font-sans text-gray-800'>
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className='m-0 text-lg leading-tight font-semibold font-sans text-gray-800'>
          {children}
        </h3>
      ),
      normal: ({ children }) => (
        <p className='m-0 text-lg leading-[1.4] tracking-[-0.02em] font-body text-gray-500'>
          {children}
        </p>
      ),
      blockquote: ({ children }) => (
        <blockquote className='m-0 border-l-4 border-gray-200 pl-4 text-lg leading-[1.4] tracking-[-0.02em] font-body text-gray-600'>
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
        <ul className='m-0 pl-6 list-disc text-lg leading-[1.4] tracking-[-0.02em] font-body text-gray-500'>
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
      <div className='relative w-full max-w-[1300px] mx-auto flex flex-col gap-[7.5rem] pt-24 px-5 tab:p-8 desk:pt-10 desk:p-8 desk:border-r desk:border-gray-200'>
        <div className='flex flex-col gap-12 desk:grid desk:grid-cols-[1fr_340px] desk:gap-16'>
          <div className='flex flex-col gap-12 order-2 desk:order-1'>
            {heroUrl ? (
              <div className='relative aspect-[1.53056] overflow-hidden bg-panel w-full'>
                <Image
                  src={heroUrl}
                  alt={heroAlt}
                  fill
                  sizes='(min-width: 1200px) 65vw, 100vw'
                  className='object-cover'
                  priority
                  unoptimized
                />
              </div>
            ) : null}

            <div className='flex flex-col gap-6'>
              <PortableText value={project.body} components={ptComponents} />
            </div>
          </div>

          <aside className='order-1 desk:order-2 desk:sticky desk:top-10 desk:max-h-[calc(100vh-5rem)]'>
            <div className='flex flex-col gap-10 bg-[#fafafa] p-6 tab:p-8'>
              <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-4'>
                  <h1 className='m-0 text-xl leading-tight tracking-tight font-medium font-sans text-gray-800'>
                    {project.title}
                  </h1>
                  {project.description ? (
                    <p className='m-0 max-w-[28ch] text-base leading-[1.3] tracking-[-0.02em] font-body text-gray-500'>
                      {project.description}
                    </p>
                  ) : null}
                </div>
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
