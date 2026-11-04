import type { MetadataRoute } from "next";

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

const staticPaths = [
  "/",
  "/projects/",
  "/contact/",
  "/tentang/",
  "/jasa-website-yogyakarta/",
  "/jasa-website-hotel-villa/",
  "/jasa-pembuatan-website/",
  "/jasa-ai-automation/",
  "/jasa-digital-marketing/",
  "/en/",
  "/en/projects/",
  "/en/contact/",
  "/en/about/",
  "/en/hospitality-website/",
  "/en/website-development-services/",
  "/en/ai-automation-services/",
  "/en/digital-marketing-services/",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages have no real revision date, so omit lastModified rather than
  // report the build time as a change on every deploy.
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteOrigin}${path}`,
  }));

  const projects =
    (await sanityFetch<ProjectSitemapEntry[]>({
      query: sitemapProjectsQuery,
      revalidate: 3600,
    })) ?? [];

  const projectEntries: MetadataRoute.Sitemap = projects.flatMap((project) => {
    const lastModified = project._updatedAt ? new Date(project._updatedAt) : undefined;
    const entries: MetadataRoute.Sitemap = [
      {
        url: `${siteOrigin}/projects/${project.slugId}/`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      },
    ];

    if (project.hasEn && project.slugEn) {
      entries.push({
        url: `${siteOrigin}/en/projects/${project.slugEn}/`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    return entries;
  });

  return [...staticEntries, ...projectEntries];
}
