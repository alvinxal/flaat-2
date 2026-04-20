import HomeFooter from "@/components/layout/HomeFooter";
import ProjectsHero from "@/components/home/ProjectsHero";
import ProjectsList from "@/components/home/ProjectsList";

export default function ProjectsPage() {
  return (
    <main className='min-h-screen px-5 pb-8 desk:pl-[260px] desk:px-10'>
      <div className='relative w-full max-w-[1300px] mx-auto flex flex-col gap-[7.5rem] pt-10 px-5 tab:p-8 desk:p-8 desk:border-r desk:border-gray-200'>
        <ProjectsHero />
        <ProjectsList />
        <HomeFooter />
      </div>
    </main>
  );
}