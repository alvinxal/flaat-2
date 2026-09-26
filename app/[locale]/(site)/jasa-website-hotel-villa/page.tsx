import type { Metadata } from "next";
import { BreadcrumbJsonLd, FAQJsonLd } from "next-seo";
import { RiWhatsappLine } from "react-icons/ri";

import HomeFooter from "@/components/layout/HomeFooter";
import FAQSection from "@/components/home/FAQSection";
import { siteOrigin } from "@/lib/site";
import id from "@/lib/i18n/dictionaries/id";
import en from "@/lib/i18n/dictionaries/en";

type Props = {
  params: Promise<{ locale: string }>;
};

const content = {
  id: {
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
  },
  en: {
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
  },
};

function getContent(locale: string) {
  return locale === "en" ? content.en : content.id;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getContent(locale);
  const p = locale === "en" ? "/en" : "";

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `${p}/jasa-website-hotel-villa/`,
      languages: {
        id: "/jasa-website-hotel-villa/",
        en: "/en/jasa-website-hotel-villa/",
      },
    },
    openGraph: {
      title: c.metaTitle,
      description: c.ogDescription,
      url: `${p}/jasa-website-hotel-villa/`,
    },
    twitter: {
      title: c.metaTitle,
      description: c.ogDescription,
    },
  };
}

