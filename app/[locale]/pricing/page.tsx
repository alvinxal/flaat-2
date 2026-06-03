import type { Metadata } from "next";

import PricingDeckPrintButton from "@/components/pricing/PricingDeckPrintButton";
import id from "@/lib/i18n/dictionaries/id";
import en from "@/lib/i18n/dictionaries/en";

type Tier = {
  name: string;
  price: string;
  blurb?: string;
  details: string[];
};

function getDict(locale: string) {
  return locale === "en" ? en : id;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDict(locale);
  const p = locale === "en" ? "/en" : "";
  return {
    title: dict.pricing.metaTitle,
    description: dict.pricing.metaDescription,
    alternates: {
      canonical: `${p}/pricing/`,
    },
    openGraph: {
      title: dict.pricing.metaTitle,
      description: dict.pricing.metaDescription,
      url: `${p}/pricing/`,
    },
    twitter: {
      title: dict.pricing.metaTitle,
      description: dict.pricing.metaDescription,
    },
  };
}

function Slide({
  eyebrow,
  title,
  description,
  children,
  dark = false,
  accent = false,
  last = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  dark?: boolean;
  accent?: boolean;
  last?: boolean;
}) {
  const toneClass = dark
    ? "bg-[#101722] text-white"
    : accent
      ? "bg-[#eef3f8] text-accent"
      : "bg-white text-accent";

  const borderClass = dark ? "border-white/12" : "border-[#d9e0e8]";
  const descriptionClass = dark ? "text-white/72" : "text-[#516175]";
  const eyebrowClass = dark ? "text-white/60" : "text-[#6d7a8a]";

  return (
    <section className={`pricing-slide px-4 py-8 tab:px-8 print:p-0 ${last ? "" : "break-after-page"}`}>
      <div
        className={`pricing-slide-frame mx-auto flex w-full max-w-[1600px] flex-col overflow-hidden rounded-[28px] border ${borderClass} shadow-[0_24px_80px_rgba(13,23,38,0.08)] print:h-[9in] print:max-w-none print:rounded-none print:border-0 print:shadow-none ${toneClass}`}
      >
        <div className='pricing-slide-grid grid gap-8 px-6 py-6 tab:px-10 tab:py-8 desk:min-h-[860px] desk:grid-cols-[minmax(0,300px)_1fr] desk:gap-10 desk:px-12 desk:py-10 print:grid-cols-[300px_1fr] print:gap-10 print:px-12 print:py-10'>
          <div className={`flex flex-col justify-between gap-8 border-b pb-8 desk:border-b-0 desk:border-r desk:pb-0 desk:pr-8 print:border-b-0 print:border-r print:pr-8 ${borderClass}`}>
            <div className='space-y-5'>
              <p className={`pricing-kicker font-body text-[0.68rem] font-medium uppercase tracking-[0.18em] ${eyebrowClass}`}>
                {eyebrow}
              </p>
              <h2 className='pricing-side-title max-w-[11ch] font-sans text-[2.8rem] font-semibold tracking-[-0.035em] leading-[0.94] tab:text-[3.3rem] desk:text-[3.9rem] print:text-[3.35rem]'>
                {title}
              </h2>
            </div>

            <p className={`pricing-side-copy max-w-[16rem] font-body text-[0.88rem] leading-[1.85] tab:text-[0.92rem] ${descriptionClass}`}>
              {description}
            </p>
          </div>

          <div className='flex min-w-0 flex-col justify-center'>{children}</div>
        </div>
      </div>
    </section>
  );
}

