import type { Metadata } from "next";
import { BreadcrumbJsonLd, FAQJsonLd } from "next-seo";
import { notFound } from "next/navigation";

import HospitalityBody, {
  type HospitalityContent,
} from "@/components/hospitality/HospitalityBody";
import { siteOrigin } from "@/lib/site";
import id from "@/lib/i18n/dictionaries/id";

type Props = {
  params: Promise<{ locale: string }>;
};

const SLUG = "jasa-website-hotel-villa";

const content: HospitalityContent & {
  metaTitle: string;
  metaDescription: string;
  ogDescription: string;
  breadcrumbLabel: string;
} = {
  eyebrow: "JASA WEBSITE HOTEL & VILLA",
  heroTitle: "Website & Sistem Booking untuk Hotel, Villa, dan Homestay",
  heroDesc:
    "Flaat Studio membantu bisnis hospitality punya website booking sendiri, jadi tamu bisa cek ketersediaan kamar dan bayar langsung online, tanpa selalu bergantung pada OTA atau chat manual.",
  ctaHref:
    "https://wa.me/6285156652910?text=Halo%20Flaat%2C%20saya%20ingin%20konsultasi%20website%20booking%20untuk%20hotel%2Fvilla%20saya",
  ctaLabel: "Konsultasi Gratis",
  needLabel: "KEBUTUHAN",
  needTitle: "Booking yang masih manual bikin tamu dan tim Anda repot",
  needDesc:
    "Banyak hotel, villa, dan homestay masih menerima booking lewat chat WhatsApp atau Instagram, lalu cek ketersediaan kamar secara manual. Selain rawan salah catat, cara ini juga membuat bisnis Anda terus bergantung pada platform OTA yang memotong komisi cukup besar dari setiap booking.",
  servicesLabel: "LAYANAN",
  servicesTitle: "Apa yang bisa kami bantu",
  services: [
    {
      title: "Booking Engine Online",
      desc: "Tamu bisa cek ketersediaan kamar dan booking langsung dari website Anda, tanpa harus chat dulu.",
    },
    {
      title: "Manajemen Kamar & Harga",
      desc: "Update ketersediaan kamar, harga per musim, dan stop-sell dari satu tempat, sinkron otomatis ke website.",
    },
    {
      title: "Integrasi Pembayaran Online",
      desc: "Tamu bisa bayar DP atau lunas langsung lewat website, dengan konfirmasi otomatis.",
    },
    {
      title: "AI Auto-reply untuk Tamu",
      desc: "Balas pertanyaan umum tamu di WhatsApp secara otomatis, kapan pun mereka menghubungi.",
    },
    {
      title: "Desain Sesuai Karakter Properti",
      desc: "Tampilan website yang menonjolkan suasana dan keunikan properti Anda, bukan template generik.",
    },
    {
      title: "CMS untuk Update Sendiri",
      desc: "Ubah foto, promo, dan info kamar sendiri tanpa harus minta bantuan developer.",
    },
  ],
  audiencesLabel: "COCOK UNTUK",
  audiencesTitle: "Properti hospitality yang cocok",
  audiences: [
    "Villa & guesthouse",
    "Hotel butik & resort",
    "Homestay & glamping",
    "Farmstay & eco-lodge",
    "Penginapan area wisata",
    "Operator trip & pengalaman lokal",
  ],
  processLabel: "PROSES",
  processTitle: "Bagaimana kami bekerja",
  process: [
    { step: "01", title: "Pahami", desc: "Diskusi kebutuhan properti Anda: jumlah kamar, tipe kamar, dan cara booking saat ini." },
    { step: "02", title: "Rencana", desc: "Susun alur booking dan struktur halaman yang sesuai karakter properti Anda." },
    { step: "03", title: "Buat", desc: "Desain dan bangun website beserta sistem booking dan pembayarannya." },
    { step: "04", title: "Uji Coba", desc: "Tes alur booking dari sisi tamu maupun pengelolaan dari sisi Anda." },
    { step: "05", title: "Launch", desc: "Website dan sistem booking live, siap menerima tamu." },
    { step: "06", title: "Support", desc: "Bantuan maintenance dan penyesuaian setelah website berjalan." },
  ],
  whyLabel: "KEUNGGULAN",
  whyTitle: "Kenapa Flaat Studio",
  why: [
    "Berpengalaman membangun sistem booking hospitality yang menangani reservasi, ketersediaan kamar, dan pembayaran online untuk klien di industri ini",
    "Website dan sistem booking dibangun jadi satu, bukan cuma tampilan tanpa fungsi",
    "Bisa terhubung ke pembayaran online lokal maupun internasional sesuai kebutuhan",
    "Support setelah launch, bukan sekadar serah terima",
  ],
  ctaSectionTitle: "Siap punya sistem booking sendiri?",
  ctaSectionDesc:
    "Diskusi gratis tanpa komitmen. Ceritakan kondisi properti Anda saat ini, dan kami bantu rekomendasikan solusi booking yang paling relevan.",
  ctaSectionLabel: "Konsultasi Gratis via WhatsApp",
  faqLabel: "FAQ",
  faqTitle: "Pertanyaan umum",
  faq: [
    {
      q: "Apakah bisa terhubung ke payment gateway?",
      a: "Bisa. Website dapat dihubungkan ke payment gateway lokal maupun internasional, sehingga tamu bisa bayar DP atau lunas langsung secara online.",
    },
    {
      q: "Apakah bisa kelola beberapa tipe kamar sekaligus?",
      a: "Bisa. Sistem dirancang agar Anda bisa mengatur ketersediaan dan harga untuk beberapa tipe kamar dari satu tempat.",
    },
    {
      q: "Berapa lama pengerjaan sistem booking seperti ini?",
      a: "Timeline menyesuaikan kompleksitas kebutuhan, karena sistem booking biasanya butuh scope lebih dari sekadar website informasi biasa. Ini dibahas di awal konsultasi.",
    },
    {
      q: "Apakah bisa untuk properti di luar Indonesia atau pemilik yang tinggal di luar negeri?",
      a: "Bisa. Seluruh proses kerja dilakukan secara remote, jadi pemilik properti yang tinggal di luar negeri tetap bisa berkonsultasi dan memantau progres tanpa kendala jarak.",
    },
  ],
  metaTitle: "Jasa Website & Sistem Booking Hotel, Villa, Homestay | Flaat Studio",
  metaDescription:
    "Flaat Studio membangun website dan sistem booking online untuk hotel, villa, dan homestay, lengkap dengan manajemen kamar, pembayaran online, dan AI auto-reply untuk tamu.",
  ogDescription:
    "Website dan sistem booking untuk hotel, villa, dan homestay yang ingin buka jalur booking langsung.",
  breadcrumbLabel: "Jasa Website Hotel & Villa",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "en") return { title: "Not Found", robots: { index: false } };

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `/${SLUG}/`,
      languages: {
        id: `/${SLUG}/`,
        en: "/en/hospitality-website/",
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.ogDescription,
      url: `/${SLUG}/`,
    },
    twitter: {
      title: content.metaTitle,
      description: content.ogDescription,
    },
  };
}

export default async function HospitalityIdPage({ params }: Props) {
  const { locale } = await params;
  if (locale === "en") notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Flaat Studio - ${content.breadcrumbLabel}`,
    url: `${siteOrigin}/${SLUG}/`,
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
    { name: id.nav.home, item: `${siteOrigin}/` },
    { name: content.breadcrumbLabel, item: `${siteOrigin}/${SLUG}/` },
  ];

  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FAQJsonLd scriptId='hospitality-id-faq-jsonld' questions={faqJsonLdItems} />
      <BreadcrumbJsonLd scriptId='hospitality-id-breadcrumb-jsonld' items={breadcrumbItems} />
      <HospitalityBody locale={locale} content={content} />
    </>
  );
}