export default async function HospitalityPage({ params }: Props) {
  const { locale } = await params;
  const c = getContent(locale);
  const dict = locale === "en" ? en : id;
  const p = locale === "en" ? "/en" : "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Flaat Studio - ${c.breadcrumbLabel}`,
    url: `${siteOrigin}${p}/jasa-website-hotel-villa/`,
    description: c.metaDescription,
    areaServed: { "@type": "Country", name: "Indonesia" },
    provider: { "@type": "Organization", name: "Flaat Studio", url: siteOrigin },
    serviceType: [
      "Hotel booking website development",
      "Villa website development",
      "Booking engine development",
      "Hospitality website design",
    ],
  };
  const faqJsonLdItems = c.faq.map((i) => ({ question: i.q, answer: i.a }));
  const breadcrumbItems = [
    { name: dict.nav.home, item: `${siteOrigin}${p}/` },
    { name: c.breadcrumbLabel, item: `${siteOrigin}${p}/jasa-website-hotel-villa/` },
  ];

  return (
    <main className='min-h-screen px-5 pb-8 pt-[72px] desk:pt-0 desk:pl-[260px] desk:px-10'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FAQJsonLd scriptId='hospitality-faq-jsonld' questions={faqJsonLdItems} />
      <BreadcrumbJsonLd scriptId='hospitality-breadcrumb-jsonld' items={breadcrumbItems} />
      <div className='relative w-full max-w-[1300px] mx-auto flex flex-col gap-[7.5rem] pt-10 px-5 tab:p-8 desk:p-8 desk:border-r desk:border-gray-200'>
        <section className='relative flex flex-col justify-end gap-6 tab:gap-7 desk:gap-8 w-full h-[24rem] tab:h-[26rem] desk:h-[28rem] pt-20 pb-6'>
          <div className='absolute top-0 left-0 right-0 flex items-start desk:items-center justify-between gap-6 py-3 font-mono text-xs tracking-widest uppercase'>
            <div>{c.eyebrow}</div>
          </div>

          <h1 className='max-w-[650px] m-0 text-accent text-2xl tab:text-3xl desk:text-4xl leading-tight tracking-tight font-medium text-wrap-balance'>{c.heroTitle}</h1>
          <p className='max-w-[600px] m-0 text-gray-500 text-lg leading-[1.6] font-body'>{c.heroDesc}</p>

          <a href={c.ctaHref} target='_blank' rel='noreferrer' className='inline-flex items-center gap-3 w-fit pb-[0.3rem] border-b border-accent text-accent no-underline text-lg leading-[1.3] tracking-[-0.02em] font-sans transition-opacity duration-250 hover:opacity-60'>
            <span>{c.ctaLabel}</span>
            <RiWhatsappLine className='size-5' aria-hidden='true' />
          </a>
        </section>

        <section className='flex flex-col gap-4'>
          <div className='flex items-center justify-between gap-4'>
            <p className='m-0 font-mono text-xs tracking-widest uppercase text-gray-800'>{c.needLabel}</p>
            <h2 className='m-0 text-xl leading-tight font-semibold font-sans text-accent text-right max-w-[32ch]'>{c.needTitle}</h2>
          </div>
          <p className='m-0 text-lg leading-[1.7] tracking-[-0.01em] font-body text-gray-500 max-w-[70ch]'>{c.needDesc}</p>
        </section>

        <section className='flex flex-col gap-4'>
          <div className='flex items-center justify-between gap-4'>
            <p className='m-0 font-mono text-xs tracking-widest uppercase text-gray-800'>{c.servicesLabel}</p>
            <h2 className='m-0 text-xl leading-tight font-semibold font-sans text-accent'>{c.servicesTitle}</h2>
          </div>
          <div className='grid grid-cols-1 tab:grid-cols-2 desk:grid-cols-3'>
            {c.services.map((i, idx) => {
              const total = c.services.length;
              const isLastColTab = idx % 2 === 1;
              const isLastRowTab = idx >= total - (total % 2 === 0 ? 2 : 1);
              const isLastColDesk = idx % 3 === 2;
              const isLastRowDesk = idx >= total - (total % 3 === 0 ? 3 : total % 3);

              return (
                <div
                  key={i.title}
                  className={`flex flex-col gap-2 p-6 border-border ${idx !== 0 ? "border-t tab:border-t-0" : ""} ${!isLastColTab ? "tab:border-r" : ""} ${!isLastRowTab ? "tab:border-b" : ""} ${!isLastColDesk ? "desk:border-r" : "desk:border-r-0"} ${!isLastRowDesk ? "desk:border-b" : "desk:border-b-0"}`}
                >
                  <h3 className='m-0 text-lg leading-normal font-medium font-sans text-accent'>{i.title}</h3>
                  <p className='m-0 text-gray-500 text-lg leading-[1.3] tracking-[-0.02em] font-body'>{i.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className='flex flex-col gap-4'>
          <div className='flex items-center justify-between gap-4'>
            <p className='m-0 font-mono text-xs tracking-widest uppercase text-gray-800'>{c.audiencesLabel}</p>
            <h2 className='m-0 text-xl leading-tight font-semibold font-sans text-accent'>{c.audiencesTitle}</h2>
          </div>
          <ul className='m-0 pl-6 list-disc space-y-2 text-lg leading-[1.5] tracking-[-0.01em] font-body text-gray-500'>
            {c.audiences.map((i) => <li key={i} className='my-1'>{i}</li>)}
          </ul>
        </section>

        <section className='flex flex-col gap-4'>
          <div className='flex items-center justify-between gap-4'>
            <p className='m-0 font-mono text-xs tracking-widest uppercase text-gray-800'>{c.processLabel}</p>
            <h2 className='m-0 text-xl leading-tight font-semibold font-sans text-accent'>{c.processTitle}</h2>
          </div>
          <div className='grid grid-cols-1 gap-3 tab:grid-cols-2 desk:grid-cols-3'>
            {c.process.map((i) => (
              <div key={i.step} className='flex gap-4 p-6 border border-gray-200 bg-white'>
                <span className='font-mono text-2xl font-semibold text-accent/30 leading-none'>{i.step}</span>
                <div className='flex flex-col gap-1'>
                  <h3 className='m-0 text-lg leading-normal font-medium font-sans text-accent'>{i.title}</h3>
                  <p className='m-0 text-base leading-[1.6] font-body text-gray-500'>{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='flex flex-col gap-4 bg-[#fafafa] p-8 tab:p-12 desk:p-16'>
          <div className='flex items-center justify-between gap-4'>
            <p className='m-0 font-mono text-xs tracking-widest uppercase text-gray-800'>{c.whyLabel}</p>
            <h2 className='m-0 text-xl leading-tight font-semibold font-sans text-accent'>{c.whyTitle}</h2>
          </div>
          <ul className='m-0 pl-6 list-disc space-y-4 text-lg leading-[1.65] tracking-[-0.01em] font-body text-gray-500'>
            {c.why.map((i) => <li key={i} className='my-1'>{i}</li>)}
          </ul>
        </section>

        <section className='flex flex-col gap-8 bg-[#2f4157] p-8 tab:p-12 desk:p-16'>
          <h2 className='m-0 text-2xl tab:text-3xl leading-tight font-semibold font-sans text-white max-w-[26ch]'>{c.ctaSectionTitle}</h2>
          <p className='m-0 text-lg leading-[1.7] tracking-[-0.01em] font-body text-white/70 max-w-[55ch]'>{c.ctaSectionDesc}</p>
          <a href={c.ctaHref} target='_blank' rel='noreferrer' className='inline-flex items-center gap-3 w-fit pb-[0.3rem] border-b border-white/50 !text-white no-underline text-lg leading-[1.3] tracking-[-0.02em] font-sans transition-opacity duration-250 hover:opacity-70'>
            <span className='!text-white'>{c.ctaSectionLabel}</span>
            <span aria-hidden='true' className='!text-white'>→</span>
          </a>
        </section>

        <FAQSection
          locale={locale}
          label={c.faqLabel}
          title={c.faqTitle}
          items={c.faq}
        />

        <HomeFooter />
      </div>
    </main>
  );
}
