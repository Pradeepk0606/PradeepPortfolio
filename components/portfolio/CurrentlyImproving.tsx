import { portfolioData } from "@/lib/data/portfolio-data";
import { ArrowRight } from "lucide-react";

export function CurrentlyImproving() {
  const items = portfolioData.currentlyImproving;

  return (
    <section className="apple-improving section-pure-white">
      <div className="apple-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
          <div className="apple-eyebrow">CONTINUOUS ADVANCEMENT</div>
          <h2 className="apple-section-headline">Currently improving.</h2>
          <p className="apple-section-subheadline" style={{ margin: "0 auto" }}>
            Deliberate daily focus on core computer science fundamentals, backend scalability, containerization, and automation.
          </p>
        </div>

        {/* Horizontal Progression Bar */}
        <div className="improving-progression-bar">
          <span className="progression-step">LEARN</span>
          <ArrowRight className="progression-arrow" size={18} />
          <span className="progression-step">BUILD</span>
          <ArrowRight className="progression-arrow" size={18} />
          <span className="progression-step">APPLY</span>
          <ArrowRight className="progression-arrow" size={18} />
          <span className="progression-step">IMPROVE</span>
        </div>

        {/* 6 Focused Learning Cards */}
        <div className="improving-cards-row">
          {items.map((item) => (
            <div key={item} className="improving-item-card">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
