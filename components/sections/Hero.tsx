"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profileData } from "@/lib/data/profile";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const roles = [
    "Full Stack Developer",
    "Problem Solver",
    "Web Developer",
    "UI/UX Designer",
  ];

  useEffect(() => {
    const current = loop % roles.length;
    const full = roles[current];
    const next = isDeleting ? full.substring(0, typed.length - 1) : full.substring(0, typed.length + 1);
    const speed = isDeleting ? 60 : 120;
    const timer = setTimeout(() => setTyped(next), speed);
    if (!isDeleting && typed === full) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && typed === "") {
      setIsDeleting(false);
      setLoop((l) => l + 1);
    }
    return () => clearTimeout(timer);
  }, [typed, isDeleting, loop]);

  const handleScroll = useCallback((id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);


  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] items-center overflow-hidden md:min-h-[90vh]"
      aria-label="Hero section"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" />

      <div className="container relative z-10 mx-auto w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="absolute right-4 top-4 sm:right-8 sm:top-8">
          <ThemeToggle aria-label="Toggle theme" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-10 md:grid-cols-2"
        >
          <div className="order-2 md:order-1">
            <motion.p variants={item} className="mb-2 text-sm tracking-wide text-muted-foreground">
              AI • Full Stack
            </motion.p>
            <motion.h1
              variants={item}
              className="text-5xl font-extrabold leading-[1.1] sm:text-6xl md:text-7xl"
            >
              Hi, I'm
              <br />
              <span className="text-gradient block">{profileData?.personal?.name || "Pradeepkumar R"}</span>
            </motion.h1>
            <motion.p variants={item} className="mt-4 text-xl sm:text-2xl text-muted-foreground">
              I'm a {" "}
              <motion.span
                className="text-primary font-semibold inline-block"
                animate={isDeleting ? { x: [0, -0.6, 0] } : { x: 0 }}
                transition={{ duration: 0.25 }}
              >
                {typed}
              </motion.span>
              <motion.span
                className="inline-block w-3"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.p>
            <motion.p variants={item} className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {profileData?.summary || "I craft intelligent, scalable products with modern web, AI systems, and thoughtful UX."}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" onClick={() => handleScroll("#contact")} aria-label="Scroll to contact section">
                Contact Me
              </Button>

              <a
                href="https://github.com/Pradeepk0606"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Open GitHub profile"
                className="inline-flex"
              >
                <Button variant="outline" size="lg">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/pradeepk143/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Open LinkedIn profile"
                className="inline-flex"
              >
                <Button variant="outline" size="lg">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Button>
              </a>
            </motion.div>

            {/* Removed Stars/Repos widget per request */}
          </div>

          <motion.div variants={item} className="order-1 justify-self-center md:order-2">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full ring-8 ring-primary/10 bg-gradient-to-b from-slate-300/10 to-slate-600/10 overflow-hidden shadow-2xl"
            >
              <div className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_60px_15px_rgba(56,189,248,0.15)]" />
              <Image
                src="/images/profile.jpg"
                alt="Portrait avatar"
                fill
                sizes="(max-width: 768px) 16rem, (max-width: 1024px) 20rem, 22rem"
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-muted-foreground"
        >
          <p className="text-base sm:text-lg">Innovating with Code, Designing with Purpose.</p>
          <button
            onClick={() => handleScroll("#about")}
            className="mt-2 inline-flex flex-col items-center text-sm hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md"
            aria-label="Scroll Down"
          >
            <span>Scroll Down</span>
            <ArrowDown className="mt-1 h-5 w-5 animate-bounce" />
          </button>
        </motion.div>

        
      </div>
    </section>
  );
}
