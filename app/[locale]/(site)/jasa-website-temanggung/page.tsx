import type { Metadata } from "next";
import { BreadcrumbJsonLd, FAQJsonLd } from "next-seo";

import HomeFooter from "@/components/layout/HomeFooter";
import ContactSection from "@/components/home/ContactSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import { notFound } from "next/navigation";
import { siteOrigin } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "en") return { title: "Not Found", robots: { index: false } };
  return {
  title: "Jasa Website Temanggung",
  description:
    "Flaat Studio melayani jasa pembuatan website untuk bisnis di Temanggung, termasuk company profile, landing page, website custom, SEO basic, dan integrasi WhatsApp.",
  alternates: {
    canonical: "/jasa-website-temanggung/",
  },
  openGraph: {
    title: "Jasa Website Temanggung | Flaat Studio",
    description:
      "Bangun website profesional untuk bisnis di Temanggung bersama Flaat Studio.",
    url: "/jasa-website-temanggung/",
  },
  twitter: {
    title: "Jasa Website Temanggung | Flaat Studio",
    description:
      "Bangun website profesional untuk bisnis di Temanggung bersama Flaat Studio.",
  },
};
}
const services = [
  {
    title: "Company Profile",
    desc: "Website satu halaman atau multi-halaman yang menjelaskan profil bisnis, layanan, dan kontak secara profesional.",
  },
  {
    title: "Landing Page",
    desc: "Halaman promosi untuk kampanye produk, jasa, atau event dengan fokus pada konversi dan CTA.",
  },
  {
    title: "Katalog Online",
    desc: "Website untuk menampilkan produk atau jasa secara rapi, lengkap dengan gambar, harga, dan deskripsi.",
  },
  {
    title: "SEO Teknis",
    desc: "Optimasi struktur website agar lebih mudah ditemukan di Google, termasuk metadata, sitemap, dan kecepatan.",
  },
  {
    title: "Integrasi WhatsApp",
    desc: "Tombol chat dan form kontak yang terhubung langsung ke WhatsApp bisnis Anda.",
  },
  {
    title: "AI Automation",
    desc: "Otomatisasi pesan masuk, booking, dan follow-up customer yang bekerja otomatis 24/7.",
  },
];

const audiences = [
  "UMKM & Toko Lokal",
  "Travel & Homestay",
  "Sekolah & Edukasi",
  "Klinik & Jasa Profesional",
  "Properti & Konstruksi",
  "Kuliner & Cafe",
];

const processSteps = [
  {
    step: "01",
    title: "Pahami",
    desc: "Diskusi kebutuhan bisnis dan target audiens di Temanggung.",
  },
  {
    step: "02",
    title: "Rencana",
    desc: "Susun struktur halaman dan konten yang jelas sesuai brand Anda.",
  },
  {
    step: "03",
    title: "Buat",
    desc: "Desain dan develop website sesuai kebutuhan bisnis lokal.",
  },
  {
    step: "04",
    title: "Optimasi",
    desc: "SEO teknis: metadata, canonical, sitemap, kecepatan, mobile.",
  },
  {
    step: "05",
    title: "Launch",
    desc: "Uji, pastikan semua berjalan, dan publikasikan website Anda.",
  },
  {
    step: "06",
    title: "Support",
    desc: "Bantuan maintenance dan update setelah website live.",
  },
];

const benefits = [
  "Strategi digital yang disesuaikan dengan bisnis lokal Temanggung",
  "Website cepat, ringan, dan nyaman diakses dari HP",
  "SEO teknis bawaan supaya lebih mudah ditemukan di Google",
  "Integrasi WhatsApp dan form kontak yang siap dipakai",
  "Support setelah launch, bukan sekadar serah terima",
];

