import { portfolioData } from "@/lib/data/portfolio-data";

export function RecruiterSnapshot() {
  const cards = portfolioData.recruiterSnapshot;

  return (
    <section className="apple-recruiter-snapshot section-light">
      <div className="apple-container">
        <div>
          <div className="apple-eyebrow">RECRUITER SNAPSHOT</div>
          <h2 className="apple-section-headline">Built for the real world.</h2>
          <p className="apple-section-subheadline">
            A concise summary of engineering foundations, practical internship track record, and technical versatility.
          </p>
        </div>

        <div className="snapshot-grid">
          {cards.map((card) => (
            <div key={card.number} className="snapshot-card">
              <div>
                <div className="snapshot-num">{card.number}</div>
                <h3 className="snapshot-title">{card.title}</h3>
              </div>
              <p className="snapshot-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
