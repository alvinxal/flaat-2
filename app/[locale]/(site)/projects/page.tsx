import type { Metadata } from "next";
import { CreativeWorkJsonLd, JsonLdScript } from "next-seo";

import HomeFooter from "@/components/layout/HomeFooter";
import ProjectsHero from "@/components/home/ProjectsHero";
import ProjectsFilterGrid from "@/components/projects/ProjectsFilterGrid";
import { siteOrigin } from "@/lib/site";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectsFilterTypesQuery, projectsIndexQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import id from "@/lib/i18n/dictionaries/id";
import en from "@/lib/i18n/dictionaries/en";

export const revalidate = 60;

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
  heroImage?: unknown;
  heroAlt?: string;
  types?: { title: string; slug?: string }[];
  services?: string[];
};

async function getFilterTypes() {
  return (
    (await sanityFetch<ProjectFilterType[]>({
      query: projectsFilterTypesQuery,
      revalidate,
    })) ?? []
  );
}

function getDict(locale: string) {
  return locale === "en" ? en : id;
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ type?: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { type } = await searchParams;
  const dict = getDict(locale);
  const filterTypes = await getFilterTypes();
  const activeFilter = filterTypes.find((filterType) => filterType.slug === type);
  const p = locale === "en" ? "/en" : "";

  if (!activeFilter) {
    return {
      title: dict.projects.title,
      description: dict.projects.description,
      alternates: {
        canonical: `${p}/projects/`,
        languages: {
          id: "/projects/",
          en: "/en/projects/",
        },
      },
      openGraph: {
        title: dict.projects.title,
        description: dict.projects.description,
        url: `${p}/projects/`,
      },
      twitter: {
        title: dict.projects.title,
        description: dict.projects.description,
      },
    };
  }

  const filteredTitle = `${dict.projects.title} ${activeFilter.title}`;
  const filteredDescription = `${dict.projects.description} — ${activeFilter.title}`;

  return {
    title: filteredTitle,
    description: filteredDescription,
    alternates: {
      canonical: `${p}/projects/`,
    },
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: filteredTitle,
      description: filteredDescription,
      url: `${p}/projects/?type=${activeFilter.slug}`,
    },
    twitter: {
      title: filteredTitle,
      description: filteredDescription,
    },
  };
}

export default async function ProjectsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ type?: string }>;
}) {
  const { locale } = await params;
  const { type } = await searchParams;
  const dict = getDict(locale);
  const filterTypes = await getFilterTypes();
  const p = locale === "en" ? "/en" : "";

  const projects = (await sanityFetch<ProjectCard[]>({
    query: projectsIndexQuery,
    params: { locale },
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
      <CreativeWorkJsonLd
        type='WebPage'
        scriptId='projects-collection-webpage-jsonld'
        name={dict.projects.collectionName}
        url={`${siteOrigin}${p}/projects/`}
        description={dict.projects.collectionDescription}
      />
      <JsonLdScript
        scriptKey='projects-collection-jsonld'
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: dict.projects.collectionName,
          url: `${siteOrigin}${p}/projects/`,
          description: dict.projects.collectionDescription,
          isPartOf: { "@type": "WebSite", name: "Flaat Studio", url: siteOrigin },
          about: ["Web development", "AI automation", "Digital marketing"],
        }}
      />
      <div className='relative w-full max-w-[1300px] mx-auto flex flex-col gap-[7.5rem] pt-10 px-5 tab:p-8 desk:p-8 desk:border-r desk:border-gray-200'>
        <ProjectsHero locale={locale} />
        <ProjectsFilterGrid
          locale={locale}
          projects={filteredProjects}
          filterTypes={filterTypesWithCounts}
          activeType={activeType}
        />
        <HomeFooter />
      </div>
    </main>
  );
}
