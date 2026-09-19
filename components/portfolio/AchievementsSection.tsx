"use client";

import { Trophy, Award, Target, Terminal, Sparkles } from "lucide-react";
import { portfolioData } from "@/lib/data/portfolio-data";

export function AchievementsSection() {
  const achievements = portfolioData.achievements;

  const getIcon = (category?: string) => {
    switch (category) {
      case "Competition":
        return <Trophy size={22} color="#FBBF24" />;
      case "Technical Events":
        return <Award size={22} color="#60A5FA" />;
      case "Industry Readiness":
        return <Target size={22} color="#34D399" />;
      default:
        return <Terminal size={22} color="#A78BFA" />;
    }
  };

  return (
    <section id="achievements" style={{ padding: "5rem 0", position: "relative" }}>
      <div className="site-container">
        
        <div className="section-header">
          <div className="section-eyebrow">Milestones</div>
          <h2 className="section-title">
            Achievements &amp; <span className="gradient-heading">Recognition</span>
          </h2>
          <p className="section-subtitle">
            Notable technical competition victories, collaborative hackathons, and certified enterprise job simulations.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }} className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="dev-card" style={{ padding: "1.75rem" }} data-cursor-text="Win">
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(255, 255, 255, 0.04)", border: "1px solid var(--border-color)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {getIcon(item.category)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1875rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                      {item.title}
                    </h3>
                    <div style={{ fontSize: "0.8125rem", color: "var(--accent-primary)", fontWeight: 600, marginTop: "0.15rem" }}>
                      {item.category}
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-dim)", background: "rgba(255, 255, 255, 0.04)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
                    {item.year}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: "0.9375rem", color: "var(--text-body)", lineHeight: "1.65", margin: "0 0 1rem 0" }}>
                {item.description}
              </p>

              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(99, 102, 241, 0.1)", border: "1px solid var(--border-indigo)", padding: "0.3rem 0.75rem", borderRadius: "6px", fontSize: "0.8125rem", color: "#A5B4FC", fontWeight: 600 }}>
                <Sparkles size={14} />
                <span>{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .achievements-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
