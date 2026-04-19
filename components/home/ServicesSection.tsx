import Image from "next/image";

const content = {
  label: "(003)",
  title: "Layanan",
  services: [
    {
      title: "Web Development",
      description:
        "Website berkinerja tinggi, aplikasi web kustom, dan landing page yang dirancang untuk konversi maksimal. Built dengan Next.js, WordPress, atau solusi custom sesuai kebutuhan bisnis Anda.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Web Development",
    },
    {
      title: "AI & Automation",
      description:
        "Creative, functional packaging that captures attention and communicates value.",
      image:
        "https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Otomatisasi workflow, chatbot cerdas, dan AI agent yang bekerja 24/7 untuk efisiensi bisnis. Integrasikan teknologi AI tanpa kerumitan teknis.",
    },
    {
      title: "Digital Marketing",
      description:
        "SEO, iklan multi-platform (Meta/Google/TikTok), marketplace, dan optimasi konversi berbasis data. Strategi marketing yang terukur untuk pertumbuhan berkelanjutan.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Digital Marketing",
    },
    // {
    //   title: "Creative Strategy",
    //   description:
    //     "Tailored strategies that align design with business goals and long-term growth.",
    //   image: "/assets/images/desktop-38.png",
    //   alt: "Creative strategy mockups",
    // },
  ],
};

export default function ServicesSection() {
  return (
    <section id='service' className='flex flex-col gap-4'>
      <div className='flex items-center justify-between gap-4'>
        <p className='m-0 font-mono text-xs tracking-widest uppercase text-gray-800'>
          {content.label}
        </p>
        <h2 className='m-0 text-xl leading-tight font-semibold font-sans'>
          {content.title}
        </h2>
      </div>

      <div className='grid gap-3'>
        {content.services.map((service) => (
          <article
            key={service.title}
            className='grid gap-4 py-5 border-t border-border tab:grid-cols-[1fr_12rem] tab:items-center tab:gap-8 desk:grid-cols-[1fr_12rem] desk:items-center desk:gap-8'
          >
            <div className='flex flex-col gap-2'>
              <h3 className='m-0 text-lg leading-normal font-medium font-sans'>
                {service.title}
              </h3>
              <p className='m-0 text-muted text-lg leading-[1.3] tracking-[-0.02em] font-body xl:pr-40'>
                {service.description}
              </p>
            </div>
            <div className='relative min-h-[10rem] overflow-hidden bg-panel tab:min-h-[7rem] desk:min-h-[7rem]'>
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes='(min-width: 1200px) 18vw, (min-width: 810px) 22vw, 100vw'
                className='object-cover'
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
