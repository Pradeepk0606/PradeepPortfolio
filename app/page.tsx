import { PortfolioHero } from "@/components/portfolio/Hero";
import { RecruiterSnapshot } from "@/components/portfolio/RecruiterSnapshot";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { TechStack } from "@/components/portfolio/TechStack";
import { CurrentlyImproving } from "@/components/portfolio/CurrentlyImproving";
import { InteractiveTerminal } from "@/components/portfolio/InteractiveTerminal";
import { CredentialsSection } from "@/components/portfolio/CredentialsSection";
import { ResumeCTA } from "@/components/portfolio/ResumeCTA";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { RecruiterChatbot } from "@/components/portfolio/RecruiterChatbot";

export default function Home() {
  return (
    <>
      {/* 01: Full Viewport Hero */}
      <PortfolioHero />

      {/* 02: Recruiter Snapshot (Light/Clean) */}
      <RecruiterSnapshot />

      {/* 03: About Me (Editorial) */}
      <AboutSection />

      {/* 04: Experience (Cinematic Timeline & Interactive Mockups) */}
      <ExperienceSection />

      {/* 05: Projects (3D Pointer Tilt & Interactive Systems) & More Projects */}
      <ProjectsSection />

      {/* 06: Technologies I Use (High-End Minimal Cards, No Percentages) */}
      <TechStack />

      {/* 07: Currently Improving (Progression Pipeline & Topics) */}
      <CurrentlyImproving />

      {/* 08: Terminal Experience (Full Width Dark, Real Commands) */}
      <InteractiveTerminal />

      {/* 09: Credentials (Achievements, Certifications, Education) */}
      <CredentialsSection />

      {/* 10: Resume CTA (Magnetic Button) */}
      <ResumeCTA />

      {/* 11: Contact (Direct Channels & Minimal Apple Form) */}
      <ContactSection />

      {/* 12: Recruiter AI Chatbot (Gemini Powered) */}
      <RecruiterChatbot />
    </>
  );
}
