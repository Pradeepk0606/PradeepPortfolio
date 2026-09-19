import { portfolioData } from "@/lib/data/portfolio-data";
import { ArrowUpRight } from "lucide-react";

export function PortfolioFooter() {
  const p = portfolioData.personal;

  return (
    <footer className="apple-footer">
      <div className="apple-container">
        <div className="footer-inner">
          
          {/* Brand & Title */}
          <div>
            <div className="footer-brand">{p.name}</div>
            <div className="footer-role">{p.primaryTitle} · {p.secondaryTitle}</div>
          </div>

          {/* Direct External Links */}
          <div className="footer-links">
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>

            <a
              href={p.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>

            <a
              href={`mailto:${p.email}`}
              className="footer-link"
            >
              Email
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}
            >
              <span>Resume</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Copyright */}
          <div className="footer-copyright">
            © 2026 {p.name}. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}
