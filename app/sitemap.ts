import type { MetadataRoute } from "next";

import { siteOrigin } from "@/lib/site";
import { sanityFetch } from "@/sanity/lib/fetch";

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
      url: `${siteOrigin}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteOrigin}/projects/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...projects.map((project) => ({
      url: `${siteOrigin}/projects/${project.slug}/`,
      lastModified: project._updatedAt ? new Date(project._updatedAt) : now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${siteOrigin}/jasa-website-temanggung/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];
}
