import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CareerSection from "@/components/CareerSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeachingSection from "@/components/TeachingSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CareerSection />
        <ProjectsSection />
        <TeachingSection />
        <ToolsSection />
        <ContactSection />
      </main>
    </>
  );
}
