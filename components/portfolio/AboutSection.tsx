import { portfolioData } from "@/lib/data/portfolio-data";

export function AboutSection() {
  const p = portfolioData.personal;

  return (
    <section id="about" className="apple-about section-pure-white">
      <div className="apple-container">
        <div className="about-editorial-grid">
          
          {/* Left Narrative Column */}
          <div>
            <div className="apple-eyebrow">ABOUT ME</div>
            <h2 className="apple-section-headline" style={{ marginBottom: "2rem" }}>
              About me.
            </h2>

            <p className="about-text-lead">
              {p.aboutNarrative[0]}
            </p>

            <p className="about-text-sub">
              {p.aboutNarrative[1]}
            </p>

            <p className="about-text-sub">
              {p.aboutNarrative[2]}
            </p>
          </div>

          {/* Right Compact Stats / Facts Panel */}
          <div className="about-stats-panel">
            <div className="about-stat-row">
              <div className="about-stat-label">Location</div>
              <div className="about-stat-value">{p.education.location}</div>
              <div className="about-stat-sub">Tamil Nadu, India</div>
            </div>

            <div className="about-stat-row">
              <div className="about-stat-label">Degree & Major</div>
              <div className="about-stat-value" style={{ fontSize: "1.25rem" }}>
                {p.education.degree}
              </div>
              <div className="about-stat-sub">{p.education.institution}</div>
            </div>

            <div className="about-stat-row">
              <div className="about-stat-label">Academic Standing</div>
              <div className="about-stat-value">{p.education.cgpa} CGPA</div>
              <div className="about-stat-sub">HSC: {p.education.hsc}</div>
            </div>

            <div className="about-stat-row">
              <div className="about-stat-label">Target Graduation</div>
              <div className="about-stat-value">Class of 2027</div>
              <div className="about-stat-sub">4-Year Engineering Program</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
