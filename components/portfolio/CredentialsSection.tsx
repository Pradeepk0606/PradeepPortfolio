import { portfolioData } from "@/lib/data/portfolio-data";
import { Award, Trophy, GraduationCap, CheckCircle2 } from "lucide-react";

export function CredentialsSection() {
  const certs = portfolioData.certifications;
  const achievements = portfolioData.achievements;
  const edu = portfolioData.personal.education;

  return (
    <section id="credentials" className="apple-credentials-combo section-dark">
      <div className="apple-container">
        
        {/* Achievements Section */}
        <div style={{ marginBottom: "6rem" }}>
          <div>
            <div className="apple-eyebrow">HONORS & COMPETITIONS</div>
            <h2 className="apple-section-headline">Recognition.</h2>
            <p className="apple-section-subheadline">
              Competitive awards and hackathon victories demonstrating practical system building under pressure.
            </p>
          </div>

          <div className="credentials-horizontal-grid">
            {achievements.map((item) => (
              <div key={item.title} className="cred-compact-card">
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
                    <Trophy size={15} color="#FFBD2E" />
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-silver)", textTransform: "uppercase" }}>
                      {item.event}
                    </span>
                  </div>
                  <h4 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.4rem", letterSpacing: "-0.015em" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-silver-light)", lineHeight: 1.5 }}>
                    {item.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div style={{ marginBottom: "6rem" }}>
          <div>
            <div className="apple-eyebrow">VERIFIED CREDENTIALS</div>
            <h3 className="apple-section-headline" style={{ fontSize: "2.5rem" }}>
              Certifications.
            </h3>
            <p className="apple-section-subheadline">
              Industry-standard foundational certifications in software engineering, design thinking, and cloud infrastructure.
            </p>
          </div>

          <div className="credentials-horizontal-grid">
            {certs.map((c) => (
              <div key={c.title} className="cred-compact-card">
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.25rem" }}>
                    <Award size={14} color="var(--color-accent-blue)" />
                    <span style={{ fontSize: "11px", color: "var(--color-accent-blue)", fontWeight: 600 }}>{c.issuer}</span>
                  </div>
                  <div style={{ fontSize: "1rem", fontWeight: 600, color: "#FFFFFF", letterSpacing: "-0.01em" }}>
                    {c.title}
                  </div>
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--color-silver-dark)", fontFamily: "var(--font-mono)" }}>
                  {c.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Education Section */}
        <div style={{ background: "#111115", borderRadius: "20px", padding: "2.5rem", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(0, 113, 227, 0.12)", border: "1px solid rgba(0, 113, 227, 0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <GraduationCap size={24} color="#0071E3" />
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-accent-blue)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  EDUCATION
                </div>
                <h4 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.02em" }}>
                  {edu.degree}
                </h4>
                <div style={{ fontSize: "0.9375rem", color: "var(--color-silver)" }}>
                  {edu.institution} · {edu.location}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--color-silver-dark)", textTransform: "uppercase" }}>Academic CGPA</div>
                <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF" }}>{edu.cgpa} / 10</div>
              </div>

              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--color-silver-dark)", textTransform: "uppercase" }}>Graduation</div>
                <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF" }}>2027</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
