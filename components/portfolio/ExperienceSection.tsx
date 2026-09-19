"use client";

import { portfolioData, ExperienceItem } from "@/lib/data/portfolio-data";
import { Briefcase, CheckCircle2, Calendar, Terminal } from "lucide-react";

export function ExperienceSection() {
  const experiences = portfolioData.experiences;

  return (
    <section id="experience" className="apple-experience section-dark">
      <div className="apple-container">
        {/* Section Header */}
        <div>
          <div className="apple-eyebrow">PROFESSIONAL TIMELINE</div>
          <h2 className="apple-section-headline">Experience.</h2>
          <p className="apple-section-subheadline">
            Learning by building. Five technical internships spanning full-stack web applications, REST APIs, database architecture, and Python automation.
          </p>
        </div>

        {/* Elegant Vertical Timeline */}
        <div className="timeline-vertical-flow">
          {experiences.map((exp, index) => {
            const isLatest = index === 0;

            return (
              <div key={exp.id} className="timeline-card-row">
                {/* Left Timeline Rail */}
                <div className="timeline-rail">
                  <div className={`timeline-rail-dot ${isLatest ? "latest" : ""}`}>
                    <span className="dot-inner" />
                  </div>
                  {index !== experiences.length - 1 && <div className="timeline-rail-line" />}
                </div>

                {/* Right Card Content */}
                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <div>
                      <div className="timeline-meta-bar">
                        <span className="timeline-period-badge">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                        {isLatest && (
                          <span className="timeline-status-badge">Latest Internship</span>
                        )}
                      </div>
                      <h3 className="timeline-company-name">{exp.company}</h3>
                      <div className="timeline-role-title">
                        <Briefcase size={14} color="var(--color-accent-blue)" />
                        <span>{exp.role}</span>
                      </div>
                    </div>
                  </div>

                  <p className="timeline-description">{exp.description}</p>

                  <div className="timeline-tech-pills">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="timeline-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
