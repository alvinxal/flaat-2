import { RiWhatsappLine } from "react-icons/ri";

import HomeFooter from "@/components/layout/HomeFooter";
import FAQSection from "@/components/home/FAQSection";

export type HospitalityContent = {
  eyebrow: string;
  heroTitle: string;
  heroDesc: string;
  ctaHref: string;
  ctaLabel: string;
  needLabel: string;
  needTitle: string;
  needDesc: string;
  servicesLabel: string;
  servicesTitle: string;
  services: { title: string; desc: string }[];
  audiencesLabel: string;
  audiencesTitle: string;
  audiences: string[];
  processLabel: string;
  processTitle: string;
  process: { step: string; title: string; desc: string }[];
  whyLabel: string;
  whyTitle: string;
  why: string[];
  ctaSectionTitle: string;
  ctaSectionDesc: string;
  ctaSectionLabel: string;
  faqLabel: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
};

export default function HospitalityBody({
  locale,
  content: c,
}: {
  locale: string;
  content: HospitalityContent;
}) {
  return (
    <main className='min-h-screen px-5 pb-8 pt-[72px] desk:pt-0 desk:pl-[260px] desk:px-10'>
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
