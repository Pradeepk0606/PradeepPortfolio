"use client";

import { useState } from "react";
import { ArrowUpRight, FileText } from "lucide-react";

export function ResumeCTA() {
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.2;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.2;
    setBtnOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setBtnOffset({ x: 0, y: 0 });
  };

  return (
    <section className="apple-resume-cta section-dark">
      <div className="apple-container">
        <div className="resume-cta-content">
          <div className="apple-eyebrow">CURRICULUM VITAE</div>
          <h2 className="apple-section-headline" style={{ marginBottom: "1.25rem" }}>
            Want the complete story?
          </h2>
          <p className="apple-section-subheadline" style={{ margin: "0 auto 2.75rem auto" }}>
            Take a closer look at my experience, projects, and technical skills.
          </p>

          <div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-apple-primary btn-apple-blue"
              data-cursor-text="PDF"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `translate(${btnOffset.x}px, ${btnOffset.y}px)`,
                fontSize: "1.0625rem",
                padding: "1rem 2.25rem"
              }}
            >
              <FileText size={18} />
              <span>Download Resume</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
