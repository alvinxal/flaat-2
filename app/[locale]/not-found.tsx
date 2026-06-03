import Link from "next/link";
import { headers } from "next/headers";

import id from "@/lib/i18n/dictionaries/id";
import en from "@/lib/i18n/dictionaries/en";

function getDict(locale: string) {
  return locale === "en" ? en : id;
}

export default async function NotFound() {
  const h = await headers();
  const locale = h.get("x-locale") || "id";
  const dict = getDict(locale);
  const content = dict.notFound;
  const p = locale === "en" ? "/en" : "";

  return (
    <main className='min-h-screen px-5 pb-8 desk:pl-[260px] desk:px-10'>
      <div className='relative w-full max-w-[1300px] mx-auto flex flex-col gap-12 pt-24 px-5 tab:p-8 desk:pt-10 desk:p-8 desk:border-r desk:border-gray-200'>
        <section className='flex flex-col gap-8 justify-end min-h-[24rem] tab:min-h-[22rem] desk:min-h-[24rem]'>
          <div className='flex items-center justify-between gap-4 font-mono text-xs tracking-widest uppercase text-gray-500'>
            <span>{content.code}</span>
            <span>{content.subtitle}</span>
          </div>

          <div className='flex flex-col gap-6 max-w-[42rem]'>
            <h1 className='m-0 text-accent text-2xl tab:text-3xl desk:text-4xl leading-tight tracking-tight font-medium text-wrap-balance'>
              {content.heading}
            </h1>

            <p className='m-0 max-w-[36rem] text-lg leading-[1.4] tracking-[-0.02em] font-body text-gray-500'>
              {content.text}
            </p>

            <div className='flex flex-col gap-3 tab:flex-row tab:items-center'>
              <Link
                href={`${p}/`}
                className='inline-flex items-center gap-3 w-fit pb-[0.8rem] border-b border-accent no-underline text-lg leading-[1.3] tracking-[-0.02em] font-sans'
              >
                <span>{content.backHome}</span>
              </Link>
              <Link
                href={`${p}/projects`}
                className='inline-flex items-center gap-3 w-fit pb-[0.8rem] border-b border-gray-300 no-underline text-lg leading-[1.3] tracking-[-0.02em] font-sans text-gray-500'
              >
                <span>{content.viewPortfolio}</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
