"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ParticleBackground } from "@/components/3d/ParticleBackground";
import { profileData } from "@/lib/data/profile";

export function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Full Stack Developer",
    "MERN Stack Expert",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  // Get initials from name for fallback avatar
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  const scrollToSection = (id: string): void => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/40" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-5 md:space-y-6"
          >
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4">
              Hi, I'm{" "}
              <span className="text-gradient">{profileData.personal.name}</span>
            </h1>

            <div className="h-14 md:h-16">
              <p className="text-lg md:text-3xl text-muted-foreground">
                I'm a{" "}
                <span className="text-primary font-semibold">
                  {text}
                  <span className="animate-pulse">|</span>
                </span>
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              {profileData.summary}
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4 pt-4">
              <Button
                size="lg"
                className="group"
                onClick={() => scrollToSection("#contact")}
              >
                Contact Me
                <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group"
                onClick={() => window.open(profileData.personal.github, "_blank")}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group"
                onClick={() => window.open(profileData.personal.linkedin, "_blank")}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </motion.div>

          {/* Right Side - Hero Image or Initials */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full md:w-1/2 flex justify-center items-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {profileData.personal.avatar ? (
                <Image
                  src={profileData.personal.avatar}
                  alt={profileData.personal.name}
                  fill
                  className="rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const initials = document.createElement('div');
                    initials.className = 'w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-6xl md:text-8xl font-bold text-primary';
                    initials.textContent = getInitials(profileData.personal.name);
                    target.parentNode?.insertBefore(initials, target.nextSibling);
                  }}
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-6xl md:text-8xl font-bold text-primary">
                  {getInitials(profileData.personal.name)}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("#about")}
            className="group flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="mb-2">Scroll Down</span>
            <ArrowDown className="h-6 w-6 animate-bounce group-hover:animate-none" />
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            {profileData.personal.tagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
