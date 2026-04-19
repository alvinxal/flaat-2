import Image from "next/image";
import Link from "next/link";
import HomeFooter from "@/components/layout/HomeFooter";
import { siteContent } from "@/data/content";

export default function HomePage() {
  return (
    <main className="min-h-screen px-5 pb-8 desk:pl-[260px] desk:px-10">
      <div className="relative w-full max-w-[1300px] mx-auto flex flex-col gap-[7.5rem] pt-7 px-5 border-r border-border tab:p-8 desk:p-8">
        <section className="relative flex flex-col justify-end gap-8 w-full min-h-[24rem] pt-20 pb-6 tab:h-[55vh] tab:min-h-[350px] tab:max-h-[560px] desk:h-[55vh] desk:min-h-[350px] desk:max-h-[560px]">
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between gap-[0.875rem] font-mono text-[0.8125rem] tracking-[-0.04em] uppercase">
            <div className="h-[15px]">{siteContent.hero.since}</div>
            <div className="inline-flex items-center gap-1 rounded-[40px]">
              <span className="relative inline-flex w-[0.9rem] h-[0.9rem] items-center justify-center" aria-hidden="true">
                <span className="absolute w-[0.9rem] h-[0.9rem] rounded-full bg-accent opacity-25 scale-[1.8]" />
                <span className="relative w-[0.4rem] h-[0.4rem] rounded-full bg-accent" />
              </span>
              <span>{siteContent.hero.status}</span>
            </div>
          </div>

          <h1 className="max-w-[650px] m-0 text-muted text-2xl leading-[1.2] tracking-[-0.03em] font-medium text-wrap-balance tab:text-[28px] desk:text-[34px]">
            {siteContent.hero.title}
          </h1>

          <Link href={siteContent.hero.ctaHref} className="inline-flex items-center gap-3 w-fit pb-[0.8rem] border-b border-black no-underline text-sm leading-[1.3] tracking-[-0.02em]">
            <span>{siteContent.hero.cta}</span>
          </Link>
        </section>

        <section id="projects" className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <p className="m-0 font-mono text-[0.8rem] tracking-[-0.04em] uppercase text-black">{siteContent.sections.projects.label}</p>
            <h2 className="m-0 text-2xl leading-[1.2] tracking-[-0.02em] font-semibold">{siteContent.sections.projects.title}</h2>
          </div>

          <div className="grid grid-cols-1 gap-x-3 gap-y-10 tab:grid-cols-2">
            {siteContent.projects.map((project) => (
              <Link
                key={project.slug}
                href={`/project/${project.slug}`}
                className="group flex flex-col gap-3 no-underline"
              >
                <div className="relative aspect-[1.53056] overflow-hidden bg-panel">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1200px) 26vw, (min-width: 810px) 40vw, 100vw"
                    className="object-cover transition-transform duration-250 ease-in-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 transition-opacity duration-250 ease-in-out group-hover:opacity-100" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="m-0 text-2xl leading-[1.3] tracking-[-0.03em] font-medium">{project.title}</h3>
                  <p className="m-0 text-muted text-sm leading-[1.3] tracking-[-0.02em]">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="about" className="relative overflow-hidden p-5 bg-[#0f0f0f] flex flex-col gap-4 desk:p-8">
          <div className="absolute inset-0">
            <Image
              src={siteContent.about.backgroundImage}
              alt={siteContent.about.backgroundAlt}
              fill
              sizes="(min-width: 1200px) 100vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/42 to-black/70" />
          </div>

          <div className="relative z-10 flex flex-col gap-6 min-h-[28rem] justify-between">
            <div className="grid grid-cols-2 gap-[0.85rem] tab:grid-cols-6 desk:grid-cols-6">
              {siteContent.about.logos.map((logo) => (
                <div key={logo.src} className="relative h-12">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="160px"
                    className="object-contain object-left"
                  />
                </div>
              ))}
            </div>

            <div>
              <p className="m-0 font-mono text-[0.8rem] tracking-[-0.04em] uppercase text-inverse">{siteContent.sections.about.eyebrow}</p>
              <h2 className="max-w-[18ch] m-0 text-white/82 text-[clamp(1.65rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.04em] font-medium">
                {siteContent.sections.about.text}
              </h2>
            </div>
          </div>

          <p className="relative z-10 m-0 font-mono text-[0.8rem] tracking-[-0.04em] uppercase text-white">{siteContent.sections.about.label}</p>
        </section>

        <section id="service" className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <p className="m-0 font-mono text-[0.8rem] tracking-[-0.04em] uppercase text-black">{siteContent.sections.services.label}</p>
            <h2 className="m-0 text-2xl leading-[1.2] tracking-[-0.02em] font-semibold">{siteContent.sections.services.title}</h2>
          </div>

          <div className="grid gap-3">
            {siteContent.services.map((service) => (
              <article key={service.title} className="grid gap-4 py-5 border-t border-border tab:grid-cols-[1fr_12rem] tab:items-center tab:gap-8 desk:grid-cols-[1fr_12rem] desk:items-center desk:gap-8">
                <div className="flex flex-col gap-2">
                  <h3 className="m-0 text-2xl leading-[1.3] tracking-[-0.03em] font-medium">{service.title}</h3>
                  <p className="m-0 text-muted text-sm leading-[1.3] tracking-[-0.02em]">{service.description}</p>
                </div>
                <div className="relative min-h-[10rem] overflow-hidden bg-panel tab:min-h-[7rem] desk:min-h-[7rem]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1200px) 18vw, (min-width: 810px) 22vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonial" className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <p className="m-0 font-mono text-[0.8rem] tracking-[-0.04em] uppercase text-black">{siteContent.sections.testimonial.label}</p>
            <h2 className="m-0 text-2xl leading-[1.2] tracking-[-0.02em] font-semibold">{siteContent.sections.testimonial.title}</h2>
          </div>

          <article className="flex flex-col gap-4 pt-2">
            <p className="m-0 text-base tracking-[-0.03em] font-medium">{siteContent.testimonial.author}</p>
            <blockquote className="m-0 max-w-[38rem] text-muted text-[clamp(1.15rem,2vw,1.45rem)] leading-[1.35] tracking-[-0.02em]">
              {siteContent.testimonial.quote}
            </blockquote>
          </article>
        </section>

        <section id="contact" className="p-5 bg-[#111] flex flex-col gap-4 desk:p-8">
          <div className="flex items-center justify-between gap-4">
            <p className="m-0 font-mono text-[0.8rem] tracking-[-0.04em] uppercase text-inverse">{siteContent.sections.contact.label}</p>
            <h2 className="m-0 text-inverse text-2xl leading-[1.2] tracking-[-0.02em] font-semibold">{siteContent.sections.contact.title}</h2>
          </div>

          <div className="grid gap-6 tab:grid-cols-[1fr_minmax(17rem,25rem)] tab:items-start desk:grid-cols-[1fr_minmax(17rem,25rem)] desk:items-start">
            <form className="flex flex-col gap-5">
              <label className="flex flex-col gap-3">
                <span className="m-0 text-white/60 font-mono text-[0.8rem] tracking-[-0.04em] uppercase">Name</span>
                <input type="text" name="name" placeholder="Jane Smith" className="w-full pb-[0.85rem] border-0 border-b border-white/30 bg-transparent text-white outline-none placeholder:text-white/60" />
              </label>
              <label className="flex flex-col gap-3">
                <span className="m-0 text-white/60 font-mono text-[0.8rem] tracking-[-0.04em] uppercase">Email</span>
                <input type="email" name="email" placeholder="jane@framer.com" className="w-full pb-[0.85rem] border-0 border-b border-white/30 bg-transparent text-white outline-none placeholder:text-white/60" />
              </label>
              <label className="flex flex-col gap-3">
                <span className="m-0 text-white/60 font-mono text-[0.8rem] tracking-[-0.04em] uppercase">Message</span>
                <textarea name="message" rows={5} placeholder="Tell us about your project" className="w-full pb-[0.85rem] border-0 border-b border-white/30 bg-transparent text-white outline-none placeholder:text-white/60 resize-vertical min-h-[6rem]" />
              </label>
              <button type="button" className="w-fit px-5 py-[0.9rem] border border-white/30 bg-transparent text-white text-[0.95rem]">
                Send inquiry
              </button>
            </form>

            <div className="flex flex-col gap-5">
              <div className="grid gap-4">
                <div>
                  <p className="m-0 text-white/60 font-mono text-[0.8rem] tracking-[-0.04em] uppercase">Office</p>
                  <span className="m-0 text-white text-sm leading-[1.3] tracking-[-0.02em]">{siteContent.contact.office}</span>
                </div>
                <div>
                  <p className="m-0 text-white/60 font-mono text-[0.8rem] tracking-[-0.04em] uppercase">Phone</p>
                  <a href={siteContent.contact.phoneHref} className="text-white no-underline text-sm leading-[1.3] tracking-[-0.02em]">{siteContent.contact.phone}</a>
                </div>
                <div>
                  <p className="m-0 text-white/60 font-mono text-[0.8rem] tracking-[-0.04em] uppercase">Email</p>
                  <a href={siteContent.contact.emailHref} className="text-white no-underline text-sm leading-[1.3] tracking-[-0.02em]">{siteContent.contact.email}</a>
                </div>
              </div>

              <div className="relative aspect-[1.1] min-h-[16rem] overflow-hidden">
                <Image
                  src={siteContent.contact.image}
                  alt={siteContent.contact.imageAlt}
                  fill
                  sizes="(min-width: 1200px) 24vw, (min-width: 810px) 32vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <HomeFooter />
      </div>
    </main>
  );
}
