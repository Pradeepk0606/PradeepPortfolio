"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolioData } from "@/lib/data/portfolio-data";

export function PortfolioNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightContext, setIsLightContext] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 24);

      // Check if current scroll position is over a light section
      const lightSections = document.querySelectorAll(".section-light, .section-pure-white");
      let overLight = false;
      lightSections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 60 && rect.bottom >= 60) {
          overLight = true;
        }
      });
      setIsLightContext(overLight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="apple-nav-wrapper">
        <nav
          className={`apple-nav ${isScrolled ? "scrolled" : ""} ${
            isLightContext ? "light-context" : ""
          }`}
          aria-label="Primary navigation"
        >
          {/* Brand Left */}
          <Link href="#home" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
            <span>{portfolioData.personal.name}</span>
          </Link>

          {/* Desktop Links Center */}
          <div className="nav-center-links">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link">
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Right CTA */}
          <div className="nav-right-cta">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume-btn"
              data-cursor-text="PDF"
            >
              <span>Resume</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            style={{ color: isLightContext && isScrolled ? "#1D1D1F" : "#FFFFFF" }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-links">
          {navItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              className="mobile-nav-link"
              style={{ transitionDelay: `${idx * 50}ms` }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-link text-gradient-blue"
            style={{ transitionDelay: `${navItems.length * 50}ms`, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Resume (PDF)</span>
            <ArrowUpRight size={24} />
          </a>
        </div>
      </div>
    </>
  );
}
