import { getServerSideSitemap } from "next-sitemap";
import type { ISitemapField } from "next-sitemap";

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

export async function GET() {
  const now = new Date().toISOString();
  const projects =
    (await sanityFetch<ProjectSitemapEntry[]>({
      query: sitemapProjectsQuery,
      revalidate: 3600,
    })) ?? [];

  const fields: ISitemapField[] = [
    ...projects.map((project) => ({
      loc: `${siteOrigin}/projects/${project.slug}/`,
      lastmod: project._updatedAt ? new Date(project._updatedAt).toISOString() : now,
      changefreq: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return getServerSideSitemap(fields);
}
