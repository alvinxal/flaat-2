import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "next-seo";

import HomeFooter from "@/components/layout/HomeFooter";
import ContactSection from "@/components/home/ContactSection";
import { siteOrigin } from "@/lib/site";
import id from "@/lib/i18n/dictionaries/id";
import en from "@/lib/i18n/dictionaries/en";

type Props = {
  params: Promise<{ locale: string }>;
};

const copy = {
  id: {
    eyebrow: "KONTAK",
    title: "Diskusikan kebutuhan website & sistem AI Anda",
    description:
      "Ceritakan tantangan bisnis Anda, dan kami bantu rekomendasikan solusi web dan AI yang paling relevan — tanpa komitmen.",
    metaTitle: "Kontak | Flaat Studio",
    metaDescription:
      "Hubungi Flaat Studio untuk konsultasi jasa pembuatan website dan sistem AI untuk bisnis Anda.",
  },
  en: {
    eyebrow: "CONTACT",
    title: "Let's discuss your web & AI systems needs",
    description:
      "Tell us about your business challenges, and we'll help recommend the most relevant web and AI solution — no commitment required.",
    metaTitle: "Contact | Flaat Studio",
    metaDescription:
      "Get in touch with Flaat Studio for a consultation on website development and AI systems for your business.",
  },
};

function getCopy(locale: string) {
  return locale === "en" ? copy.en : copy.id;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getCopy(locale);
  const p = locale === "en" ? "/en" : "";

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `${p}/contact/`,
      languages: {
        id: "/contact/",
        en: "/en/contact/",
      },
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: `${p}/contact/`,
    },
    twitter: {
      title: c.metaTitle,
      description: c.metaDescription,
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const dict = locale === "en" ? en : id;
  const c = getCopy(locale);
  const p = locale === "en" ? "/en" : "";

  return (
    <main className='min-h-screen px-5 pb-8 pt-[72px] desk:pt-0 desk:pl-[260px] desk:px-10'>
      <BreadcrumbJsonLd
        scriptId='contact-breadcrumb-jsonld'
        items={[
          { name: dict.nav.home, item: `${siteOrigin}${p}/` },
          { name: dict.nav.contact, item: `${siteOrigin}${p}/contact/` },
        ]}
      />
      <div className='relative w-full max-w-[1300px] mx-auto flex flex-col gap-[7.5rem] pt-10 px-5 tab:p-8 desk:p-8 desk:border-r desk:border-gray-200'>
        <section className='relative flex flex-col gap-8 bg-[#fafafa] p-8 tab:p-12 desk:p-16'>
          <p className='m-0 font-mono text-xs tracking-widest uppercase text-gray-800'>
            {c.eyebrow}
          </p>
          <div className='flex flex-col gap-6 max-w-[55ch]'>
            <h1 className='m-0 text-3xl tab:text-4xl desk:text-5xl leading-tight tracking-tight font-medium font-sans text-accent'>
              {c.title}
            </h1>
            <p className='m-0 text-lg leading-[1.7] tracking-[-0.01em] font-body text-gray-500'>
              {c.description}
            </p>
          </div>
        </section>

        <ContactSection />
        <HomeFooter />
      </div>
    </main>
  );
}
