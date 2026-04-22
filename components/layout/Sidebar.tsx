"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  whatsapp: Icons.WhatsApp,
} as const;

type IconKey = "home" | "about" | "projects" | "services" | "contact" | "instagram" | "linkedin" | "threads" | "whatsapp";

const navItems: { label: string; href: string; icon: IconKey }[] = [
  { label: "Beranda", href: "/", icon: "home" },
  { label: "Tentang Kami", href: "/#about", icon: "about" },
  { label: "Layanan", href: "/#service", icon: "services" },
  { label: "Portofolio", href: "/#projects", icon: "projects" },
  { label: "Kontak", href: "/#contact", icon: "contact" },
];

const socialItems: { name: string; href: string; icon: IconKey }[] = [
  { name: "WhatsApp", href: "https://wa.me/6289518301707", icon: "whatsapp" },
  { name: "Instagram", href: "https://www.instagram.com/flaatstudio/", icon: "instagram" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/flaat-studio-84ab3b39a/", icon: "linkedin" },
  { name: "Email", href: "mailto:hi@flaat.studio", icon: "contact" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
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

  if (pathname?.startsWith("/dashboard")) return null;

  return (
    <div>
      <div className='fixed top-0 left-0 right-0 z-50 flex h-[72px] items-center justify-between px-10 bg-white border-b border-gray-200 desk:hidden'>
        <Link
          href='/'
          className='inline-flex items-center text-accent no-underline font-display text-lg leading-[1.3] font-bold'
        >
          Flaat Studio
        </Link>
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
            {navItems.map((item, index) => {
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

          <div
            style={{
              transitionDelay: isOpen ? `${(navItems.length + 1) * 100}ms` : "0ms",
            }}
            className={`flex flex-col gap-6 w-full mt-auto border-t border-gray-200 pt-8 desk:mt-10 transition-all duration-500 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 desk:opacity-100 desk:translate-y-0"}`}
          >
            <div className='flex justify-center gap-4 flex-wrap'>
              {socialItems.map((item) => {
                const Icon = iconMap[item.icon];

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center justify-center p-4 desk:p-2 rounded-full text-accent hover:bg-accent/10 transition-colors duration-200'
                    aria-label={item.name}
                  >
                    <Icon className='size-7 desk:size-4' />
                  </a>
                );
              })}
            </div>
          </div>
        </div>


      </aside>
    </div>
  );
};

export default Sidebar;
