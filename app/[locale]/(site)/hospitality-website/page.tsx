import type { Metadata } from "next";
import { BreadcrumbJsonLd, FAQJsonLd } from "next-seo";
import { notFound } from "next/navigation";

import HospitalityBody, {
  type HospitalityContent,
} from "@/components/hospitality/HospitalityBody";
import { siteOrigin } from "@/lib/site";
import en from "@/lib/i18n/dictionaries/en";

type Props = {
  params: Promise<{ locale: string }>;
};

const SLUG = "hospitality-website";

const content: HospitalityContent & {
  metaTitle: string;
  metaDescription: string;
  ogDescription: string;
  breadcrumbLabel: string;
} = {
  eyebrow: "HOSPITALITY WEBSITE & BOOKING SYSTEMS",
  heroTitle: "Websites & Booking Systems for Hotels, Villas, and Homestays",
  heroDesc:
    "Flaat Studio helps hospitality businesses run their own booking website, so guests can check room availability and pay online directly, without relying entirely on OTAs or manual chat.",
  ctaHref:
    "https://wa.me/6285156652910?text=Hi%20Flaat%2C%20I%27d%20like%20to%20consult%20about%20a%20booking%20website%20for%20my%20hotel%2Fvilla",
  ctaLabel: "Free Consultation",
  needLabel: "THE PROBLEM",
  needTitle: "Manual booking creates extra work for guests and your team",
  needDesc:
    "Many hotels, villas, and homestays still take bookings through WhatsApp or Instagram chat, then check room availability manually. Beyond being error-prone, this keeps your business dependent on OTA platforms that take a significant commission from every booking.",
  servicesLabel: "SERVICES",
  servicesTitle: "What we can help with",
  services: [
    {
      title: "Online Booking Engine",
      desc: "Guests can check room availability and book directly from your website, no chat required first.",
    },
    {
      title: "Room & Rate Management",
      desc: "Update room availability, seasonal pricing, and stop-sell from one place, synced automatically to your website.",
    },
    {
      title: "Online Payment Integration",
      desc: "Guests can pay a deposit or in full directly through the website, with automatic confirmation.",
    },
    {
      title: "AI Auto-reply for Guests",
      desc: "Common guest questions on WhatsApp get answered automatically, whenever they reach out.",
    },
    {
      title: "Design That Fits Your Property",
      desc: "A website that highlights your property's atmosphere and character, not a generic template.",
    },
    {
      title: "Self-service CMS",
      desc: "Update photos, promos, and room information yourself without needing a developer.",
    },
  ],
  audiencesLabel: "WHO IT'S FOR",
  audiencesTitle: "Hospitality properties this fits",
  audiences: [
    "Villas & guesthouses",
    "Boutique hotels & resorts",
    "Homestays & glamping sites",
    "Farmstays & eco-lodges",
    "Tourist-area accommodations",
    "Local trip & experience operators",
  ],
  processLabel: "PROCESS",
  processTitle: "How we work",
  process: [
    { step: "01", title: "Understand", desc: "Discuss your property's needs: room count, room types, and how bookings currently work." },
    { step: "02", title: "Plan", desc: "Map out the booking flow and page structure that fits your property's character." },
    { step: "03", title: "Build", desc: "Design and build the website along with the booking and payment system." },
    { step: "04", title: "Test", desc: "Test the booking flow from both the guest side and your management side." },
    { step: "05", title: "Launch", desc: "Website and booking system go live, ready to take guests." },
    { step: "06", title: "Support", desc: "Maintenance and adjustments after the website is running." },
  ],
  whyLabel: "WHY FLAAT STUDIO",
  whyTitle: "Why Flaat Studio",
  why: [
    "Experienced in building hospitality booking systems that handle reservations, room availability, and online payments for clients in this industry",
    "Website and booking system built as one working product, not just a design with no function behind it",
    "Can connect to local or international payment gateways depending on your needs",
    "Support after launch, not just a handover",
  ],
  ctaSectionTitle: "Ready to run your own booking system?",
  ctaSectionDesc:
    "Free consultation, no commitment. Tell us about your property's current setup, and we'll help recommend the most relevant booking solution.",
  ctaSectionLabel: "Free Consultation via WhatsApp",
  faqLabel: "FAQ",
  faqTitle: "Frequently asked questions",
  faq: [
    {
      q: "Can it connect to a payment gateway?",
      a: "Yes. The website can be connected to local or international payment gateways, so guests can pay a deposit or in full directly online.",
    },
    {
      q: "Can it manage multiple room types at once?",
      a: "Yes. The system is designed so you can manage availability and pricing for multiple room types from one place.",
    },
    {
      q: "How long does a booking system like this take to build?",
      a: "Timeline depends on the complexity of your needs, since a booking system usually requires more scope than a standard informational website. This is discussed at the start of the consultation.",
    },
    {
      q: "Can this work for a property outside Indonesia, or an owner based abroad?",
      a: "Yes. The entire workflow is remote-friendly, so property owners based abroad can still consult and follow progress without any distance barrier.",
    },
  ],
  metaTitle: "Hotel, Villa & Homestay Booking Website Development | Flaat Studio",
  metaDescription:
    "Flaat Studio builds websites and online booking systems for hotels, villas, and homestays, complete with room management, online payments, and AI auto-reply for guests.",
  ogDescription:
    "Websites and booking systems for hotels, villas, and homestays that want to open a direct booking channel.",
  breadcrumbLabel: "Hotel & Villa Website Services",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return { title: "Not Found", robots: { index: false } };

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `/en/${SLUG}/`,
      languages: {
        id: "/jasa-website-hotel-villa/",
        en: `/en/${SLUG}/`,
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.ogDescription,
      url: `/en/${SLUG}/`,
    },
    twitter: {
      title: content.metaTitle,
      description: content.ogDescription,
    },
  };
}

export default async function HospitalityEnPage({ params }: Props) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Flaat Studio - ${content.breadcrumbLabel}`,
    url: `${siteOrigin}/en/${SLUG}/`,
    description: content.metaDescription,
    areaServed: { "@type": "Country", name: "Indonesia" },
    provider: { "@type": "Organization", name: "Flaat Studio", url: siteOrigin },
    serviceType: [
      "Hotel booking website development",
      "Villa website development",
      "Booking engine development",
      "Hospitality website design",
    ],
  };
  const faqJsonLdItems = content.faq.map((i) => ({ question: i.q, answer: i.a }));
  const breadcrumbItems = [
    { name: en.nav.home, item: `${siteOrigin}/en/` },
    { name: content.breadcrumbLabel, item: `${siteOrigin}/en/${SLUG}/` },
  ];

  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FAQJsonLd scriptId='hospitality-en-faq-jsonld' questions={faqJsonLdItems} />
      <BreadcrumbJsonLd scriptId='hospitality-en-breadcrumb-jsonld' items={breadcrumbItems} />
      <HospitalityBody locale={locale} content={content} />
    </>
  );
}
