import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import HomeFooter from "@/components/layout/HomeFooter";

interface ProjectData {
  slug: string;
  title: string;
  description: string;
  year: string;
  type: string;
  client: string;
  timeline: string;
  heroImage: string;
  heroAlt: string;
  images: { src: string; alt: string }[];
  narrative: { heading: string; text: string }[];
  nextProject: { slug: string; title: string; image: string; alt: string };
}

const projects: Record<string, ProjectData> = {
  luminor: {
    slug: "luminor",
    title: "Luminor",
    description:
      "Brand identity and website design for a modern lighting company.",
    year: "2024",
    type: "Brand Identity, Web Design",
    client: "Luminor Lighting Co.",
    timeline: "8 weeks",
    heroImage: "/assets/images/stylish-modern-wristwatch-1.png",
    heroAlt: "Stylish Modern Wristwatch",
    images: [
      {
        src: "/assets/images/stylish-modern-wristwatch-2.png",
        alt: "Stylish Modern Wristwatch Detail",
      },
      {
        src: "/assets/images/stylish-modern-wristwatch-3.png",
        alt: "Stylish Modern Wristwatch Angle",
      },
    ],
    narrative: [
      {
        heading: "The Challenge",
        text: "Luminor needed a brand identity that would position them as a leader in modern lighting solutions. The goal was to create a visual language that communicated innovation, elegance, and sustainability.",
      },
      {
        heading: "The Solution",
        text: "We developed a comprehensive brand system that includes logo design, color palette, typography, and web design. The result is a cohesive identity that works across all touchpoints.",
      },
    ],
    nextProject: {
      slug: "orovia",
      title: "Orovia",
      image: "/assets/images/orange-monochrome-perfume-arrangement-with-tropica-1.png",
      alt: "Orange Monochrome Perfume Arrangement",
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects[id];

  if (!project) {
    return {
      title: "Project Not Found - Flaat Studio",
    };
  }

  return {
    title: `${project.title} - Flaat Studio`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return [{ id: "luminor" }];
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects[id];

  if (!project) {
    notFound();
  }

  return (
    <main className='min-h-screen px-5 pb-8 desk:pl-[260px] desk:px-10'>
      <div className='relative w-full max-w-[1300px] mx-auto flex flex-col gap-[7.5rem] pt-24 px-5 tab:p-8 desk:pt-10 desk:p-8 desk:border-r desk:border-gray-200'>
        <div className='flex flex-col gap-12 desk:grid desk:grid-cols-[1fr_340px] desk:gap-16'>
          <div className='flex flex-col gap-16 order-2 desk:order-1'>
            <div className='relative aspect-[1.53056] overflow-hidden bg-panel w-full'>
              <Image
                src={project.heroImage}
                alt={project.heroAlt}
                fill
                sizes='(min-width: 1200px) 65vw, 100vw'
                className='object-cover'
                priority
              />
            </div>

            <div className='grid grid-cols-2 gap-3'>
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className='relative aspect-[1.53056] overflow-hidden bg-panel'
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes='(min-width: 1200px) 32vw, 50vw'
                    className='object-cover'
                  />
                </div>
              ))}
            </div>

            {project.narrative.map((section, index) => (
              <div key={index} className='flex flex-col gap-4'>
                <h2 className='m-0 text-xl leading-tight font-semibold font-sans text-gray-800'>
                  {section.heading}
                </h2>
                <p className='m-0 text-lg leading-[1.3] tracking-[-0.02em] font-body text-gray-500'>
                  {section.text}
                </p>
              </div>
            ))}

            <div className='relative aspect-[1.53056] overflow-hidden bg-panel w-full'>
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                sizes='(min-width: 1200px) 65vw, 100vw'
                className='object-cover'
              />
            </div>

            <div className='grid grid-cols-3 gap-3'>
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className='relative aspect-[1.53056] overflow-hidden bg-panel'
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes='(min-width: 1200px) 21vw, 33vw'
                    className='object-cover'
                  />
                </div>
              ))}
            </div>
          </div>

          <aside className='order-1 desk:order-2 desk:sticky desk:top-10 desk:h-[calc(100vh-5rem)]'>
            <div className='flex h-full flex-col justify-between gap-10 bg-[#fafafa] p-6 tab:p-8'>
              <div className='flex flex-col gap-8'>
                <Link
                  href='/#projects'
                  className='inline-flex w-fit items-center gap-2 text-gray-800 no-underline font-sans text-lg leading-[1.3] tracking-[-0.02em] transition-opacity duration-250 hover:opacity-60'
                >
                  <span>←</span>
                  <span>View all</span>
                </Link>

                <div className='flex flex-col gap-4'>
                  <h1 className='m-0 text-2xl tab:text-3xl desk:text-[3.25rem] leading-[0.96] tracking-tight font-medium font-sans text-gray-800'>
                    {project.title}
                  </h1>
                  <p className='m-0 max-w-[28ch] text-lg leading-[1.3] tracking-[-0.02em] font-body text-gray-500'>
                    {project.description}
                  </p>
                </div>
              </div>

              <div className='flex flex-col'>
                <div className='grid grid-cols-[1fr_auto] items-center gap-4 border-b border-gray-300 py-3'>
                  <p className='m-0 font-sans text-lg leading-[1.3] tracking-[-0.02em] text-gray-800'>
                    Year
                  </p>
                  <p className='m-0 text-right text-base leading-[1.3] tracking-[-0.02em] font-body text-gray-500'>
                    {project.year}
                  </p>
                </div>

                <div className='grid grid-cols-[1fr_auto] items-center gap-4 border-b border-gray-300 py-3'>
                  <p className='m-0 font-sans text-lg leading-[1.3] tracking-[-0.02em] text-gray-800'>
                    Type
                  </p>
                  <p className='m-0 text-right text-base leading-[1.3] tracking-[-0.02em] font-body text-gray-500'>
                    {project.type}
                  </p>
                </div>

                <div className='grid grid-cols-[1fr_auto] items-center gap-4 border-b border-gray-300 py-3'>
                  <p className='m-0 font-sans text-lg leading-[1.3] tracking-[-0.02em] text-gray-800'>
                    Client
                  </p>
                  <p className='m-0 text-right text-base leading-[1.3] tracking-[-0.02em] font-body text-gray-500'>
                    {project.client}
                  </p>
                </div>

                <div className='grid grid-cols-[1fr_auto] items-center gap-4 border-b border-gray-300 py-3'>
                  <p className='m-0 font-sans text-lg leading-[1.3] tracking-[-0.02em] text-gray-800'>
                    Timeline
                  </p>
                  <p className='m-0 text-right text-base leading-[1.3] tracking-[-0.02em] font-body text-gray-500'>
                    {project.timeline}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section className='flex flex-col gap-6 pt-8 border-t border-gray-200'>
          <p className='m-0 font-mono text-xs tracking-widest uppercase text-gray-800'>
            Next Project
          </p>
          <Link
            href={`/project/${project.nextProject.slug}`}
            className='group flex flex-col gap-4 no-underline'
          >
            <div className='relative aspect-[1.53056] overflow-hidden bg-panel'>
              <Image
                src={project.nextProject.image}
                alt={project.nextProject.alt}
                fill
                sizes='(min-width: 1200px) 50vw, 100vw'
                className='object-cover transition-transform duration-250 ease-in-out group-hover:scale-[1.02]'
              />
            </div>
            <div className='flex items-center justify-between gap-4'>
              <h3 className='m-0 text-lg leading-normal font-medium font-sans text-gray-800 group-hover:opacity-60 transition-opacity duration-250'>
                {project.nextProject.title}
              </h3>
              <span className='text-gray-800 group-hover:translate-x-1 transition-transform duration-250'>
                →
              </span>
            </div>
          </Link>
        </section>

        <HomeFooter />
      </div>
    </main>
  );
}
