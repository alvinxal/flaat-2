import Image from "next/image";
import Link from "next/link";

import ProjectsFilterNav from "@/components/projects/ProjectsFilterNav";

type ProjectFilterType = {
  _id: string;
  title: string;
  slug: string;
  count: number;
};

type ProjectCard = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  heroAlt?: string;
  imageUrl?: string | null;
  types?: { title: string; slug?: string }[];
};

export default function ProjectsFilterGrid({
  projects,
  filterTypes,
  activeType,
}: {
  projects: ProjectCard[];
  filterTypes: ProjectFilterType[];
  activeType: string;
}) {
  return (
    <section id='projects' className='flex flex-col gap-4 scroll-mt-[52px] desk:scroll-mt-[80px]'>
      <ProjectsFilterNav filterTypes={filterTypes} activeType={activeType} />

      <div key={activeType} className='grid grid-cols-1 gap-x-3 gap-y-6 tab:grid-cols-2 desk:grid-cols-3 animate-filter-fade-in'>
        {projects.length ? projects.map((project) => {
          const alt = project.heroAlt || project.title;

          return (
            <Link
              key={project._id}
              href={`/projects/${project.slug}`}
              className='group flex flex-col gap-1 no-underline'
            >
              <div className='relative aspect-[1.53056] overflow-hidden bg-panel'>
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
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

              <div className='flex flex-col gap-0'>
                {project.types?.length ? (
                  <p className='m-0 py-0.5 text-sm leading-normal font-body text-gray-500'>
                    {project.types.map((projectType) => projectType.title).join(", ")}
                  </p>
                ) : null}

                <h3 className='m-0 py-0.5 text-lg leading-normal font-medium font-sans'>
                  {project.title}
                </h3>
              </div>
            </Link>
          );
        }) : (
          <p className='m-0 text-base leading-normal font-body text-gray-500'>
            Belum ada project pada kategori ini.
          </p>
        )}
      </div>
    </section>
  );
}
