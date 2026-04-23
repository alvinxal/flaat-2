import type { Metadata } from "next";

import HomeFooter from "@/components/layout/HomeFooter";
import ProjectsHero from "@/components/home/ProjectsHero";
import ProjectsFilterGrid from "@/components/projects/ProjectsFilterGrid";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectsFilterTypesQuery, projectsIndexQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

const projectsTitle = "Portofolio Project";
const projectsDescription =
  "Lihat portofolio Flaat Studio untuk project web development, AI automation, dan digital marketing yang dirancang untuk pertumbuhan bisnis.";

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portofolio Project Flaat Studio",
  url: "https://flaat.studio/projects/",
  description:
    "Kumpulan project Flaat Studio di bidang web development, AI automation, dan digital marketing.",
};

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
  count: number;
};

async function getFilterTypes() {
  return (
    (await sanityFetch<ProjectFilterType[]>({
      query: projectsFilterTypesQuery,
      revalidate,
    })) ?? []
  );
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}): Promise<Metadata> {
  const { type } = await searchParams;
  const filterTypes = await getFilterTypes();
  const activeFilter = filterTypes.find((filterType) => filterType.slug === type);

  if (!activeFilter) {
    return {
      title: projectsTitle,
      description: projectsDescription,
      alternates: {
        canonical: "/projects/",
      },
      openGraph: {
        title: projectsTitle,
        description: projectsDescription,
        url: "/projects/",
      },
      twitter: {
        title: projectsTitle,
        description: projectsDescription,
      },
    };
  }

  const filteredTitle = `${projectsTitle} ${activeFilter.title}`;
  const filteredDescription = `Lihat portofolio Flaat Studio untuk kategori ${activeFilter.title.toLowerCase()} yang mencakup project web development, AI automation, dan digital marketing.`;

  return {
    title: filteredTitle,
    description: filteredDescription,
    alternates: {
      canonical: "/projects/",
    },
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: filteredTitle,
      description: filteredDescription,
      url: `/projects/?type=${activeFilter.slug}`,
    },
    twitter: {
      title: filteredTitle,
      description: filteredDescription,
    },
  };
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const filterTypes = await getFilterTypes();

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
  const filterTypesWithCounts = filterTypes.map((filterType) => ({
    ...filterType,
    count: preparedProjects.filter((project) =>
      project.types?.some((projectType) => projectType.slug === filterType.slug),
    ).length,
  }));
  const activeType = type && filterTypes.some((filterType) => filterType.slug === type)
    ? type
    : "all";
  const filteredProjects =
    activeType === "all"
      ? preparedProjects
      : preparedProjects.filter((project) =>
          project.types?.some((projectType) => projectType.slug === activeType),
        );

  return (
    <main className='min-h-screen px-5 pb-8 pt-[72px] desk:pt-0 desk:pl-[260px] desk:px-10'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <div className='relative w-full max-w-[1300px] mx-auto flex flex-col gap-[7.5rem] pt-10 px-5 tab:p-8 desk:p-8 desk:border-r desk:border-gray-200'>
        <ProjectsHero />
        <ProjectsFilterGrid
          projects={filteredProjects}
          filterTypes={filterTypesWithCounts}
          activeType={activeType}
        />
        <HomeFooter />
      </div>
    </main>
  );
}
