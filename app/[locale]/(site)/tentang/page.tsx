import type { Metadata } from "next";

import AboutPageView from "@/components/about/AboutPageView";
import { aboutContent, aboutPaths } from "@/lib/about/content";
import { siteName, openGraphDefaults, twitterDefaults } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "id") return { title: "Not Found", robots: { index: false } };

  const content = aboutContent.id;
  const title = `${content.metaTitle} | ${siteName}`;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: aboutPaths.id,
      languages: { id: aboutPaths.id, en: aboutPaths.en },
    },
    openGraph: {
      ...openGraphDefaults("id"),
      title,
      description: content.ogDescription,
      url: aboutPaths.id,
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
  return <AboutPageView lang='id' urlLocale={locale} />;
}
