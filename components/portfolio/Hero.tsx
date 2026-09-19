"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Terminal, Database, Code2, GitBranch } from "lucide-react";
import { portfolioData } from "@/lib/data/portfolio-data";

export function PortfolioHero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Subtle 3D tilt: max ~6 degrees
    const rotateY = (mouseX / (rect.width / 2)) * 7;
    const rotateX = -(mouseY / (rect.height / 2)) * 7;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <section id="home" className="apple-hero section-dark">
      <div className="apple-container">
        <div className="hero-content-grid">
          
          {/* Left Column: Typography & CTAs */}
          <div>
            <div className="hero-status-pill">
              <span className="status-dot" />
              <span>{portfolioData.personal.status}</span>
            </div>

            <div className="hero-eyebrow">
              {portfolioData.personal.eyebrow}
            </div>

            <h1 className="hero-headline">
              {portfolioData.personal.headlineStart}
              <span className="text-gradient-blue">{portfolioData.personal.headlineHighlight}</span>
            </h1>

            <p className="hero-supporting">
              {portfolioData.personal.supportingText}
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn-apple-primary" data-cursor-text="Projects">
                <span>View My Work</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apple-secondary"
                data-cursor-text="PDF"
              >
                <span>Download Resume</span>
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="hero-social-links">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Composition */}
          <div
            ref={stageRef}
            className="hero-3d-stage"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="hero-3d-composition"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s var(--ease-apple)"
              }}
            >
              {/* Profile Image Portal */}
              <div className="hero-profile-portal">
                <Image
                  src={portfolioData.personal.profileImage}
                  alt={portfolioData.personal.name}
                  width={320}
                  height={400}
                  priority
                  referrerPolicy="no-referrer"
                />
                <div className="hero-profile-gradient" />
              </div>

              {/* Floating Terminal Snippet */}
              <div
                className="floating-3d-element hero-card-terminal"
                style={{
                  transform: `translateZ(40px) translate(${-tilt.y * 1.5}px, ${tilt.x * 1.5}px)`
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", marginBottom: "0.5rem" }}>
                  <Terminal size={12} color="#0071E3" />
                  <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "#86868B" }}>bash ~ dev</span>
                </div>
                <div style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "#F5F5F7" }}>
                  $ node server.js
                </div>
                <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "#34C759", marginTop: "2px" }}>
                  ● ready on port 3000
                </div>
              </div>

              {/* Floating Code Window */}
              <div
                className="floating-3d-element hero-card-code"
                style={{
                  transform: `translateZ(50px) translate(${-tilt.y * 2}px, ${tilt.x * 2}px)`
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", marginBottom: "0.4rem" }}>
                  <Code2 size={12} color="#5E5CE6" />
                  <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "#86868B" }}>developer.ts</span>
                </div>
                <div style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "#A1A1A6", lineHeight: 1.4 }}>
                  <span style={{ color: "#0071E3" }}>const</span> engineer = &#123;<br />
                  &nbsp;&nbsp;role: <span style={{ color: "#E5E5EA" }}>&quot;Full Stack&quot;</span>,<br />
                  &nbsp;&nbsp;dsa: <span style={{ color: "#34C759" }}>true</span><br />
                  &#125;;
                </div>
              </div>

              {/* Badges / Tech Symbols */}
              <div
                className="hero-badge-pill badge-python"
                style={{
                  transform: `translateZ(30px) translate(${-tilt.y * 1.2}px, ${tilt.x * 1.2}px)`
                }}
              >
                <span style={{ color: "#3776AB", fontWeight: 700 }}>Py</span>
                <span>Python</span>
              </div>

              <div
                className="hero-badge-pill badge-react"
                style={{
                  transform: `translateZ(35px) translate(${-tilt.y * 1.4}px, ${tilt.x * 1.4}px)`
                }}
              >
                <span style={{ color: "#61DAFB", fontWeight: 700 }}>⚛</span>
                <span>React.js</span>
              </div>

              <div
                className="hero-badge-pill badge-db"
                style={{
                  transform: `translateZ(25px) translate(${-tilt.y * 1.1}px, ${tilt.x * 1.1}px)`
                }}
              >
                <Database size={13} color="#0071E3" />
                <span>SQL · Mongo</span>
              </div>

              <div
                className="hero-badge-pill badge-git"
                style={{
                  transform: `translateZ(20px) translate(${-tilt.y * 0.9}px, ${tilt.x * 0.9}px)`
                }}
              >
                <GitBranch size={13} color="#F05032" />
                <span>Git CI/CD</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
