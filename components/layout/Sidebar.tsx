"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/shared/Icons";

const iconMap = {
  home: Icons.Home,
  about: Icons.Info,
  projects: Icons.Briefcase,
  services: Icons.Services,
  contact: Icons.Contact,
  instagram: Icons.Instagram,
  linkedin: Icons.LinkedIn,
  threads: Icons.Threads,
} as const;

type IconKey = "home" | "about" | "projects" | "services" | "contact" | "instagram" | "linkedin" | "threads";

const navItems: { label: string; href: string; icon: IconKey }[] = [
  { label: "Beranda", href: "/", icon: "home" },
  { label: "Tentang Kami", href: "/#about", icon: "about" },
  { label: "Portofolio", href: "/#projects", icon: "projects" },
  { label: "Layanan", href: "/#service", icon: "services" },
  { label: "Kontak", href: "/#contact", icon: "contact" },
];

const socialItems: { name: string; href: string; icon: IconKey }[] = [
  { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { name: "Threads", href: "https://threads.com", icon: "threads" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div>
      <div className='fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-10 py-6 bg-white border-b border-gray-200 desk:hidden'>
        <Link
          href='/'
          className='inline-flex items-center text-gray-700 no-underline font-display text-lg leading-[1.3] font-bold'
        >
          Flaat Studio
        </Link>
        <button
          type='button'
          aria-expanded={isOpen}
          aria-controls='site-sidebar'
          onClick={() => setIsOpen((open) => !open)}
          className='text-gray-700'
        >
          {isOpen ? <Icons.Close size={24} /> : <Icons.Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <button
          type='button'
          aria-label='Close navigation'
          className='fixed inset-0 z-30 bg-black/20 desk:hidden'
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        id='site-sidebar'
        className={`fixed inset-y-0 left-0 z-40 flex w-[260px] min-w-[260px] flex-col gap-0 p-10 bg-white border-r border-gray-300 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full desk:translate-x-0"
        }`}
      >
        <div className='mb-10'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-gray-700 no-underline font-display text-2xl leading-[1.3] font-bold '
          >
            <span>Flaat Studio</span>
          </Link>
        </div>

        <nav className='flex flex-col gap-0.5 w-full'>
          {navItems.map((item) => {
            const Icon = iconMap[item.icon];
            const isCurrent =
              item.href === "/"
                ? pathname === "/"
                : item.href.startsWith("/#")
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group flex items-center justify-between gap-4 w-full py-2 text-gray-700 no-underline font-sans text-lg leading-[1.3] font-medium tracking-[-0.02em] transition-all duration-200 hover:translate-x-1`}
              >
                <span>{item.label}</span>
                <Icon
                  size={16}
                  className={`flex-none transition-colors duration-200 ${isCurrent ? "text-gray-700" : "text-gray-700 group-hover:text-gray-700"}`}
                />
              </Link>
            );
          })}
        </nav>

        <div className='mt-auto flex flex-col gap-4 w-full pt-8 border-t border-gray-300 text-gray-800'>
          <div className='flex flex-col gap-1'>
            <p className='font-sans text-base leading-normal tracking-tight'>
              Punya ide proyek?
            </p>
            <p className='font-sans text-base leading-normal tracking-tight text-muted'>
              Jadwalkan diskusi hari ini.
            </p>
          </div>
          <Link
            href='/#contact'
            className='inline-flex items-center justify-between gap-4 w-full py-3 border-b border-gray-700 text-gray-700 no-underline font-sans text-base leading-normal tracking-tight'
          >
            <span>Hubungi Kami</span>
            <Icons.WhatsApp size={16} />
          </Link>
        </div>

        <div className='flex flex-col gap-4 w-full mt-10'>
          <div className='flex gap-2 flex-wrap'>
            {socialItems.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <a
                  key={item.name}
                  href={item.href}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center justify-center p-3 border border-gray-700 rounded-full text-gray-700'
                  aria-label={item.name}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          <p className='text-muted text-xs tracking-widest whitespace-pre-wrap font-sans'>
            All rights reserved.
          </p>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
