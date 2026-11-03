import type { Metadata } from "next";

import { siteName, openGraphDefaults, twitterDefaults } from "@/lib/site";
import { servicePages, servicePaths, type ServiceKey, type ServiceLocale } from "@/lib/services/pages";

// `lang` is the language the route serves; `urlLocale` is the locale segment of
// the request. Each route only exists in its own language, so the other locale 404s.
export function buildServiceMetadata(
  key: ServiceKey,
  lang: ServiceLocale,
  urlLocale: string,
): Metadata {
  if (urlLocale !== lang) return { title: "Not Found", robots: { index: false } };

  const content = servicePages[key][lang];
  const path = servicePaths[key][lang];
  const title = `${content.metaTitle} | ${siteName}`;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: path,
      languages: { id: servicePaths[key].id, en: servicePaths[key].en },
    },
    openGraph: {
      ...openGraphDefaults(lang),
      title,
      description: content.ogDescription,
      url: path,
    },
    twitter: {
      ...twitterDefaults,
      title,
      description: content.ogDescription,
    },
  };
}
