import Image from "next/image";

const content = {
  label: "(003)",
  title: "Our services.",
  services: [
    {
      title: "Brand Identity",
      description: "We build cohesive visual systems that define your brand's voice, personality, and presence.",
      image: "/assets/images/desktop-32.png",
      alt: "Brand identity mockups",
    },
    {
      title: "Packaging Design",
      description: "Creative, functional packaging that captures attention and communicates value.",
      image: "/assets/images/desktop-35.png",
      alt: "Packaging design mockups",
    },
    {
      title: "Web Design",
      description: "Modern, responsive websites that balance beauty with seamless user experience.",
      image: "/assets/images/desktop-37.png",
      alt: "Web design mockups",
    },
    {
      title: "Creative Strategy",
      description: "Tailored strategies that align design with business goals and long-term growth.",
      image: "/assets/images/desktop-38.png",
      alt: "Creative strategy mockups",
    },
  ],
};

export default function ServicesSection() {
  return (
    <section id="service" className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <p className="m-0 font-mono text-xs tracking-widest uppercase text-gray-800">{content.label}</p>
        <h2 className="m-0 text-xl leading-tight font-semibold font-sans">{content.title}</h2>
      </div>

      <div className="grid gap-3">
        {content.services.map((service) => (
          <article key={service.title} className="grid gap-4 py-5 border-t border-border tab:grid-cols-[1fr_12rem] tab:items-center tab:gap-8 desk:grid-cols-[1fr_12rem] desk:items-center desk:gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="m-0 text-lg leading-normal font-medium font-sans">{service.title}</h3>
              <p className="m-0 text-muted text-lg leading-[1.3] tracking-[-0.02em] font-body">{service.description}</p>
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
  );
}