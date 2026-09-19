"use client";

import { Calendar, ChevronRight, Sparkles } from "lucide-react";
import { portfolioData } from "@/lib/data/portfolio-data";

export function DeveloperJourney() {
  const milestones = portfolioData.journey;

  return (
    <section id="journey" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="site-container">
        
        <div className="section-header">
          <div className="section-eyebrow">Progression</div>
          <h2 className="section-title">
            Developer <span className="gradient-heading">Journey</span>
          </h2>
          <p className="section-subtitle">
            Key milestones in computer science, software engineering internships, technical competitions, and continuous learning.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-track">
            {milestones.map((item, index) => (
              <div key={index} className="timeline-entry" style={{ marginBottom: index === milestones.length - 1 ? 0 : "3rem" }}>
                
                {/* Node marker */}
                <div className="timeline-node">
                  <div className="timeline-node-inner" />
                </div>

                {/* Content Card */}
                <div className="dev-card timeline-card" data-cursor-text="Year">
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                      <span className="timeline-year-badge">
                        <Calendar size={13} />
                        {item.year}
                      </span>
                      {item.badge && (
                        <span className="timeline-category-badge">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span style={{ fontSize: "0.8125rem", color: "var(--accent-secondary)", fontWeight: 600 }}>
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", margin: "0 0 0.5rem 0" }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", margin: 0, lineHeight: "1.65" }}>
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .timeline-container {
          max-width: 820px;
          margin: 0 auto;
        }
        .timeline-entry {
          position: relative;
        }
        .timeline-card {
          padding: 1.5rem 1.75rem;
          margin-left: 0.5rem;
        }
        .timeline-year-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.25rem 0.625rem;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid var(--border-indigo);
          border-radius: 6px;
          color: #A5B4FC;
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          font-weight: 700;
        }
        .timeline-category-badge {
          display: inline-block;
          padding: 0.2rem 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          color: var(--text-dim);
          font-size: 0.75rem;
        }
      `}</style>
    </section>
  );
}
