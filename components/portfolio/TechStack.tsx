import { portfolioData } from "@/lib/data/portfolio-data";

export function TechStack() {
  const categories = portfolioData.skills;

  return (
    <section id="skills" className="apple-skills section-light">
      <div className="apple-container">
        <div>
          <div className="apple-eyebrow">ENGINEERING STACK</div>
          <h2 className="apple-section-headline">Technologies I use.</h2>
          <p className="apple-section-subheadline">
            A solid toolkit spanning programming languages, frontend libraries, backend runtimes, databases, and modern developer tooling.
          </p>
        </div>

        <div className="skills-categories-grid">
          {categories.map((cat) => (
            <div key={cat.title} className="skill-category-card">
              <div className="skill-cat-title">{cat.title}</div>
              <div className="skill-tags-group">
                {cat.items.map((item) => (
                  <div key={item.name} className="skill-tile">
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
