"use client";

import { Layers, Sparkles } from "lucide-react";
import { portfolioData } from "@/lib/data/portfolio-data";

export function CurrentlyBuilding() {
  const items = portfolioData.currentlyBuilding;
  // Duplicate for seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <section
      style={{
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
        backgroundColor: "rgba(11, 15, 25, 0.6)",
        position: "relative",
      }}
      aria-label="Currently Building"
    >
      <div className="site-container" style={{ paddingBottom: "0.25rem", paddingTop: "0.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent-primary)" }} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--accent-primary)",
                whiteSpace: "nowrap",
              }}
            >
              Currently Building
            </span>
          </div>
        </div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {duplicatedItems.map((item, index) => (
            <div key={index} className="marquee-item">
              <Sparkles size={13} color="var(--accent-primary)" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
