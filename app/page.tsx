import HomeFooter from "@/components/layout/HomeFooter";
import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <main className="min-h-screen px-5 pb-8 desk:pl-[260px] desk:px-10">
      <div className="relative w-full max-w-[1300px] mx-auto flex flex-col gap-[7.5rem] pt-10 px-5 tab:p-8 desk:p-8 desk:border-r desk:border-gray-200">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
        <HomeFooter />
      </div>
    </main>
  );
}