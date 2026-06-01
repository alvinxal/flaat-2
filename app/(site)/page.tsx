import type { Metadata } from "next";
import { JsonLdScript, LocalBusinessJsonLd } from "next-seo";

import HomeFooter from "@/components/layout/HomeFooter";
import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
// import TestimonialSection from "@/components/home/TestimonialSection";
import ContactSection from "@/components/home/ContactSection";
import { ogImagePath, siteOrigin } from "@/lib/site";

export const metadata: Metadata = {
  title: "Flaat Studio - Jasa Website, AI, dan Digital Marketing",
  description:
    "Flaat Studio adalah digital partner yang menggabungkan web development, AI automation, dan strategi digital marketing untuk pertumbuhan bisnis dari Yogyakarta.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Flaat Studio - Jasa Website, AI, dan Digital Marketing",
    description:
      "Flaat Studio adalah digital partner yang menggabungkan web development, AI automation, dan strategi digital marketing untuk pertumbuhan bisnis dari Yogyakarta.",
    url: "/",
  },
  twitter: {
    title: "Flaat Studio - Jasa Website, AI, dan Digital Marketing",
    description:
      "Flaat Studio adalah digital partner yang menggabungkan web development, AI automation, dan strategi digital marketing untuk pertumbuhan bisnis dari Yogyakarta.",
  },
};

const homeServiceEnrichment = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Jasa Pembuatan Website",
      serviceType: "Jasa pembuatan website",
      provider: { "@type": "Organization", name: "Flaat Studio", url: siteOrigin },
      areaServed: [
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
      name: "AI Automation",
      serviceType: "AI automation",
      provider: { "@type": "Organization", name: "Flaat Studio", url: siteOrigin },
    },
    {
      "@type": "Service",
      name: "Digital Marketing",
      serviceType: "Digital marketing",
      provider: { "@type": "Organization", name: "Flaat Studio", url: siteOrigin },
    },
  ],
};

export default function HomePage() {
  return (
    <main className='min-h-screen px-5 pb-8 pt-[72px] desk:pt-0 desk:pl-[260px] desk:px-10'>
      <LocalBusinessJsonLd
        type='ProfessionalService'
        scriptId='home-professional-service-jsonld'
        name='Flaat Studio'
        url={`${siteOrigin}/`}
        image={`${siteOrigin}${ogImagePath}`}
        description='Flaat Studio membantu bisnis tumbuh lewat jasa pembuatan website, AI automation, dan strategi digital marketing yang terukur dari Yogyakarta.'
        areaServed={['Indonesia', 'Yogyakarta']}
        address={{
          addressLocality: 'Yogyakarta',
          addressCountry: 'ID',
        }}
      />
      <JsonLdScript
        scriptKey='home-services-jsonld'
        data={homeServiceEnrichment}
      />
      <div className='relative w-full max-w-[1300px] mx-auto flex flex-col gap-[7.5rem] pt-10 px-5 tab:p-8 desk:p-8 desk:border-r desk:border-gray-200'>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <HomeFooter />
      </div>
    </main>
  );
}
