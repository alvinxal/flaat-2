"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/shared/Icons";
import { SidebarSocialIcons } from "@/components/layout/SidebarSocialIcons";
import { useDict, useLocale } from "@/lib/i18n/locale-context";

type IconKey = "home" | "about" | "projects" | "services" | "contact";

function buildNavItems(dict: ReturnType<typeof useDict>, locale: string): { label: string; href: string; icon: IconKey }[] {
  const p = locale === "en" ? "/en" : "";
  return [
    { label: dict.nav.home, href: `${p}/`, icon: "home" },
    { label: dict.nav.about, href: `${p}/#about`, icon: "about" },
    { label: dict.nav.services, href: `${p}/#service`, icon: "services" },
    { label: dict.nav.projects, href: `${p}/#projects`, icon: "projects" },
    { label: dict.nav.contact, href: `${p}/#contact`, icon: "contact" },
  ];
}

const Sidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dict = useDict();
  const locale = useLocale();
  const items = buildNavItems(dict, locale);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setIsOpen(false);

    if (href.startsWith("/#")) {
      const sectionId = href.slice(2);

      window.setTimeout(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          router.push(href);
        }
      }, 300);
      return;
    }

    router.push(href);
  };

  return (
    <div>
      <div className='fixed top-0 left-0 right-0 z-50 flex h-[72px] items-center justify-between px-10 bg-white border-b border-gray-200 desk:hidden'>
        <Link
          href='/'
          className='inline-flex items-center text-accent no-underline font-display text-lg leading-[1.3] font-bold'
        >
          Flaat Studio
        </Link>
        <div className='flex items-center gap-6'>
          <div className='flex items-center gap-1.5 font-mono text-sm tracking-widest uppercase'>
            {locale === "id" ? (
              <span className='text-accent font-bold'>ID</span>
            ) : (
              <Link href="/" className='text-gray-500 no-underline hover:text-accent transition-colors'>ID</Link>
            )}
            <span className='text-gray-300'>/</span>
            {locale === "en" ? (
              <span className='text-accent font-bold'>EN</span>
            ) : (
              <Link href="/en/" className='text-gray-500 no-underline hover:text-accent transition-colors'>EN</Link>
            )}
          </div>
          <button
            type='button'
            aria-expanded={isOpen}
            aria-controls='site-sidebar'
            onClick={() => setIsOpen((open) => !open)}
            className='text-accent'
          >
            {isOpen ? <Icons.Close size={24} /> : <Icons.Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <button
          type='button'
          aria-label='Close navigation'
          className='fixed inset-0 z-30 desk:hidden'
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        id='site-sidebar'
        className={`fixed z-40 flex flex-col gap-0 p-10 bg-white transition-all duration-500 ease-in-out border-gray-300 
          ${isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 desk:translate-y-0 desk:opacity-100"}
          top-[72px] inset-x-0 bottom-0
          desk:top-0 desk:inset-y-0 desk:left-0 desk:w-[260px] desk:min-w-[260px] desk:border-r
        `}
      >
        <div className='hidden desk:flex mb-10 items-center justify-between'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-accent no-underline font-display text-2xl leading-[1.3] font-bold '
          >
            <span>Flaat Studio</span>
          </Link>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex flex-1 items-center desk:flex-none desk:mt-auto'>
            <nav className='flex flex-col gap-0.5 w-full desk:mt-auto desk:pt-8'>
            {items.map((item, index) => {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  style={{
                    transitionDelay: isOpen ? `${(index + 1) * 100}ms` : "0ms",
                  }}
                  className={`group flex items-center justify-between gap-4 w-full py-2 text-accent no-underline font-sans text-2xl desk:text-lg leading-[1.3] font-medium tracking-[-0.02em] transition-all duration-500 hover:translate-x-1 hover:underline underline-offset-4 
                    ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 desk:opacity-100 desk:translate-y-0"}
                  `}
                >
                  <span>{item.label}</span>
                  {/* Hidden icon - uncomment to show */}
                  {/* <Icon
                    size={16}
                    className={`flex-none transition-colors duration-200 ${isCurrent ? "text-accent" : "text-accent group-hover:text-accent"}`}
                  /> */}
                </Link>
              );
            })}
            </nav>
          </div>

          <SidebarSocialIcons isOpen={isOpen} totalItems={items.length} />
          <div className='hidden desk:flex justify-center gap-2 mt-2 pt-4'>
            {locale === "id" ? (
              <span className='font-mono text-sm tracking-widest uppercase text-accent font-bold'>ID</span>
            ) : (
              <Link href="/" className='font-mono text-sm tracking-widest uppercase text-gray-500 no-underline hover:text-accent transition-colors'>ID</Link>
            )}
            <span className='text-gray-300 font-mono text-sm'>/</span>
            {locale === "en" ? (
              <span className='font-mono text-sm tracking-widest uppercase text-accent font-bold'>EN</span>
            ) : (
              <Link href="/en/" className='font-mono text-sm tracking-widest uppercase text-gray-500 no-underline hover:text-accent transition-colors'>EN</Link>
            )}
          </div>
        </div>


      </aside>
    </div>
  );
};

export default Sidebar;
