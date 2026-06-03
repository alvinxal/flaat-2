import { getServerSideSitemap } from "next-sitemap";
import type { ISitemapField } from "next-sitemap";

import { siteOrigin } from "@/lib/site";
import { sanityFetch } from "@/sanity/lib/fetch";

type ProjectSitemapEntry = {
  _id: string;
  slugId: string;
  slugEn: string | null;
  hasEn: boolean;
  _updatedAt?: string;
};

const sitemapProjectsQuery = `
  *[_type == "project" && defined(slugId.current)] {
    _id,
    "slugId": slugId.current,
    "slugEn": slugEn.current,
    "hasEn": defined(slugEn.current) && defined(titleEn) && defined(bodyEn),
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

  const fields: ISitemapField[] = projects.flatMap((project) => {
    const entries: ISitemapField[] = [
      {
        loc: `${siteOrigin}/projects/${project.slugId}/`,
        lastmod: project._updatedAt ? new Date(project._updatedAt).toISOString() : now,
        changefreq: "monthly" as const,
        priority: 0.7,
      },
    ];

    if (project.hasEn && project.slugEn) {
      entries.push({
        loc: `${siteOrigin}/en/projects/${project.slugEn}/`,
        lastmod: project._updatedAt ? new Date(project._updatedAt).toISOString() : now,
        changefreq: "monthly" as const,
        priority: 0.7,
      });
    }

    return entries;
  });

  return getServerSideSitemap(fields);
}
