import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { EducationSection } from "./components/EducationSection";
import { CertificatesSection } from "./components/CertificatesSection";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        <EducationSection />
        <CertificatesSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
