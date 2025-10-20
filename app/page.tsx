import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Certificates } from "@/components/sections/Certificates";
import { Resume } from "@/components/sections/Resume";
import { Achievements } from "@/components/sections/Achievements";
import { Testimonials } from "@/components/sections/Testimonials";
import { SocialFeed } from "@/components/sections/SocialFeed";
import { Integrations } from "@/components/sections/Integrations";
import { Newsletter } from "@/components/Newsletter";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Resume />
      <Achievements />
      <Testimonials />
      <SocialFeed />
      <Integrations />
      <Newsletter />
      <Contact />
    </>
  );
}
