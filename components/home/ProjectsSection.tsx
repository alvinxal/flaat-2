import Link from "next/link";
import Image from "next/image";

const content = {
  label: "(002)",
  title: "Explore the stories behind our work",
  projects: [
    {
      slug: "luminor",
      title: "Luminor",
      description: "Brand identity and website design for a modern lighting company.",
      image: "/assets/images/stylish-modern-wristwatch-1.png",
      alt: "Stylish Modern Wristwatch",
    },
    {
      slug: "orovia",
      title: "Orovia",
      description: "Packaging and product design for a premium gourmet chocolate brand.",
      image: "/assets/images/orange-monochrome-perfume-arrangement-with-tropica-1.png",
      alt: "Orange Monochrome Perfume Arrangement with Tropical Shadows",
    },
    {
      slug: "kairo",
      title: "Kairo",
      description: "Bold rebranding and visual identity system for a modern coffee chain.",
      image: "/assets/images/yellow-bottle-on-yellow-background-1.png",
      alt: "Yellow Bottle on Yellow Background",
    },
    {
      slug: "vividvr",
      title: "VividVR",
      description: "Immersive VR experience design that engages and inspires users.",
      image: "/assets/images/person-with-vr-headset-1.png",
      alt: "Person with VR Headset",
    },
  ],
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <p className="m-0 font-mono text-xs tracking-widest uppercase text-gray-800">{content.label}</p>
        <h2 className="m-0 text-xl leading-tight font-semibold font-sans">{content.title}</h2>
      </div>

      <div className="grid grid-cols-1 gap-x-3 gap-y-10 tab:grid-cols-2">
        {content.projects.map((project) => (
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
              <h3 className="m-0 text-lg leading-normal font-medium font-sans">{project.title}</h3>
              <p className="m-0 text-muted text-lg leading-[1.3] tracking-[-0.02em] font-body">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}