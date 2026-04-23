import type { MetadataRoute } from "next";

import { sanityFetch } from "@/sanity/lib/fetch";

const siteUrl = "https://flaat.studio";

type ProjectSitemapEntry = {
  slug: string;
  _updatedAt?: string;
};

const sitemapProjectsQuery = `
  *[_type == "project" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }
`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const projects =
    (await sanityFetch<ProjectSitemapEntry[]>({
      query: sitemapProjectsQuery,
      revalidate: 3600,
    })) ?? [];

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/projects/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}/`,
      lastModified: project._updatedAt ? new Date(project._updatedAt) : now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
