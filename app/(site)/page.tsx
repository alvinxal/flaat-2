import type { Metadata } from "next";

import HomeFooter from "@/components/layout/HomeFooter";
import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
// import TestimonialSection from "@/components/home/TestimonialSection";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website, AI, dan Digital Marketing",
  description:
    "Flaat Studio membantu bisnis tumbuh lewat jasa pembuatan website, AI automation, dan strategi digital marketing yang terukur dari Yogyakarta.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jasa Pembuatan Website, AI, dan Digital Marketing",
    description:
      "Flaat Studio membantu bisnis tumbuh lewat jasa pembuatan website, AI automation, dan strategi digital marketing yang terukur dari Yogyakarta.",
    url: "/",
  },
  twitter: {
    title: "Jasa Pembuatan Website, AI, dan Digital Marketing",
    description:
      "Flaat Studio membantu bisnis tumbuh lewat jasa pembuatan website, AI automation, dan strategi digital marketing yang terukur dari Yogyakarta.",
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Flaat Studio",
  url: "https://flaat.studio",
  image: "https://flaat.studio/assets/images/og-image.webp",
  description:
    "Flaat Studio membantu bisnis tumbuh lewat jasa pembuatan website, AI automation, dan strategi digital marketing yang terukur dari Yogyakarta.",
  areaServed: ["Indonesia", "Yogyakarta"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yogyakarta",
    addressCountry: "ID",
  },
  serviceType: [
    "Jasa pembuatan website",
    "Jasa AI automation",
    "Agency digital marketing",
  ],
};

export default function HomePage() {
  return (
    <main className='min-h-screen px-5 pb-8 pt-[72px] desk:pt-0 desk:pl-[260px] desk:px-10'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
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
