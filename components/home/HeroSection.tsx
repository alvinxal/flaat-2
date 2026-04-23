"use client";

import React from "react";
import Link from "next/link";
import { RiWhatsappLine } from "react-icons/ri";

import { trackEvent } from "@/components/analytics/trackEvent";

const content = {
  since: "Home",
  status: "Technology & Digital Marketing Agency",
  title:
    "Digital partner yang menggabungkan teknologi AI dan strategi marketing untuk mempercepat pertumbuhan bisnis Anda.",
  cta: "Konsultasi Gratis",
  ctaHref:
    "https://wa.me/6289518301707?text=Halo%20Flaat%2C%20saya%20ingin%20konsultasi",
};

export default function HeroSection() {
  return (
    <div className='relative flex flex-col justify-end gap-6 tab:gap-7 desk:gap-8 w-full h-[24rem] tab:h-[26rem] desk:h-[28rem] pt-20 pb-6'>
      <div className='absolute top-0 left-0 right-0 flex items-start desk:items-center justify-between gap-6 py-3 font-mono text-xs tracking-widest uppercase'>
        <div>{content.since}</div>
        <div className='ml-auto text-right text-gray-500'>
          <span className='block desk:inline'>Technology &</span>
          <span className='block desk:inline desk:ml-1'>Digital Marketing</span>
          <span className='block desk:inline desk:ml-1'>Agency</span>
        </div>
      </div>

      <h1 className='max-w-[650px] m-0 text-accent text-2xl tab:text-3xl desk:text-4xl leading-tight tracking-tight font-medium text-wrap-balance'>
        {content.title}
      </h1>

      <Link
        href={content.ctaHref}
        onClick={() =>
          trackEvent("click_whatsapp", {
            location: "hero_section",
            label: content.cta,
          })
        }
        className='inline-flex items-center gap-3 w-fit pb-[0.3rem] border-b border-accent text-accent no-underline text-lg leading-[1.3] tracking-[-0.02em] font-sans transition-opacity duration-250 hover:opacity-60'
      >
        <span>{content.cta}</span>
        <RiWhatsappLine className='size-5' aria-hidden='true' />
      </Link>
    </div>
  );
}
