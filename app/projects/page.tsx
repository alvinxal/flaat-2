import HomeFooter from "@/components/layout/HomeFooter";
import ProjectsHero from "@/components/home/ProjectsHero";
import ProjectsFilterGrid from "@/components/projects/ProjectsFilterGrid";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectsFilterTypesQuery, projectsIndexQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

type ProjectCard = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  heroImage?: unknown;
  heroAlt?: string;
  types?: { title: string; slug?: string }[];
  services?: string[];
};

type ProjectFilterType = {
  _id: string;
  title: string;
  slug: string;
};

export default async function ProjectsPage() {
  const filterTypes = (await sanityFetch<ProjectFilterType[]>({
    query: projectsFilterTypesQuery,
    revalidate,
  })) ?? [];

  const projects = (await sanityFetch<ProjectCard[]>({
    query: projectsIndexQuery,
    revalidate,
  })) ?? [];

  const preparedProjects = projects.map((project) => ({
    ...project,
    imageUrl: project.heroImage
      ? urlFor(project.heroImage).width(1200).quality(80).auto("format").url()
      : null,
  }));

  return (
    <main className='min-h-screen px-5 pb-8 pt-[72px] desk:pt-0 desk:pl-[260px] desk:px-10'>
      <div className='relative w-full max-w-[1300px] mx-auto flex flex-col gap-[7.5rem] pt-10 px-5 tab:p-8 desk:p-8 desk:border-r desk:border-gray-200'>
        <ProjectsHero />
        <ProjectsFilterGrid projects={preparedProjects} filterTypes={filterTypes} />
        <HomeFooter />
      </div>
    </main>
  );
}
