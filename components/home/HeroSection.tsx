import React from "react";
import Link from "next/link";

const content = {
  since: "since 2025",
  status: "Currently Available",
  title:
    "Digital partner yang menggabungkan teknologi AI dan strategi marketing untuk mempercepat pertumbuhan bisnis Anda.",
  cta: "Konsultasi Gratis",
  ctaHref: "/#contact",
};

export default function HeroSection() {
  return (
    <div className='relative flex flex-col justify-end gap-8 w-full min-h-[24rem] pt-20 pb-6 tab:h-[55vh] tab:min-h-[350px] tab:max-h-[560px] desk:h-[55vh] desk:min-h-[350px] desk:max-h-[560px]'>
      <div className='absolute top-0 left-0 right-0 hidden desk:flex items-center justify-between gap-6 py-3 font-mono text-xs tracking-widest uppercase'>
        <div className='h-[15px]'>{content.since}</div>
        <div className='inline-flex items-center gap-1 rounded-[40px]'>
          <span>{content.status}</span>
        </div>
      </div>

      <h1 className='max-w-[650px] m-0 text-muted text-2xl tab:text-3xl desk:text-4xl leading-tight tracking-tight font-medium text-wrap-balance'>
        {content.title}
      </h1>

      <Link
        href={content.ctaHref}
        className='inline-flex items-center gap-3 w-fit pb-[0.8rem] border-b border-black no-underline text-lg leading-[1.3] tracking-[-0.02em] font-sans'
      >
        <span>{content.cta}</span>
      </Link>
    </div>
  );
}
