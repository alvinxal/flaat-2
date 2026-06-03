import Image from "next/image";
import id from "@/lib/i18n/dictionaries/id";
import en from "@/lib/i18n/dictionaries/en";

function getDict(locale: string) {
  return locale === "en" ? en : id;
}

export default function ServicesSection({ locale }: { locale: string }) {
  const dict = getDict(locale);
  const content = dict.services;

  return (
    <section id='service' className='flex flex-col gap-4 scroll-mt-[80px] desk:scroll-mt-[80px]'>
      <div className='flex items-center justify-between gap-4'>
        <p className='m-0 font-mono text-xs tracking-widest uppercase text-gray-800'>
          {content.label}
        </p>
        <h2 className='m-0 text-xl leading-tight font-semibold font-sans'>
          {content.title}
        </h2>
      </div>

      <div className='grid gap-3'>
        {content.items.map((service) => (
          <article
            key={service.title}
            className='grid gap-4 py-5 border-t border-border tab:grid-cols-[1fr_12rem] tab:items-center tab:gap-8 desk:grid-cols-[1fr_12rem] desk:items-center desk:gap-8'
          >
            <div className='flex flex-col gap-2'>
              <h3 className='m-0 text-lg leading-normal font-medium font-sans'>
                {service.title}
              </h3>
              <p className='m-0 text-accent text-lg leading-[1.3] tracking-[-0.02em] font-body xl:pr-40'>
                {service.description}
              </p>
            </div>
            <div className='relative min-h-[10rem] overflow-hidden bg-panel tab:min-h-[7rem] desk:min-h-[7rem]'>
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes='(min-width: 1200px) 18vw, (min-width: 810px) 22vw, 100vw'
                className='object-cover'
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
