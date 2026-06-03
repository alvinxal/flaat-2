import type { Metadata } from "next";
import { JsonLdScript, LocalBusinessJsonLd } from "next-seo";

import HomeFooter from "@/components/layout/HomeFooter";
import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ContactSection from "@/components/home/ContactSection";
import { ogImagePath, siteOrigin } from "@/lib/site";
import id from "@/lib/i18n/dictionaries/id";
import en from "@/lib/i18n/dictionaries/en";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = locale === "en" ? en : id;

  return {
    title: dict.metadata.home.title,
    description: dict.metadata.home.description,
    alternates: {
      canonical: locale === "en" ? "/en/" : "/",
      languages: {
        id: "/",
        en: "/en/",
      },
    },
    openGraph: {
      title: dict.metadata.home.title,
      description: dict.metadata.home.description,
      url: locale === "en" ? "/en/" : "/",
    },
    twitter: {
      title: dict.metadata.home.title,
      description: dict.metadata.home.description,
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const dict = locale === "en" ? en : id;

  const homeServiceEnrichment = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: dict.services.items[0].title,
        serviceType: dict.services.items[0].title,
        provider: { "@type": "Organization", name: "Flaat Studio", url: siteOrigin },
        areaServed: locale === "en"
          ? undefined
          : [
              { "@type": "City", name: "Yogyakarta" },
              { "@type": "City", name: "Semarang" },
              { "@type": "City", name: "Solo" },
              { "@type": "City", name: "Purwokerto" },
              { "@type": "City", name: "Magelang" },
              { "@type": "City", name: "Salatiga" },
              { "@type": "City", name: "Temanggung" },
            ],
      },
      {
        "@type": "Service",
        name: dict.services.items[1].title,
        serviceType: dict.services.items[1].title,
        provider: { "@type": "Organization", name: "Flaat Studio", url: siteOrigin },
      },
      {
        "@type": "Service",
        name: dict.services.items[2].title,
        serviceType: dict.services.items[2].title,
        provider: { "@type": "Organization", name: "Flaat Studio", url: siteOrigin },
      },
    ],
  };

  return (
    <main className='min-h-screen px-5 pb-8 pt-[72px] desk:pt-0 desk:pl-[260px] desk:px-10'>
      <LocalBusinessJsonLd
        type='ProfessionalService'
        scriptId='home-professional-service-jsonld'
        name='Flaat Studio'
        url={`${siteOrigin}/${locale === "en" ? "en/" : ""}`}
        image={`${siteOrigin}${ogImagePath}`}
        description={dict.metadata.home.description}
        areaServed={locale === "en" ? undefined : ["Indonesia", "Yogyakarta"]}
        address={{
          addressLocality: "Yogyakarta",
          addressCountry: "ID",
        }}
      />
      <JsonLdScript
        scriptKey='home-services-jsonld'
        data={homeServiceEnrichment}
      />
      <div className='relative w-full max-w-[1300px] mx-auto flex flex-col gap-[7.5rem] pt-10 px-5 tab:p-8 desk:p-8 desk:border-r desk:border-gray-200'>
        <HeroSection />
        <AboutSection locale={locale} />
        <ServicesSection locale={locale} />
        <ProjectsSection locale={locale} />
        <ContactSection />
        <HomeFooter />
      </div>
    </main>
  );
}
