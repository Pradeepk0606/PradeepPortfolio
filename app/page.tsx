import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Certificates } from "@/components/sections/Certificates";
import { About } from "@/components/sections/About";
import { SocialFeed } from "@/components/sections/SocialFeed";
import { Testimonials } from "@/components/sections/Testimonials";
import { Achievements } from "@/components/sections/Achievements";
import { Resume } from "@/components/sections/Resume";
import { Integrations } from "@/components/sections/Integrations";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <About />
      <SocialFeed />
      <Testimonials />
      <Achievements />
      <Resume />
      <Integrations />
      <Contact />
    </>
  );
}
