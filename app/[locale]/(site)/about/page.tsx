import type { Metadata } from "next";

import AboutPageView from "@/components/about/AboutPageView";
import { aboutContent, aboutPaths } from "@/lib/about/content";
import { siteName, openGraphDefaults, twitterDefaults } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return { title: "Not Found", robots: { index: false } };

  const content = aboutContent.en;
  const title = `${content.metaTitle} | ${siteName}`;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: aboutPaths.en,
      languages: { id: aboutPaths.id, en: aboutPaths.en },
    },
    openGraph: {
      ...openGraphDefaults("en"),
      title,
      description: content.ogDescription,
      url: aboutPaths.en,
    },
    twitter: {
      ...twitterDefaults,
      title,
      description: content.ogDescription,
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  return <AboutPageView lang='en' urlLocale={locale} />;
}