function TierCard({ tier, featured = false }: { tier: Tier; featured?: boolean }) {
  return (
    <article
      className={`pricing-tier-card flex h-full flex-col rounded-[24px] border p-5 tab:p-6 ${
        featured
          ? "border-accent bg-accent text-white shadow-[0_20px_50px_rgba(47,65,87,0.16)]"
          : "border-[#d9e0e8] bg-white text-accent"
      }`}
    >
      <div className='space-y-3 border-b border-current/12 pb-4'>
        <div className='flex items-start gap-4'>
          <h3 className='pricing-card-title font-sans text-[1.55rem] font-semibold tracking-[-0.03em] leading-[1] tab:text-[1.7rem]'>
            {tier.name}
          </h3>
        </div>
        <p className='font-body text-[1.02rem] font-semibold tracking-[-0.02em] tab:text-[1.08rem]'>{tier.price}</p>
        {tier.blurb ? (
          <p className={`font-body text-[0.88rem] leading-6 ${featured ? "text-white/72" : "text-[#516175]"}`}>
            {tier.blurb}
          </p>
        ) : null}
      </div>

      <ul className={`mt-4 space-y-2.5 font-body text-[0.88rem] leading-6 tab:text-[0.92rem] ${featured ? "text-white/82" : "text-[#516175]"}`}>
        {tier.details.map((detail) => (
          <li key={detail} className='flex gap-3'>
            <span className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${featured ? "bg-white" : "bg-accent"}`} />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default async function PricingDeckPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDict(locale);
  const { pricing } = dict;
  const { servicePillars, webTiers, automationTiers, marketingTiers } = pricing;

  const addOns = [
    "Maintenance & update rutin",
    "Konsultasi bulanan atau per kebutuhan",
    "Revisi di luar scope project utama",
    "Training untuk tim internal",
  ];
  const faqs = [
    { question: "Apakah harga bisa custom?", answer: "Bisa. Paket dipakai sebagai titik awal agar diskusi lebih cepat, lalu scope bisa disesuaikan dengan kebutuhan bisnis Anda." },
    { question: "Apakah bisa bertahap atau cicilan?", answer: "Bisa dibahas sesuai nilai project dan alur pengerjaan supaya tetap nyaman untuk kedua pihak." },
    { question: "Apakah ada revisi?", answer: "Ada. Revisi dasar masuk dalam scope, sedangkan perubahan tambahan di luar scope akan dibahas sebagai add-on." },
    { question: "Berapa lama pengerjaan?", answer: "Timeline mengikuti paket dan kompleksitas kebutuhan, mulai dari sekitar 1 minggu sampai beberapa tahap implementasi." },
    { question: "Apakah domain & hosting termasuk?", answer: "Untuk paket web tertentu, setup domain dan hosting sudah termasuk sesuai detail paket." },
  ];
  const reasons = [
    "Kebutuhan tiap bisnis berbeda dan tidak selalu butuh scope yang sama.",
    "Layanan dibagi ke kategori yang lebih jelas agar lebih mudah dibandingkan.",
    "Anda bisa mulai dari kebutuhan utama dulu, lalu berkembang sesuai target.",
  ];
  const ctas = [
    "Masih bingung paket mana yang paling cocok? Konsultasikan dulu kebutuhan bisnis Anda.",
    "Ceritakan kebutuhan Anda, dan kami bantu rekomendasikan paket yang paling relevan.",
    "Siap membangun sistem digital yang lebih efektif? Jadwalkan konsultasi dengan Flaat Studio.",
  ];
  return (
    <main className='min-h-screen bg-[#f5f7fa] text-accent print:bg-white'>
      <style>{`
        @page {
          size: 16in 9in;
          margin: 0;
        }

        .pricing-slide-frame {
          text-rendering: geometricPrecision;
        }

        .pricing-side-title,
        .pricing-hero-title,
        .pricing-content-title,
        .pricing-card-title,
        .pricing-question-title,
        .pricing-cta-title {
          font-family: var(--font-bricolage), system-ui, sans-serif;
          font-kerning: normal;
          text-wrap: balance;
        }

        .pricing-kicker {
          letter-spacing: 0.16em;
        }

        @media print {
          html,
          body {
            background: #ffffff !important;
          }

          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .pricing-deck-shell {
            padding: 0 !important;
          }

          .pricing-slide-frame * {
            text-rendering: geometricPrecision;
          }

          .pricing-print-hidden {
            display: none !important;
          }

          .pricing-slide {
            padding: 0 !important;
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .pricing-slide:last-child {
            break-after: auto !important;
            page-break-after: auto !important;
          }

          .pricing-slide-grid {
            min-height: 9in !important;
            grid-template-columns: 290px minmax(0, 1fr) !important;
            gap: 2rem !important;
            padding: 2.4rem 2.8rem !important;
          }

          .pricing-side-title {
            font-size: 3.15rem !important;
            line-height: 0.95 !important;
            letter-spacing: -0.03em !important;
          }

          .pricing-side-copy {
            max-width: 14rem !important;
            font-size: 0.84rem !important;
            line-height: 1.8 !important;
          }

          .pricing-kicker {
            letter-spacing: 0.12em !important;
          }

          .pricing-hero-title {
            font-size: 3.2rem !important;
            line-height: 0.96 !important;
            letter-spacing: -0.03em !important;
          }

          .pricing-content-title {
            font-size: 2.35rem !important;
            line-height: 1 !important;
            letter-spacing: -0.028em !important;
          }

          .pricing-card-title,
          .pricing-question-title,
          .pricing-cta-title {
            font-size: 1.45rem !important;
            line-height: 1.1 !important;
            letter-spacing: -0.025em !important;
          }

          .pricing-tier-card {
            padding: 0.95rem !important;
          }

          .pricing-tier-card ul {
            margin-top: 0.75rem !important;
            gap: 0.45rem !important;
          }

          .pricing-tier-card li {
            line-height: 1.45 !important;
          }

          .pricing-tight-grid {
            gap: 1rem !important;
          }

          .pricing-tight-stack {
            gap: 1rem !important;
          }

          .pricing-overview-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            align-items: stretch !important;
          }

          .pricing-next-grid {
            grid-template-columns: 1.02fr 0.98fr !important;
            align-items: stretch !important;
          }

          .pricing-next-aside {
            display: grid !important;
            align-content: end !important;
          }

          .pricing-section-header {
            display: grid !important;
            grid-template-columns: minmax(0, 1.35fr) minmax(220px, 0.65fr) !important;
            align-items: start !important;
            column-gap: 2rem !important;
          }

          .pricing-section-header-main {
            max-width: 40rem !important;
          }

          .pricing-section-header-side {
            max-width: 16rem !important;
            justify-self: end !important;
          }

          .pricing-faq-item {
            gap: 1rem !important;
            padding: 1.1rem !important;
          }
        }
      `}</style>

      <div className='pricing-deck-shell mx-auto max-w-[1760px] px-4 py-6 tab:px-6 desk:px-8 print:max-w-none print:px-0 print:py-0'>
        <div className='pricing-print-hidden sticky top-0 z-30 mx-auto mb-6 flex max-w-[1600px] items-center justify-between gap-4 rounded-full border border-[#d9e0e8] bg-white/92 px-4 py-3 shadow-[0_10px_30px_rgba(18,32,49,0.08)] backdrop-blur'>
          <div>
            <p className='font-body text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#6d7a8a]'>
              Flaat Studio
            </p>
            <p className='font-body text-sm text-[#516175]'>
              Pricing deck siap print ke PDF dengan format presentasi.
            </p>
          </div>

          <PricingDeckPrintButton />
        </div>

        <div className='space-y-0 print:space-y-0'>
          <Slide
            eyebrow='Slide 01'
            title='Pricing Flaat Studio'
            description='Solusi digital yang jelas untuk bisnis yang ingin tumbuh, disusun agar mudah dipahami dan siap dipresentasikan.'
            dark
          >
            <div className='grid h-full gap-6 desk:grid-cols-[1.2fr_0.8fr]'>
              <div className='w-fit max-w-full rounded-[28px] bg-accent p-7 text-white tab:p-9'>
                <p className='pricing-hero-title font-sans text-[2.55rem] font-semibold tracking-[-0.035em] leading-[0.98] text-white tab:text-[3.15rem]'>
                  Solusi digital yang jelas untuk bisnis yang ingin tumbuh.
                </p>

                <p className='mt-4 font-body text-[0.92rem] leading-7 text-white/72'>
                  Web development, AI automation, dan digital marketing dalam satu alur yang rapi untuk membantu bisnis mulai dari kebutuhan utama lalu berkembang dengan lebih terarah.
                </p>
              </div>

              <div className='flex flex-col justify-between gap-7 py-2'>
                <div>
                  <p className='pricing-kicker font-body text-[0.68rem] font-semibold uppercase text-white/56'>
                    Fokus layanan
                  </p>
                  <div className='mt-6 space-y-5'>
                    {servicePillars.map((pillar, index) => (
                      <div
                        key={pillar.title}
                        className={`${index === 0 ? "" : "border-t border-white/10 pt-5"}`}
                      >
                        <p className='pricing-card-title font-sans text-[1.35rem] font-semibold tracking-[-0.03em] text-white'>
                          {pillar.title}
                        </p>
                        <p className='mt-2 max-w-[34rem] font-body text-[0.88rem] leading-6 text-white/72'>
                          {pillar.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          <Slide
            eyebrow='Slide 02'
            title='Kenapa pricing ini dibuat'
            description='Pricing disusun agar calon klien lebih cepat menemukan opsi yang paling relevan tanpa harus menebak scope dari awal.'
          >
            <div className='pricing-tight-grid grid gap-8 desk:grid-cols-[1.15fr_0.85fr]'>
              <div className='border-b border-[#d9e0e8] pb-8'>
                <p className='pricing-content-title font-sans text-[2rem] font-semibold tracking-[-0.03em] text-accent tab:text-[2.4rem] tab:leading-[1]'>
                  Pricing yang dibuat agar lebih mudah dipahami.
                </p>
                <p className='mt-4 max-w-2xl font-body text-[0.95rem] leading-7 text-[#516175] tab:text-base'>
                  Kami membagi layanan ke beberapa kategori supaya Anda lebih cepat menemukan opsi yang paling relevan, lalu menyesuaikan scope sesuai target bisnis.
                </p>
              </div>

              <div className='space-y-5 pt-3'>
                {reasons.map((reason, index) => (
                  <div key={reason} className={`${index === 0 ? "" : "border-t border-[#d9e0e8] pt-4"}`}>
                    <p className='font-body text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#6d7a8a]'>
                      0{index + 1}
                    </p>
                    <p className='pricing-card-title mt-2 font-sans text-[1.28rem] font-semibold tracking-[-0.028em] text-accent'>
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Slide>

          <Slide
            eyebrow='Slide 03'
            title='Overview layanan'
            description='Anda bisa mulai dari satu kebutuhan dulu, lalu berkembang sesuai prioritas bisnis dan tahap growth saat ini.'
            accent
          >
            <div className='pricing-overview-grid pricing-tight-grid grid gap-8 desk:grid-cols-3'>
              {servicePillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className={`flex min-h-[220px] flex-col justify-start pl-5 ${
                    index === 0 ? "" : "border-l border-[#c9d5e2]"
                  }`}
                >
                  <p className='font-body text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#6d7a8a]'>
                    Area {index + 1}
                  </p>
                  <div>
                    <p className='pricing-card-title mt-5 font-sans text-[1.55rem] font-semibold tracking-[-0.03em] leading-[1.06] tab:text-[1.9rem]'>
                      {pillar.title}
                    </p>
                    <p className='mt-3 font-body text-[0.92rem] leading-7 text-[#516175]'>
                      {pillar.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Slide>

          <Slide
            eyebrow='Slide 04'
            title='Web pricing'
            description='Pilihan paket website untuk bisnis yang ingin tampil rapi, profesional, dan siap berkembang sesuai kebutuhan.'
          >
            <div className='pricing-tight-stack space-y-5'>
              <div className='pricing-section-header flex flex-col gap-3 border-b border-[#d9e0e8] pb-5 tab:flex-row tab:items-end tab:justify-between print:flex-row print:items-end print:justify-between'>
                <div className='pricing-section-header-main'>
                  <p className='pricing-content-title font-sans text-[2rem] font-semibold tracking-[-0.03em] text-accent tab:text-[2.35rem]'>
                    Web Development Pricing
                  </p>
                  <p className='mt-3 max-w-[30rem] font-body text-[0.92rem] leading-7 text-[#516175]'>
                    Cocok untuk bisnis baru, brand yang sedang tumbuh, sampai kebutuhan sistem yang lebih custom.
                  </p>
                </div>
                <p className='pricing-section-header-side font-body text-[0.84rem] leading-6 text-[#6d7a8a]'>
                  Website yang tepat membantu bisnis tampil lebih profesional dan lebih siap menerima calon klien.
                </p>
              </div>

              <div className='pricing-tight-grid grid gap-5 desk:grid-cols-3 print:grid-cols-3 print:items-start'>
                {webTiers.map((tier, index) => (
                  <TierCard key={tier.name} tier={tier} featured={index === 1} />
                ))}
              </div>
            </div>
          </Slide>

          <Slide
            eyebrow='Slide 05'
            title='Automation pricing'
            description='Paket automation untuk bisnis yang ingin kerja lebih rapi, respons lebih cepat, dan proses operasional yang lebih efisien.'
            dark
          >
            <div className='pricing-tight-stack space-y-5'>
              <div className='pricing-section-header flex flex-col gap-3 border-b border-white/12 pb-5 tab:flex-row tab:items-end tab:justify-between print:flex-row print:items-end print:justify-between'>
                <div className='pricing-section-header-main'>
                  <p className='pricing-content-title font-sans text-[2rem] font-semibold tracking-[-0.03em] text-white tab:text-[2.35rem]'>
                    AI & Automation Pricing
                  </p>
                  <p className='mt-3 max-w-[30rem] font-body text-[0.92rem] leading-7 text-white/72'>
                    Mulai dari workflow sederhana sampai sistem yang lebih menyeluruh, tanpa penjelasan yang terlalu teknis.
                  </p>
                </div>
                <p className='pricing-section-header-side font-body text-[0.84rem] leading-6 text-white/56'>
                  Automation membantu bisnis merespons lebih cepat, mengurangi kerja manual, dan menjaga operasional tetap efisien.
                </p>
              </div>

              <div className='pricing-tight-grid grid gap-5 desk:grid-cols-3 print:grid-cols-3 print:items-start'>
                {automationTiers.map((tier, index) => (
                  <TierCard key={tier.name} tier={tier} featured={index === 1} />
                ))}
              </div>
            </div>
          </Slide>

          <Slide
            eyebrow='Slide 06'
            title='Marketing pricing'
            description='Paket marketing untuk bisnis yang ingin membangun growth secara lebih terarah, terukur, dan konsisten.'
            accent
          >
            <div className='pricing-tight-stack space-y-5'>
              <div className='pricing-section-header flex flex-col gap-3 border-b border-[#d9e0e8] pb-5 tab:flex-row tab:items-end tab:justify-between print:flex-row print:items-end print:justify-between'>
                <div className='pricing-section-header-main'>
                  <p className='pricing-content-title font-sans text-[2rem] font-semibold tracking-[-0.03em] text-accent tab:text-[2.35rem]'>
                    Digital Marketing Pricing
                  </p>
                  <p className='mt-3 max-w-[30rem] font-body text-[0.92rem] leading-7 text-[#516175]'>
                    Mulai dari audit dasar sampai campaign lintas platform, dengan bahasa yang tetap simpel dan relevan.
                  </p>
                </div>
                <p className='pricing-section-header-side font-body text-[0.84rem] leading-6 text-[#6d7a8a]'>
                  Marketing yang baik membantu bisnis punya arah promosi yang lebih jelas dan lebih terukur.
                </p>
              </div>

              <div className='pricing-tight-grid grid gap-5 desk:grid-cols-3 print:grid-cols-3 print:items-start'>
                {marketingTiers.map((tier, index) => (
                  <TierCard key={tier.name} tier={tier} featured={index === 1} />
                ))}
              </div>
            </div>
          </Slide>

          <Slide
            eyebrow='Slide 07'
            title='Add-ons'
            description='Pilihan support tambahan untuk kebutuhan setelah project berjalan agar bisnis tetap punya ruang untuk berkembang.'
          >
            <div className='pricing-tight-grid grid gap-10 desk:grid-cols-[0.9fr_1.1fr]'>
              <div className='rounded-[28px] bg-accent p-7 text-white tab:p-9'>
                <p className='pricing-content-title font-sans text-[2rem] font-semibold tracking-[-0.03em] tab:text-[2.35rem] tab:leading-[1]'>
                  Add-ons & dukungan lanjutan
                </p>
                <p className='mt-4 max-w-lg font-body text-[0.92rem] leading-7 text-white/72 tab:text-base'>
                  Add-ons tersedia untuk membantu bisnis Anda tetap berkembang setelah project utama selesai, tanpa harus memulai ulang dari nol.
                </p>
              </div>

              <div className='pt-6'>
                <div className='grid gap-x-8 gap-y-5 tab:grid-cols-2'>
                  {addOns.map((item, index) => (
                    <div key={item} className='border-b border-[#d9e0e8] pb-4 last:border-b-0'>
                      <p className='font-body text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#6d7a8a]'>
                        Add-on 0{index + 1}
                      </p>
                      <p className='pricing-card-title mt-3 font-sans text-[1.28rem] font-semibold tracking-[-0.028em] text-accent'>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Slide>

          <Slide
            eyebrow='Slide 08'
            title='FAQ singkat'
            description='Beberapa pertanyaan yang paling sering muncul sebelum project dimulai, diringkas agar diskusi lebih efisien.'
            dark
          >
            <div className='space-y-4'>
                {faqs.map((item, index) => (
                <div
                  key={item.question}
                  className='pricing-faq-item grid gap-4 border-b border-white/12 pb-4 tab:grid-cols-[170px_1fr] tab:gap-5'
                >
                  <div>
                    <p className='font-body text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/56'>
                      FAQ 0{index + 1}
                    </p>
                    <p className='pricing-question-title mt-3 font-sans text-[1.28rem] font-semibold tracking-[-0.026em] text-white'>
                      {item.question}
                    </p>
                  </div>
                  <p className='font-body text-[0.92rem] leading-7 text-white/72 tab:text-base'>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </Slide>

          <Slide
            eyebrow='Slide 09'
            title='Next step'
            description='Deck ini dibuat untuk memudahkan keputusan awal. Langkah berikutnya adalah menyamakan kebutuhan, prioritas, dan scope.'
            accent
            last
          >
            <div className='grid gap-8'>
              <div className='w-full rounded-[28px] bg-accent p-7 text-white tab:p-9'>
                <p className='pricing-cta-title font-sans text-[2.4rem] font-semibold tracking-[-0.032em] leading-[0.98] tab:text-[3rem]'>
                  Ceritakan kebutuhan Anda, lalu kami bantu arahkan paket yang paling relevan.
                </p>
                <div className='mt-7 flex flex-wrap gap-3'>
                  <a
                    href='https://wa.me/6285156652910'
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex min-w-[180px] items-center justify-center rounded-full border border-white bg-white px-5 py-3 font-body text-sm font-semibold leading-none tracking-[-0.02em] !text-[#2f4157] no-underline shadow-[0_10px_25px_rgba(0,0,0,0.08)]'
                  >
                    <span className='!text-[#2f4157]'>WhatsApp Consultation</span>
                  </a>
                  <a
                    href='mailto:hi@flaat.studio'
                    className='inline-flex items-center rounded-full border border-white/24 px-5 py-3 font-body text-sm font-semibold tracking-[-0.02em] text-white no-underline'
                  >
                    hi@flaat.studio
                  </a>
                </div>
              </div>

              <div className='ml-auto max-w-[540px] space-y-5 pt-4'>
                {ctas.map((item, index) => (
                  <div key={item} className='border-b border-[#d9e0e8] pb-4 last:border-b-0'>
                    <p className='font-body text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#6d7a8a]'>
                      Next step 0{index + 1}
                    </p>
                    <p className='pricing-card-title mt-3 font-sans text-[1.28rem] font-semibold tracking-[-0.028em] text-accent'>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </main>
  );
}
