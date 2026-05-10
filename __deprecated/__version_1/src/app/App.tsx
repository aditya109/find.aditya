import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { RecommendationsSection } from "./components/RecommendationsSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "#06060f",
        color: "#ffffff",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <RecommendationsSection />
        <ContactSection />
      </main>
    </div>
  );
}
