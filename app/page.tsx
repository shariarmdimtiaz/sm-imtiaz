import AboutSection from "@/components/AboutSection";
import ConferenceSection from "@/components/ConferenceSection";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import PublicationsSection from "@/components/PublicationsSection";
import ResearchSection from "@/components/ResearchSection";
export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 md:max-w-full md:px-28 ">
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <PublicationsSection />
      <ConferenceSection />
      {/* <ProjectsSection /> */}
      <Contact />
    </main>
  );
}
