import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url";

import { sanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import id from "@/lib/i18n/dictionaries/id";
import en from "@/lib/i18n/dictionaries/en";

function getDict(l: string) {
  return l === "en" ? en : id;
}

export const revalidate = 60;

type ClientLogo = {
  _id: string;
  name: string;
  logo: SanityImageSource;
  url?: string;
};

const clientLogosQuery = `
  *[_type == "clientLogo" && defined(logo)]
    | order(coalesce(order, 9999) asc, name asc) {
      _id,
      name,
      logo,
      url
    }
`;

export default async function LogosSection({ locale }: { locale: string }) {
  const dict = getDict(locale);
  const logos = (await sanityFetch<ClientLogo[]>({
    query: clientLogosQuery,
    revalidate,
  })) ?? [];

  if (!logos.length) return null;

  return (
    <section className='flex flex-col gap-4'>
      <div className='flex items-center justify-between gap-4'>
        <p className='m-0 font-mono text-xs tracking-widest uppercase text-gray-800'>
          {dict.logos.label}
        </p>
        <h2 className='m-0 text-xl leading-tight font-semibold font-sans'>
          {dict.logos.title}
        </h2>
      </div>

      <div className='mx-auto flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-6 max-w-[18rem] desk:gap-x-12 desk:gap-y-8 desk:max-w-[56rem]'>
        {logos.map((item) => {
          const imageUrl = urlFor(item.logo).height(160).quality(90).auto("format").url();
          const image = (
            <div className='relative h-20 w-32 desk:h-24 desk:w-40'>
              <Image
                src={imageUrl}
                alt={item.name}
                fill
                sizes='(min-width: 1024px) 160px, 128px'
                className='object-contain grayscale opacity-90 transition-all duration-250 ease-in-out hover:grayscale-0 hover:opacity-100'
              />
            </div>
          );

          return item.url ? (
            <a
              key={item._id}
              href={item.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={item.name}
            >
              {image}
            </a>
          ) : (
            <span key={item._id} aria-label={item.name}>
              {image}
            </span>
          );
        })}
      </div>
    </section>
  );
}
