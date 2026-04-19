import Image from "next/image";

const content = {
  backgroundImage: "/assets/images/office-discussion-1.jpg",
  backgroundAlt: "Office Discussion",
  label: "(001)",
  eyebrow: "who we are",
  text: "From branding and packaging to web design and digital campaigns, our team partners with ambitious businesses to bring bold ideas to life. We believe great design goes beyond aesthetics.",
  logos: [
    { src: "/assets/images/fakebrand-1-15.png", alt: "Fakebrand 1" },
    { src: "/assets/images/fakebrand-2-18.png", alt: "Fakebrand 2" },
    { src: "/assets/images/fakebrand-3-21.png", alt: "Fakebrand 3" },
    { src: "/assets/images/fakebrand-4-24.png", alt: "Fakebrand 4" },
    { src: "/assets/images/fakebrand-5-26.png", alt: "Fakebrand 5" },
    { src: "/assets/images/fakebrand-6-28.png", alt: "Fakebrand 6" },
  ],
};

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden p-5 bg-[#0f0f0f] flex flex-col gap-4 desk:p-8">
      <div className="absolute inset-0">
        <Image
          src={content.backgroundImage}
          alt={content.backgroundAlt}
          fill
          sizes="(min-width: 1200px) 100vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/42 to-black/70" />
      </div>

      <div className="relative z-10 flex flex-col gap-6 min-h-[28rem] justify-between">
        <p className="m-0 font-mono text-xs tracking-widest uppercase text-white">{content.label}</p>
        <div className="flex flex-col gap-2">
          <p className="m-0 font-mono text-xs tracking-widest uppercase text-inverse">{content.eyebrow}</p>
          <h2 className="max-w-[35ch] m-0 text-white/82 text-xl md:text-2xl lg:text-3xl leading-tight font-medium">
            {content.text}
          </h2>
        </div>
      </div>
    </section>
  );
}