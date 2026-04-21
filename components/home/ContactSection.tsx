"use client";

import { useState } from "react";

const content = {
  label: "CONTACT",
  title: "Kontak",
  office: "Yogyakarta, Indonesia",
  phone: "+62 895-1830-1707",
  phoneHref: "tel:+6289518301707",
  email: "hi@flaat.studio",
  emailHref: "mailto:hi@flaat.studio",
  image: "/assets/images/contemplative-profile-against-colorful-backdrop-1.png",
  imageAlt: "Tim Flaat Studio dalam Diskusi",
};

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const fullname = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const website = formData.get("website") as string;

    if (!fullname || !email || !message) {
      setError("Mohon isi semua kolom");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, email, message, website }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Gagal mengirim pesan");
      }

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section
      id='contact'
      className='p-5 bg-[#2f4157] flex flex-col gap-4 desk:p-8 scroll-mt-[52px] desk:scroll-mt-[80px]'
    >
      <div className='flex items-center justify-between gap-4 mb-8'>
        <p className='m-0 font-mono text-xs tracking-widest uppercase text-inverse'>
          {content.label}
        </p>
        <h2 className='m-0 text-inverse text-xl leading-tight font-semibold font-sans'>
          {content.title}
        </h2>
      </div>

      <div className='grid gap-6 tab:grid-cols-2 desk:grid-cols-2'>
        <div className='flex flex-col gap-5'>
          <div className='grid gap-4'>
            <div>
              <p className='m-0 text-white/60 font-mono text-xs tracking-widest uppercase'>
                Lokasi
              </p>
              <span className='m-0 text-white text-lg leading-[1.3] tracking-[-0.02em]'>
                {content.office}
              </span>
            </div>
            <div>
              <p className='m-0 text-white/60 font-mono text-xs tracking-widest uppercase'>
                WhatsApp
              </p>
              <a
                href={content.phoneHref}
                className='text-white no-underline text-lg leading-[1.3] tracking-[-0.02em]'
                style={{ color: "white" }}
              >
                {content.phone}
              </a>
            </div>
            <div>
              <p className='m-0 text-white/60 font-mono text-xs tracking-widest uppercase'>
                Email
              </p>
              <a
                href={content.emailHref}
                className='text-white no-underline text-lg leading-[1.3] tracking-[-0.02em]'
                style={{ color: "white" }}
              >
                {content.email}
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          {isSuccess && (
            <div className='p-4 bg-[#c7d9e5]/20 border border-[#c7d9e5]/30 text-[#c7d9e5] text-base'>
              Pesan berhasil dikirim! Kami akan menghubungi Anda segera.
            </div>
          )}
          {error && (
            <div className='p-4 bg-red-500/10 border border-red-500 text-red-200 text-base'>
              {error}
            </div>
          )}
          <label className='flex flex-col gap-3'>
            <span className='m-0 text-white/60 font-mono text-xs tracking-widest uppercase'>
              Nama
            </span>
            <input
              type='text'
              name='name'
              placeholder='Nama Anda'
              required
              className='w-full pb-[0.85rem] border-0 border-b border-white/30 bg-transparent text-white text-lg outline-none placeholder:text-white/60'
            />
          </label>
          <label className='flex flex-col gap-3'>
            <span className='m-0 text-white/60 font-mono text-xs tracking-widest uppercase'>
              Email
            </span>
            <input
              type='email'
              name='email'
              placeholder='nama@perusahaan.com'
              required
              className='w-full pb-[0.85rem] border-0 border-b border-white/30 bg-transparent text-white text-lg outline-none placeholder:text-white/60'
            />
          </label>
          <label className='flex flex-col gap-3'>
            <span className='m-0 text-white/60 font-mono text-xs tracking-widest uppercase'>
              Pesan
            </span>
            <textarea
              name='message'
              rows={5}
              placeholder='Ceritakan kebutuhan & tantangan bisnis Anda...'
              required
              className='w-full pb-[0.85rem] border-0 border-b border-white/30 bg-transparent text-white text-lg outline-none placeholder:text-white/60 resize-vertical min-h-[6rem]'
            />
          </label>
          <button
            type='submit'
            disabled={isLoading}
            className='w-fit px-5 py-[0.9rem] border border-white/30 bg-transparent text-white text-lg disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isLoading ? "Mengirim..." : "Mulai Diskusi"}
          </button>

          <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden opacity-0">
            <label>
              Website
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}
