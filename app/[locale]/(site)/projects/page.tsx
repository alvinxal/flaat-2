import { Suspense } from "react";
import type { Metadata } from "next";
import { CreativeWorkJsonLd, JsonLdScript } from "next-seo";

import HomeFooter from "@/components/layout/HomeFooter";
import ProjectsHero from "@/components/home/ProjectsHero";
import ProjectsFilterGrid from "@/components/projects/ProjectsFilterGrid";
import ProjectsFilterGridClient from "@/components/projects/ProjectsFilterGridClient";
import { siteOrigin, openGraphDefaults, twitterDefaults } from "@/lib/site";
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
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDict(locale);
  const p = locale === "en" ? "/en" : "";

  return {
    title: dict.projects.title,
    description: dict.projects.description,
    // ?type= filter views share this canonical, so they are not indexed separately.
    alternates: {
      canonical: `${p}/projects/`,
      languages: {
        id: "/projects/",
        en: "/en/projects/",
      },
    },
    openGraph: {
      ...openGraphDefaults(locale),
      title: dict.projects.title,
      description: dict.projects.description,
      url: `${p}/projects/`,
    },
    twitter: {
      ...twitterDefaults,
      title: dict.projects.title,
      description: dict.projects.description,
    },
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
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
        <Suspense
          fallback={
            <ProjectsFilterGrid
              locale={locale}
              projects={preparedProjects}
              filterTypes={filterTypesWithCounts}
              activeType='all'
            />
          }
        >
          <ProjectsFilterGridClient
            locale={locale}
            projects={preparedProjects}
            filterTypes={filterTypesWithCounts}
          />
        </Suspense>
        <HomeFooter />
      </div>
    </main>
  );
}
