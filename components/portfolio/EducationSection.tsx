"use client";

import { GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/lib/data/portfolio-data";

export function EducationSection() {
  const { degree, period, cgpa, hsc, sslc } = portfolioData.personal.educationDetails;

  return (
    <section id="education" style={{ padding: "4rem 0 6rem 0", position: "relative" }}>
      <div className="site-container">
        
        <div className="section-header" style={{ marginBottom: "2.5rem" }}>
          <div className="section-eyebrow">Academic Background</div>
          <h2 className="section-title">
            Education &amp; <span className="gradient-heading">Academic Record</span>
          </h2>
          <p className="section-subtitle">
            Strong foundational studies in computer science, software design, and analytical mathematics.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem", maxWidth: "920px", margin: "0 auto" }}>
          
          {/* Main Undergraduate Degree Card */}
          <div className="dev-card" style={{ padding: "2rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(99, 102, 241, 0.15)", border: "1px solid var(--border-indigo)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <GraduationCap size={22} color="var(--accent-primary)" />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.375rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                    {degree}
                  </h3>
                  <div style={{ fontSize: "0.875rem", color: "var(--text-dim)", marginTop: "0.2rem" }}>
                    Undergraduate Program • {period}
                  </div>
                </div>
              </div>

              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(34, 197, 94, 0.12)", border: "1px solid rgba(34, 197, 94, 0.3)", padding: "0.4rem 0.85rem", borderRadius: "8px" }}>
                <Award size={16} color="#22C55E" />
                <span style={{ color: "#4ADE80", fontWeight: 700, fontSize: "0.9375rem" }}>
                  CGPA: {cgpa}
                </span>
              </div>
            </div>

            <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem", margin: "0 0 1.5rem 0", lineHeight: "1.65" }}>
              Comprehensive coursework covering Data Structures &amp; Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, and Software Engineering principles.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", borderTop: "1px solid var(--border-color)", paddingTop: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255, 255, 255, 0.03)", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", textTransform: "uppercase" }}>Higher Secondary (HSC)</div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>Computer Science Stream</div>
                </div>
                <span style={{ color: "#A5B4FC", fontWeight: 700, fontSize: "0.9375rem" }}>{hsc}</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255, 255, 255, 0.03)", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", textTransform: "uppercase" }}>Secondary School (SSLC)</div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>General Studies</div>
                </div>
                <span style={{ color: "#A5B4FC", fontWeight: 700, fontSize: "0.9375rem" }}>{sslc}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
