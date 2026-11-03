import { notFound } from "next/navigation";
import { BreadcrumbJsonLd, FAQJsonLd } from "next-seo";

import HospitalityBody from "@/components/hospitality/HospitalityBody";
import { siteOrigin } from "@/lib/site";
import { servicePages, servicePaths, type ServiceKey, type ServiceLocale } from "@/lib/services/pages";
import id from "@/lib/i18n/dictionaries/id";
import en from "@/lib/i18n/dictionaries/en";

export default function ServicePageView({
  serviceKey,
  lang,
  urlLocale,
}: {
  serviceKey: ServiceKey;
  lang: ServiceLocale;
  urlLocale: string;
}) {
  if (urlLocale !== lang) notFound();

  const content = servicePages[serviceKey][lang];
  const url = `${siteOrigin}${servicePaths[serviceKey][lang]}`;
  const dict = lang === "en" ? en : id;
  const scriptPrefix = `service-${serviceKey}-${lang}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Flaat Studio - ${content.breadcrumbLabel}`,
    url,
    description: content.metaDescription,
    areaServed: { "@type": "Country", name: "Indonesia" },
    provider: { "@type": "Organization", name: "Flaat Studio", url: siteOrigin },
    serviceType: content.serviceType,
  };

  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FAQJsonLd
        scriptId={`${scriptPrefix}-faq-jsonld`}
        questions={content.faq.map((i) => ({ question: i.q, answer: i.a }))}
      />
      <BreadcrumbJsonLd
        scriptId={`${scriptPrefix}-breadcrumb-jsonld`}
        items={[
          { name: dict.nav.home, item: `${siteOrigin}${lang === "en" ? "/en/" : "/"}` },
          { name: content.breadcrumbLabel, item: url },
        ]}
      />
      <HospitalityBody locale={lang} content={content} />
    </>
  );
}
