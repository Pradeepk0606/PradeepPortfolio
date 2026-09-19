"use client";

import { useEffect, useState } from "react";
import { Github, FolderGit2, Star, GitFork, ArrowUpRight, Code, Activity } from "lucide-react";
import { portfolioData } from "@/lib/data/portfolio-data";

interface RepoInfo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

export function GitHubSection() {
  const [stats, setStats] = useState({
    publicRepos: 24,
    followers: 12,
    following: 15,
  });

  const featuredRepos: RepoInfo[] = [
    {
      name: "portfolio",
      description: "Personal developer portfolio built with Next.js App Router, modern CSS styling, interactive components, and resilient APIs.",
      language: "TypeScript",
      stars: 3,
      forks: 1,
      url: "https://github.com/Pradeepk0606/PradeepPortfolio",
    },
    {
      name: "career-counseling",
      description: "Pathwise career guidance diagnostic web application to help students discover engineering and career pathways.",
      language: "JavaScript",
      stars: 4,
      forks: 2,
      url: "https://github.com/Pradeepk0606",
    },
    {
      name: "Pradeepk0606",
      description: "Special GitHub config profile showcasing active projects, programming languages, and engineering milestones.",
      language: "Markdown",
      stars: 2,
      forks: 0,
      url: "https://github.com/Pradeepk0606",
    },
  ];

  return (
    <section id="github" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="site-container">
        
        {/* Section Header */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "3rem" }}>
          <div>
            <div className="section-eyebrow">Open Source</div>
            <h2 className="section-title" style={{ margin: 0 }}>
              GitHub <span className="gradient-heading">Activity &amp; Repos</span>
            </h2>
            <p className="section-subtitle" style={{ marginTop: "0.5rem" }}>
              Explore my public repositories, project architectures, and open code contributions.
            </p>
          </div>

          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            data-cursor-text="GitHub"
          >
            <Github size={18} />
            <span>Visit GitHub Profile</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* GitHub Stats Row */}
        <div className="github-stats-row">
          <div className="dev-card stat-item">
            <div className="stat-label">Public Repositories</div>
            <div className="stat-number">24+</div>
          </div>
          <div className="dev-card stat-item">
            <div className="stat-label">Primary Languages</div>
            <div className="stat-number" style={{ fontSize: "1.25rem", color: "#A5B4FC" }}>
              Python · JS · TS
            </div>
          </div>
          <div className="dev-card stat-item">
            <div className="stat-label">Engineering Focus</div>
            <div className="stat-number" style={{ fontSize: "1.25rem", color: "#34D399" }}>
              Full Stack &amp; APIs
            </div>
          </div>
          <div className="dev-card stat-item">
            <div className="stat-label">Active Commits</div>
            <div className="stat-number">Consistent</div>
          </div>
        </div>

        {/* Featured Repositories Grid */}
        <div className="repos-grid">
          {featuredRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="dev-card repo-card"
              data-cursor-text="Repo"
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <FolderGit2 size={18} color="var(--accent-primary)" />
                  <span style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    {repo.name}
                  </span>
                </div>
                <ArrowUpRight size={16} color="var(--text-dim)" className="repo-arrow" />
              </div>

              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: "0 0 1.25rem 0", lineHeight: "1.6", minHeight: "42px" }}>
                {repo.description}
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-dim)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: repo.language === "TypeScript" ? "#38BDF8" : repo.language === "JavaScript" ? "#FBBF24" : "#A78BFA" }} />
                  <span>{repo.language}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Star size={13} />
                    <span>{repo.stars}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <GitFork size={13} />
                    <span>{repo.forks}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>

      <style jsx>{`
        .github-stats-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }
        @media (min-width: 1024px) {
          .github-stats-row {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .stat-item {
          padding: 1.25rem 1.5rem;
          text-align: center;
        }
        .stat-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-dim);
          margin-bottom: 0.35rem;
        }
        .stat-number {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-primary);
        }
        .repos-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .repos-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .repo-card {
          padding: 1.5rem;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .repo-card:hover .repo-arrow {
          color: var(--accent-primary);
          transform: translate(2px, -2px);
        }
        .repo-arrow {
          transition: transform 0.15s ease, color 0.15s ease;
        }
      `}</style>
    </section>
  );
}
