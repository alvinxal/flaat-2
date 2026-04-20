import Link from "next/link";
import Image from "next/image";

const content = {
  projects: [
    {
      slug: "luminor",
      title: "Luminor",
      description:
        "Brand identity and website design for a modern lighting company.",
      image: "/assets/images/stylish-modern-wristwatch-1.png",
      alt: "Stylish Modern Wristwatch",
    },
    {
      slug: "orovia",
      title: "Orovia",
      description:
        "Packaging and product design for a premium gourmet chocolate brand.",
      image:
        "/assets/images/orange-monochrome-perfume-arrangement-with-tropica-1.png",
      alt: "Orange Monochrome Perfume Arrangement with Tropical Shadows",
    },
    {
      slug: "kairo",
      title: "Kairo",
      description:
        "Bold rebranding and visual identity system for a modern coffee chain.",
      image: "/assets/images/yellow-bottle-on-yellow-background-1.png",
      alt: "Yellow Bottle on Yellow Background",
    },
    {
      slug: "vividvr",
      title: "VividVR",
      description:
        "Immersive VR experience design that engages and inspires users.",
      image: "/assets/images/person-with-vr-headset-1.png",
      alt: "Person with VR Headset",
    },
    {
      slug: "velora",
      title: "Velora",
      description:
        "E-commerce platform design for a sustainable fashion brand.",
      image: "/assets/images/stylish-modern-wristwatch-1.png",
      alt: "Sustainable Fashion",
    },
    {
      slug: "aurora",
      title: "Aurora",
      description:
        "Mobile app design for a wellness and meditation platform.",
      image: "/assets/images/orange-monochrome-perfume-arrangement-with-tropica-1.png",
      alt: "Wellness App",
    },
  ],
};

export default function ProjectsList() {
  return (
    <section id='projects' className='flex flex-col gap-4'>
      <div className='grid grid-cols-1 gap-x-3 gap-y-6 tab:grid-cols-2 desk:grid-cols-3'>
        {content.projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className='group flex flex-col gap-1 no-underline'
          >
            <div className='relative aspect-[1.53056] overflow-hidden bg-panel'>
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes='(min-width: 1200px) 26vw, (min-width: 810px) 40vw, 100vw'
                className='object-cover transition-transform duration-250 ease-in-out group-hover:scale-[1.02]'
              />
              <p className='m-0 text-lg leading-[1.3] tracking-[-0.02em] font-body opacity-0 transition-opacity duration-250 ease-in-out group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-accent/70 text-white p-4 text-center'>
                {project.description}
              </p>
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='m-0 text-lg leading-normal font-medium font-sans'>
                {project.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}