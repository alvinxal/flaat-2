"use client";

import Link from "next/link";

import { trackEvent } from "@/components/analytics/trackEvent";
import { useDict, useLocale } from "@/lib/i18n/locale-context";

function buildNavItems(dict: ReturnType<typeof useDict>, locale: string) {
  const p = locale === "en" ? "/en" : "";
  return [
    { label: dict.nav.home, href: `${p}/` },
    { label: dict.nav.about, href: `${p}/#about` },
    { label: dict.nav.services, href: `${p}/#service` },
    { label: dict.nav.projects, href: `${p}/#projects` },
    { label: dict.nav.contact, href: `${p}/#contact` },
  ];
}

const socialItems = [
  { name: "Instagram", href: "https://www.instagram.com/flaatstudio/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/flaat-studio-84ab3b39a/" },
];

export default function HomeFooter() {
  const dict = useDict();
  const locale = useLocale();
  const navItems = buildNavItems(dict, locale);

  return (
    <footer className='flex flex-col gap-12 w-full p-5 bg-[#fafafa] tab:p-8 tab:gap-12 desk:p-8 desk:gap-12'>
      <div className='flex flex-col gap-10 w-full tab:flex-row tab:justify-between tab:items-start'>
        <div className='flex flex-col justify-between w-full max-w-[450px] tab:w-[48%] tab:min-w-[240px] min-h-[150px]'>
          <div>
            <Link
              href='/'
              className='inline-flex items-center text-gray-700 no-underline font-display text-2xl leading-[1.3] font-bold'
            >
              {dict.site.name}
            </Link>
          </div>
          <div className='flex flex-col gap-1.5'>
            <p className='m-0 font-mono text-xs leading-[1.1] uppercase text-muted'>
              {dict.site.tagline}
            </p>
            <div className='flex flex-wrap items-center gap-1 font-mono text-xs leading-[1.1] uppercase text-muted'>
              <span>{dict.site.based}</span>
              <span>•</span>
              <span>{dict.site.year}</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 w-full tab:w-[26%]'>
          <p className='m-0 font-mono text-xs leading-[1.1] uppercase text-gray-800'>
            {dict.footer.navigation}
          </p>
          <nav className='flex flex-col items-start gap-0'>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className='inline-flex gap-1 py-0.5 font-sans text-lg font-medium leading-[1.3] tracking-[-0.02em] no-underline'
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className='flex gap-2 mt-2'>
            {locale === "id" ? (
              <span className='py-0.5 font-sans text-sm font-medium leading-[1.3] tracking-[-0.02em] text-accent font-bold'>ID</span>
            ) : (
              <Link href="/" className='py-0.5 font-sans text-sm font-medium leading-[1.3] tracking-[-0.02em] no-underline text-gray-500 hover:text-accent transition-colors'>ID</Link>
            )}
            <span className='text-gray-300 font-sans text-sm'>/</span>
            {locale === "en" ? (
              <span className='py-0.5 font-sans text-sm font-medium leading-[1.3] tracking-[-0.02em] text-accent font-bold'>EN</span>
            ) : (
              <Link href="/en/" className='py-0.5 font-sans text-sm font-medium leading-[1.3] tracking-[-0.02em] no-underline text-gray-500 hover:text-accent transition-colors'>EN</Link>
            )}
          </div>
        </div>

        <div className='flex flex-col gap-2 w-full tab:w-[26%]'>
          <p className='m-0 font-mono text-xs leading-[1.1] uppercase text-gray-800'>
            {dict.footer.social}
          </p>
          <div className='flex flex-col items-start gap-0'>
            {socialItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noreferrer'
                onClick={() =>
                  trackEvent("click_outbound", {
                    location: "footer_social",
                    label: item.name,
                    destination: item.href,
                  })
                }
                className='inline-flex gap-1 py-0.5 font-sans text-lg font-medium leading-[1.3] tracking-[-0.02em] no-underline'
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-2 w-full tab:w-[26%]'>
          <p className='m-0 font-mono text-xs leading-[1.1] uppercase text-gray-800'>
            {dict.footer.contact}
          </p>
          <div className='flex flex-col items-start gap-0'>
            <a
              href='https://wa.me/6285156652910'
              target='_blank'
              rel='noreferrer'
              onClick={() =>
                trackEvent("click_whatsapp", {
                  location: "footer_contact",
                  label: "footer_whatsapp",
                })
              }
              className='inline-flex gap-1 py-0.5 font-sans text-lg font-medium leading-[1.3] tracking-[-0.02em] no-underline'
            >
              WhatsApp
            </a>
            <a
              href='mailto:hi@flaat.studio'
              onClick={() =>
                trackEvent("click_email", {
                  location: "footer_contact",
                  label: "hi@flaat.studio",
                })
              }
              className='inline-flex gap-1 py-0.5 font-sans text-lg font-medium leading-[1.3] tracking-[-0.02em] no-underline'
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
