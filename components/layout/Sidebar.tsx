"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/shared/Icons";
import { siteContent } from "@/data/content";

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

export default function Sidebar() {
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
    <>
      <button
        type="button"
        className="fixed top-4 left-4 z-50 inline-flex items-center justify-center w-11 h-11 border border-border rounded-full bg-white/95 text-black backdrop-blur-md desk:hidden"
        aria-expanded={isOpen}
        aria-controls="site-sidebar"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <Icons.Close width={20} height={20} /> : <Icons.Menu width={20} height={20} />}
      </button>

      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          className="fixed inset-0 z-30 bg-black/20 desk:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        id="site-sidebar"
        className={`fixed inset-y-0 left-0 z-40 flex w-[260px] min-w-[260px] flex-col gap-0 p-10 bg-white border-r border-[#f0f0f0] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full desk:translate-x-0"
        }`}
      >
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center gap-1 text-black no-underline font-display text-2xl leading-[1.3] font-bold tracking-[-0.02em]">
            <span>{siteContent.brand}</span>
          </Link>
        </div>

        <nav className="flex flex-col gap-1 w-full">
          {siteContent.nav.map((item) => {
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
                className={`group flex items-center justify-between gap-4 w-full py-2.5 text-black no-underline font-sans text-base leading-[1.3] font-medium tracking-[-0.02em] transition-all duration-200 hover:translate-x-1`}
              >
                <span>{item.label}</span>
                <Icon width={18} height={18} className={`flex-none transition-colors duration-200 ${isCurrent ? "text-black" : "text-soft group-hover:text-black"}`} />
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-4 w-full pt-8 border-t border-[#f0f0f0] text-black">
          <div className="flex flex-col gap-1">
            <p className="font-sans text-sm leading-[1.3] tracking-[-0.02em]">{siteContent.sidebarCta.eyebrow}</p>
            <p className="font-sans text-sm leading-[1.3] tracking-[-0.02em] text-muted">{siteContent.sidebarCta.text}</p>
          </div>
          <Link href={siteContent.sidebarCta.href} className="inline-flex items-center justify-between gap-4 w-full py-3 border-b border-black text-black no-underline font-sans text-base leading-[1.3] tracking-[-0.02em]">
            <span>{siteContent.sidebarCta.label}</span>
            <Icons.Contact width={18} height={18} />
          </Link>
        </div>

        <div className="flex flex-col gap-4 w-full mt-10">
          <div className="flex gap-2 flex-wrap">
            {siteContent.social.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center p-3 border border-border rounded-full text-black"
                  aria-label={item.name}
                >
                  <Icon width={16} height={17} />
                </a>
              );
            })}
          </div>

          <p className="text-muted text-sm leading-[1.35] tracking-[-0.02em] whitespace-pre-wrap font-sans">
            Created by{" "}
            <a href={siteContent.createdBy.href} target="_blank" rel="noreferrer" className="text-black no-underline">
              {siteContent.createdBy.name}
            </a>
            .<br />
            All rights reserved.
          </p>
        </div>
      </aside>
    </>
  );
}
