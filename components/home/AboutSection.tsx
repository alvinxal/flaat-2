import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import id from "@/lib/i18n/dictionaries/id";
import en from "@/lib/i18n/dictionaries/en";

function getDict(locale: string) {
  return locale === "en" ? en : id;
}

export default function AboutSection({ locale }: { locale: string }) {
  const dict = getDict(locale);
  const content = dict.about;

  return (
    <section id='about' className='flex flex-col gap-4 relative overflow-hidden scroll-mt-[80px] desk:scroll-mt-[80px]'>
      <div className='absolute inset-0' aria-hidden='true'>
        <Image
          src='https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=1496&auto=format&fit=crop'
          alt=''
          fill
          sizes='100vw'
          className='object-cover'
        />
      </div>
      <div className='absolute inset-0 bg-black/65' aria-hidden='true' />

      <div className='relative flex flex-col gap-24 tab:gap-48 justify-between min-h-[24rem] p-6 tab:p-8'>
        <div className='flex flex-col gap-12'>
          <div className='flex items-center justify-between gap-4'>
            <p className='m-0 font-mono text-xs tracking-widest uppercase text-white/80'>
              {content.label}
            </p>
            <h2 className='m-0 text-xl leading-tight font-semibold font-sans text-white'>
              {content.eyebrow}
            </h2>
          </div>
        </div>

        <h3 className='max-w-[45ch]  m-0 text-white text-xl md:text-2xl leading-tight font-reguler'>
          {content.text}
        </h3>
      </div>
    </section>
  );
}