const faqItems = [
  {
    q: "Apakah Flaat Studio melayani jasa website di Temanggung?",
    a: "Ya. Flaat Studio melayani pembuatan website untuk bisnis di Temanggung dan berbagai kota lain seperti Yogyakarta, Semarang, Solo, Purwokerto, Magelang, dan Salatiga.",
  },
  {
    q: "Apakah bisa konsultasi online?",
    a: "Bisa. Diskusi awal bisa lewat WhatsApp atau meeting online sebelum project dimulai.",
  },
  {
    q: "Berapa biaya pembuatan website?",
    a: "Biaya menyesuaikan kebutuhan, mulai dari landing page sederhana sampai website custom dengan fitur lebih lengkap.",
  },
  {
    q: "Apakah bisa sekalian SEO?",
    a: "Bisa. Website dibuat dengan struktur teknis SEO dasar, termasuk metadata, heading, canonical, sitemap, dan optimasi performa.",
  },
  {
    q: "Apakah ada layanan maintenance setelah website selesai?",
    a: "Ada. Kami bisa bantu maintenance, update konten, dan perbaikan kecil setelah website launch.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Flaat Studio - Jasa Website Temanggung",
  url: `${siteOrigin}/jasa-website-temanggung/`,
  description:
    "Flaat Studio melayani jasa pembuatan website untuk bisnis di Temanggung, termasuk company profile, landing page, website custom, SEO basic, dan integrasi WhatsApp.",
  areaServed: {
    "@type": "City",
    name: "Temanggung",
  },
  provider: {
    "@type": "Organization",
    name: "Flaat Studio",
    url: siteOrigin,
  },
  serviceType: [
    "Jasa pembuatan website",
    "Landing page",
    "Company profile website",
    "SEO teknis",
  ],
};

export default async function JasaWebsiteTemanggungPage({ params }: { params: Promise<{ locale: string }> }) {

  const { locale } = await params;
  if (locale === "en") notFound();

  return (
    <main className="min-h-screen px-5 pb-8 pt-[72px] desk:pt-0 desk:pl-[260px] desk:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQJsonLd scriptId="temanggung-faq-jsonld" questions={faqItems.map((i) => ({ question: i.q, answer: i.a }))} />
      <BreadcrumbJsonLd
        scriptId="temanggung-breadcrumb-jsonld"
        items={[
          { name: "Beranda", item: `${siteOrigin}/` },
          { name: "Jasa Website", item: `${siteOrigin}/` },
          { name: "Temanggung", item: `${siteOrigin}/jasa-website-temanggung/` },
        ]}
      />
      <div className="relative w-full max-w-[1300px] mx-auto flex flex-col gap-[7.5rem] pt-10 px-5 tab:p-8 desk:p-8 desk:border-r desk:border-gray-200">

        {/* HERO */}
        <section className="relative flex flex-col gap-8 bg-[#fafafa] p-8 tab:p-12 desk:p-16">
          <p className="m-0 font-mono text-xs tracking-widest uppercase text-gray-800">
            JASA WEBSITE TEMANGGUNG
          </p>
          <div className="flex flex-col gap-10 tab:flex-row tab:items-end tab:justify-between">
            <div className="flex flex-col gap-6 max-w-[55ch]">
              <h1 className="m-0 text-3xl tab:text-4xl desk:text-5xl leading-tight tracking-tight font-medium font-sans text-accent">
                Jasa Website di Temanggung
              </h1>
              <p className="m-0 text-lg leading-[1.7] tracking-[-0.01em] font-body text-gray-500">
                Flaat Studio membantu bisnis di Temanggung membangun website
                profesional untuk meningkatkan kredibilitas, menjelaskan
                layanan dengan lebih rapi, dan memudahkan calon customer
                menghubungi bisnis Anda.
              </p>
            </div>
            <a
              href="https://wa.me/6285156652910?text=Halo%20Flaat%2C%20saya%20ingin%20konsultasi%20website%20untuk%20bisnis%20di%20Temanggung"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 w-fit pb-[0.3rem] border-b border-accent text-accent no-underline text-lg leading-[1.3] tracking-[-0.02em] font-sans transition-opacity duration-250 hover:opacity-60 shrink-0"
            >
              <span>Konsultasi Gratis</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

        </section>

        {/* MASALAH */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <p className="m-0 font-mono text-xs tracking-widest uppercase text-gray-800">
              KEBUTUHAN
            </p>
          </div>
          <h2 className="m-0 text-2xl tab:text-3xl leading-tight font-semibold font-sans text-accent max-w-[28ch]">
            Website yang membantu bisnis lokal terlihat lebih serius
          </h2>
          <p className="m-0 text-lg leading-[1.7] tracking-[-0.01em] font-body text-gray-500 max-w-[70ch]">
            Banyak bisnis di Temanggung sudah aktif di Instagram dan WhatsApp,
            tapi belum punya website yang bisa menjelaskan layanan dengan jelas.
            Website profesional membantu bisnis Anda terlihat lebih kredibel,
            mudah ditemukan di Google, dan punya tempat resmi untuk calon
            customer melihat informasi bisnis.
          </p>
        </section>

        {/* LAYANAN */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <p className="m-0 font-mono text-xs tracking-widest uppercase text-gray-800">
              LAYANAN
            </p>
          </div>
          <h2 className="m-0 text-2xl tab:text-3xl leading-tight font-semibold font-sans text-accent">
            Apa yang bisa kami bantu
          </h2>
          <div className="grid grid-cols-1 gap-3 tab:grid-cols-2 desk:grid-cols-3">
            {services.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-3 p-6 border border-gray-200 bg-white"
              >
                <h3 className="m-0 text-lg leading-normal font-medium font-sans text-accent">
                  {item.title}
                </h3>
                <p className="m-0 text-base leading-[1.6] font-body text-gray-500">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* COCOK UNTUK */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <p className="m-0 font-mono text-xs tracking-widest uppercase text-gray-800">
              COCOK UNTUK
            </p>
          </div>
          <h2 className="m-0 text-2xl tab:text-3xl leading-tight font-semibold font-sans text-accent">
            Bisnis di Temanggung yang cocok
          </h2>
          <div className="flex flex-wrap gap-3">
            {audiences.map((item) => (
              <span
                key={item}
                className="inline-flex px-4 py-2 border border-gray-200 text-base leading-[1.3] tracking-[-0.02em] font-body text-gray-600 bg-white"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* PROSES */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <p className="m-0 font-mono text-xs tracking-widest uppercase text-gray-800">
              PROSES
            </p>
          </div>
          <h2 className="m-0 text-2xl tab:text-3xl leading-tight font-semibold font-sans text-accent">
            Bagaimana kami bekerja
          </h2>
          <div className="grid grid-cols-1 gap-3 tab:grid-cols-2 desk:grid-cols-3">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 p-6 border border-gray-200 bg-white"
              >
                <span className="font-mono text-2xl font-semibold text-accent/30 leading-none">
                  {item.step}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="m-0 text-lg leading-normal font-medium font-sans text-accent">
                    {item.title}
                  </h3>
                  <p className="m-0 text-base leading-[1.6] font-body text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* KENAPA FLAAT STUDIO */}
        <section className="flex flex-col gap-6 bg-[#fafafa] p-8 tab:p-12 desk:p-16">
          <div className="flex items-center justify-between gap-4">
            <p className="m-0 font-mono text-xs tracking-widest uppercase text-gray-800">
              KEUNGGULAN
            </p>
          </div>
          <h2 className="m-0 text-2xl tab:text-3xl leading-tight font-semibold font-sans text-accent">
            Kenapa Flaat Studio
          </h2>
          <ul className="m-0 pl-6 list-disc space-y-4 text-lg leading-[1.65] tracking-[-0.01em] font-body text-gray-500">
            {benefits.map((item) => (
              <li key={item} className="my-1">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA PANEL */}
        <section className="flex flex-col gap-8 bg-[#2f4157] p-8 tab:p-12 desk:p-16">
          <h2 className="m-0 text-2xl tab:text-3xl leading-tight font-semibold font-sans text-white max-w-[24ch]">
            Siap membuat website untuk bisnis di Temanggung?
          </h2>
          <p className="m-0 text-lg leading-[1.7] tracking-[-0.01em] font-body text-white/70 max-w-[55ch]">
            Diskusi gratis tanpa komitmen. Ceritakan kebutuhan bisnis Anda, dan
            kami bantu rekomendasikan solusi yang paling cocok.
          </p>
          <a
            href="https://wa.me/6285156652910?text=Halo%20Flaat%2C%20saya%20ingin%20konsultasi%20website%20untuk%20bisnis%20di%20Temanggung"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 w-fit pb-[0.3rem] border-b border-white/50 text-white no-underline text-lg leading-[1.3] tracking-[-0.02em] font-sans transition-opacity duration-250 hover:opacity-70"
          >
            <span>Konsultasi Gratis via WhatsApp</span>
            <span aria-hidden="true">→</span>
          </a>
        </section>

        {/* FAQ */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <p className="m-0 font-mono text-xs tracking-widest uppercase text-gray-800">
              FAQ
            </p>
          </div>
          <h2 className="m-0 text-2xl tab:text-3xl leading-tight font-semibold font-sans text-accent">
            Pertanyaan umum
          </h2>
          <div className="flex flex-col gap-6">
            {faqItems.map((item) => (
              <div
                key={item.q}
                className="flex flex-col gap-3 p-6 border border-gray-200 bg-white"
              >
                <h3 className="m-0 text-lg leading-normal font-medium font-sans text-accent">
                  {item.q}
                </h3>
                <p className="m-0 text-base leading-[1.6] font-body text-gray-500">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <p className="m-0 font-mono text-xs tracking-widest uppercase text-gray-800">
              PROJECT
            </p>
          </div>
          <ProjectsSection locale={locale} />
        </div>

        <ContactSection />

        <HomeFooter />
      </div>
    </main>
  );

}
