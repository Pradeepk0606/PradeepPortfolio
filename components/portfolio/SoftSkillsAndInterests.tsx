"use client";

import { CheckCircle2, ArrowRight, Lightbulb, Compass, Users, Sparkles, Brain } from "lucide-react";
import { portfolioData } from "@/lib/data/portfolio-data";

export function SoftSkillsAndInterests() {
  const { softSkills, beyondCode, currentlyLearning, whatIBring } = portfolioData;

  return (
    <section id="perspective" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="site-container">
        
        {/* Soft Skills Section Header */}
        <div className="section-header" style={{ marginBottom: "2.5rem" }}>
          <div className="section-eyebrow">Professional Attributes</div>
          <h2 className="section-title">
            Interpersonal &amp; <span className="gradient-heading">Soft Skills</span>
          </h2>
          <p className="section-subtitle">
            Core attributes that foster team cohesion, clear engineering handoffs, and consistent technical delivery.
          </p>
        </div>

        {/* Soft Skills Badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "5rem" }}>
          {softSkills.map((skill) => (
            <div key={skill} className="soft-skill-pill" data-cursor-text="Skill">
              <CheckCircle2 size={16} color="var(--accent-primary)" />
              <span>{skill}</span>
            </div>
          ))}
        </div>

        {/* Two-Column: Currently Learning & What I Bring */}
        <div className="learning-and-value-grid" style={{ marginBottom: "5rem" }}>
          
          {/* Left: Currently Learning (Section 22) */}
          <div className="dev-card" style={{ padding: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.5rem" }}>
              <Brain size={20} color="var(--accent-primary)" />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                Currently Learning
              </h3>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: "0 0 1.5rem 0" }}>
              Continuous self-directed technical growth tracking progress across the software lifecycle.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {currentlyLearning.map((item) => (
                <div key={item.title} style={{ background: "rgba(255, 255, 255, 0.03)", padding: "0.875rem 1rem", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                    <span style={{ fontWeight: 700, fontSize: "0.9375rem", color: "var(--text-primary)" }}>
                      {item.title}
                    </span>
                    <span className="learning-stage-tag">
                      {item.stage}
                    </span>
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>
                    Focus: {item.focus}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: What I Bring to a Team (Section 22) */}
          <div className="dev-card" style={{ padding: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.5rem" }}>
              <Lightbulb size={20} color="var(--accent-secondary)" />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                What I Bring
              </h3>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: "0 0 1.5rem 0" }}>
              Core strengths, work ethic, and values I contribute as an aspiring software engineer.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {whatIBring.map((item) => (
                <div key={item.title} style={{ background: "rgba(255, 255, 255, 0.03)", padding: "0.875rem 1rem", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent-secondary)" }} />
                    <span style={{ fontWeight: 700, fontSize: "0.9375rem", color: "var(--text-primary)" }}>
                      {item.title}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", margin: 0, lineHeight: "1.55" }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Beyond Code / Hobbies (Section 21) */}
        <div>
          <div style={{ marginBottom: "2rem" }}>
            <div className="section-eyebrow">Personal Dimension</div>
            <h3 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
              Beyond <span className="gradient-heading">Code</span>
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem", marginTop: "0.25rem" }}>
              Activities, puzzles, and pursuits that stimulate creative problem-solving and curiosity outside work.
            </p>
          </div>

          <div className="beyond-code-grid">
            {beyondCode.map((hobby, index) => (
              <div key={index} className="dev-card hobby-card" data-cursor-text="Explore">
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
                  {hobby.icon}
                </div>
                <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--text-primary)", margin: "0 0 0.5rem 0" }}>
                  {hobby.title}
                </h4>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: 0, lineHeight: "1.55" }}>
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .soft-skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.625rem 1.25rem;
          background: rgba(17, 24, 39, 0.7);
          border: 1px solid var(--border-color);
          border-radius: 9999px;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--text-primary);
          transition: all 0.2s ease;
        }
        .soft-skill-pill:hover {
          border-color: var(--accent-primary);
          background: rgba(99, 102, 241, 0.15);
          transform: translateY(-2px);
        }
        .learning-and-value-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 1024px) {
          .learning-and-value-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .learning-stage-tag {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: #A5B4FC;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid var(--border-indigo);
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
        }
        .beyond-code-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 640px) {
          .beyond-code-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .beyond-code-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .hobby-card {
          padding: 1.5rem;
        }
      `}</style>
    </section>
  );
}
