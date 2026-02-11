import { LanguageProvider } from "../contexts/LanguageContext";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";

const Index = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
    </LanguageProvider>
  );
};

export default Index;
