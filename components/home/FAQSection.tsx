"use client";

import { useState } from "react";

import id from "@/lib/i18n/dictionaries/id";
import en from "@/lib/i18n/dictionaries/en";

function getDict(locale: string) {
  return locale === "en" ? en : id;
}

export default function FAQSection({ locale }: { locale: string }) {
  const dict = getDict(locale);
  const content = dict.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id='faq' className='flex flex-col gap-4 scroll-mt-[80px] desk:scroll-mt-[80px]'>
      <div className='flex items-center justify-between gap-4'>
        <p className='m-0 font-mono text-xs tracking-widest uppercase text-gray-800'>
          {content.label}
        </p>
        <h2 className='m-0 text-xl leading-tight font-semibold font-sans'>
          {content.title}
        </h2>
      </div>

      <div className='grid'>
        {content.items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={item.q} className='py-5 border-t border-border'>
              <button
                type='button'
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className='w-full flex items-center justify-between gap-4 text-left cursor-pointer'
              >
                <span className='text-[18px] leading-tight tracking-tight font-medium font-sans'>
                  {item.q}
                </span>
                <span
                  aria-hidden='true'
                  className={`shrink-0 flex items-center justify-center size-8 text-gray-400 transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    className='size-6'
                  >
                    <path d='M12 5v14M5 12h14' />
                  </svg>
                </span>
              </button>

              <div
                className='grid transition-[grid-template-rows] duration-300 ease-in-out'
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className='overflow-hidden'>
                  <p className='m-0 pt-3 text-gray-500 text-base leading-[1.6] font-body max-w-[70ch]'>
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
