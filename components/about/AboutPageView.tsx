import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "next-seo";

import AboutBody from "@/components/about/AboutBody";
import { aboutContent, aboutPaths, type AboutLocale } from "@/lib/about/content";
import { siteOrigin } from "@/lib/site";
import id from "@/lib/i18n/dictionaries/id";
import en from "@/lib/i18n/dictionaries/en";

export default function AboutPageView({ lang, urlLocale }: { lang: AboutLocale; urlLocale: string }) {
  if (urlLocale !== lang) notFound();

  const content = aboutContent[lang];
  const url = `${siteOrigin}${aboutPaths[lang]}`;
  const dict = lang === "en" ? en : id;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: content.metaTitle,
    url,
    description: content.metaDescription,
    inLanguage: lang,
    about: {
      "@type": "Organization",
      name: "Flaat Studio",
      url: siteOrigin,
      foundingDate: "2025",
      address: { "@type": "PostalAddress", addressLocality: "Yogyakarta", addressCountry: "ID" },
      founder: content.team.map((m) => ({
        "@type": "Person",
        name: m.name,
        jobTitle: m.role,
        worksFor: { "@type": "Organization", name: "Flaat Studio", url: siteOrigin },
      })),
    },
  };

  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbJsonLd
        scriptId={`about-${lang}-breadcrumb-jsonld`}
        items={[
          { name: dict.nav.home, item: `${siteOrigin}${lang === "en" ? "/en/" : "/"}` },
          { name: content.breadcrumbLabel, item: url },
        ]}
      />
      <AboutBody locale={lang} content={content} />
    </>
  );
}
