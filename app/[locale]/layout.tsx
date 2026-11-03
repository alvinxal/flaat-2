import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { JsonLdScript, OrganizationJsonLd } from "next-seo";

import RootHtml from "@/components/layout/RootHtml";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { ogImagePath, siteName, siteUrl } from "@/lib/site";
import { locales, type Locale } from "@/lib/i18n/config";
import type { IDict } from "@/lib/i18n/dictionaries/id";
import id from "@/lib/i18n/dictionaries/id";
import en from "@/lib/i18n/dictionaries/en";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function getDict(locale: string): IDict {
  return locale === "en" ? en : id;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDict(locale);

  return {
    metadataBase: siteUrl,
    title: {
      default: dict.metadata.root.title,
      template: `%s | ${siteName}`,
    },
    description: dict.metadata.root.description,
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "id_ID",
      url: siteUrl.toString(),
      siteName,
      title: dict.metadata.root.title,
      description: dict.metadata.root.description,
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: `${siteName} social preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.root.title,
      description: dict.metadata.root.description,
      images: [ogImagePath],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDict(locale);

  return (
    <RootHtml lang={locale}>
      <LocaleProvider locale={locale as Locale}>
        <OrganizationJsonLd
          scriptId="organization-jsonld"
          name={siteName}
          url={siteUrl.toString()}
          logo={new URL(ogImagePath, siteUrl).toString()}
          email="hi@flaat.studio"
          sameAs={[
            "https://www.instagram.com/flaatstudio/",
            "https://www.linkedin.com/in/flaat-studio-84ab3b39a/",
            "https://wa.me/6285156652910",
          ]}
          address={{
            addressLocality: "Yogyakarta",
            addressCountry: "ID",
          }}
        />
        <JsonLdScript
          scriptKey="organization-knowsabout-jsonld"
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteName,
            url: siteUrl.toString(),
            knowsAbout: [
              "jasa pembuatan website",
              "jasa AI automation",
              "jasa digital marketing",
              "digital agency yogyakarta",
            ],
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteName,
              url: siteUrl.toString(),
              inLanguage: locale === "en" ? "en-US" : "id-ID",
              description: dict.metadata.root.description,
            }),
          }}
        />
        {children}
        <GoogleAnalytics gaId="G-GQJSHQGWRM" />
      </LocaleProvider>
    </RootHtml>
  );
}
