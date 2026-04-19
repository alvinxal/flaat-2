import Image from "next/image";

const content = {
  label: "(004)",
  title: "Let's build together.",
  office: "123 Market Street, Suite 450 San Francisco, CA 94105",
  phone: "+1 (415) 555-2389",
  phoneHref: "tel:+14155552389",
  email: "hello@modiostudio.com",
  emailHref: "mailto:hello@modiostudio.com",
  image: "/assets/images/contemplative-profile-against-colorful-backdrop-1.png",
  imageAlt: "Contemplative Profile Against Colorful Backdrop",
};

export default function ContactSection() {
  return (
    <section id="contact" className="p-5 bg-[#111] flex flex-col gap-4 desk:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="m-0 font-mono text-xs tracking-widest uppercase text-inverse">{content.label}</p>
        <h2 className="m-0 text-inverse text-xl leading-tight font-semibold font-sans">{content.title}</h2>
      </div>

      <div className="grid gap-6 tab:grid-cols-[1fr_minmax(17rem,25rem)] tab:items-start desk:grid-cols-[1fr_minmax(17rem,25rem)] desk:items-start">
        <form className="flex flex-col gap-5">
          <label className="flex flex-col gap-3">
            <span className="m-0 text-white/60 font-mono text-xs tracking-widest uppercase">Name</span>
            <input type="text" name="name" placeholder="Jane Smith" className="w-full pb-[0.85rem] border-0 border-b border-white/30 bg-transparent text-white text-lg outline-none placeholder:text-white/60" />
          </label>
          <label className="flex flex-col gap-3">
            <span className="m-0 text-white/60 font-mono text-xs tracking-widest uppercase">Email</span>
            <input type="email" name="email" placeholder="jane@framer.com" className="w-full pb-[0.85rem] border-0 border-b border-white/30 bg-transparent text-white text-lg outline-none placeholder:text-white/60" />
          </label>
          <label className="flex flex-col gap-3">
            <span className="m-0 text-white/60 font-mono text-xs tracking-widest uppercase">Message</span>
            <textarea name="message" rows={5} placeholder="Tell us about your project" className="w-full pb-[0.85rem] border-0 border-b border-white/30 bg-transparent text-white text-lg outline-none placeholder:text-white/60 resize-vertical min-h-[6rem]" />
          </label>
          <button type="button" className="w-fit px-5 py-[0.9rem] border border-white/30 bg-transparent text-white text-lg">
            Send inquiry
          </button>
        </form>

        <div className="flex flex-col gap-5">
          <div className="grid gap-4">
            <div>
              <p className="m-0 text-white/60 font-mono text-xs tracking-widest uppercase">Office</p>
              <span className="m-0 text-white text-lg leading-[1.3] tracking-[-0.02em]">{content.office}</span>
            </div>
            <div>
              <p className="m-0 text-white/60 font-mono text-xs tracking-widest uppercase">Phone</p>
              <a href={content.phoneHref} className="text-white no-underline text-lg leading-[1.3] tracking-[-0.02em]">{content.phone}</a>
            </div>
            <div>
              <p className="m-0 text-white/60 font-mono text-xs tracking-widest uppercase">Email</p>
              <a href={content.emailHref} className="text-white no-underline text-lg leading-[1.3] tracking-[-0.02em]">{content.email}</a>
            </div>
          </div>

          <div className="relative aspect-[1.1] min-h-[16rem] overflow-hidden">
            <Image
              src={content.image}
              alt={content.imageAlt}
              fill
              sizes="(min-width: 1200px) 24vw, (min-width: 810px) 32vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
</div>
    </section>
  );
}