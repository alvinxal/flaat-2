import Link from "next/link";
import Image from "next/image";

import { sanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

const content = {
  label: "WORK",
  title: "Karya kami",
};

export const revalidate = 60;

type HomeProject = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  heroImage?: unknown;
  heroAlt?: string;
};

const homeProjectsQuery = `
  *[_type == "project" && defined(slug.current)]
    | order(coalesce(year, "") desc, _createdAt desc)[0...3] {
      _id,
      title,
      "slug": slug.current,
      description,
      heroImage,
      heroAlt
    }
`;

export default async function ProjectsSection() {
  const projects = (await sanityFetch<HomeProject[]>({
    query: homeProjectsQuery,
    revalidate,
  })) ?? [];

  return (
    <section id='projects' className='flex flex-col gap-4 scroll-mt-[80px] desk:scroll-mt-[80px]'>
      <div className='flex items-center justify-between gap-4'>
        <p className='m-0 font-mono text-xs tracking-widest uppercase text-gray-800'>
          {content.label}
        </p>
        <h2 className='m-0 text-xl leading-tight font-semibold font-sans'>
          {content.title}
        </h2>
      </div>

      <div className='grid grid-cols-1 gap-x-3 gap-y-6 tab:grid-cols-2 desk:grid-cols-3'>
        {projects.length ? projects.map((project) => {
          const imageUrl = project.heroImage
            ? urlFor(project.heroImage).width(1200).quality(80).auto("format").url()
            : null;
          const alt = project.heroAlt || project.title;

          return (
          <Link
            key={project._id}
            href={`/projects/${project.slug}`}
            className='group flex flex-col gap-1 no-underline'
          >
            <div className='relative aspect-[1.53056] overflow-hidden bg-panel'>
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={alt}
                  fill
                  sizes='(min-width: 1200px) 26vw, (min-width: 810px) 40vw, 100vw'
                  className='object-cover transition-transform duration-250 ease-in-out group-hover:scale-[1.02]'
                />
              ) : null}

              {project.description ? (
                <p className='m-0 text-lg leading-[1.3] tracking-[-0.02em] font-body opacity-0 transition-opacity duration-250 ease-in-out group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-accent/70 text-white p-4 text-center'>
                  {project.description}
                </p>
              ) : null}
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='m-0 text-lg leading-normal font-medium font-sans'>
                {project.title}
              </h3>
            </div>
            </Link>
          );
        }) : (
          <p className='m-0 text-base leading-normal font-body text-gray-500'>
            Belum ada project.
          </p>
        )}
      </div>

      <div className='flex justify-start'>
        <Link
          href='/projects'
          className='inline-flex items-center gap-3 w-fit pb-[0.3rem] border-b border-accent text-accent no-underline font-sans text-lg leading-[1.3] tracking-[-0.02em] transition-opacity duration-250 hover:opacity-60'
        >
          <span>Lihat Semua Projek</span>
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}
