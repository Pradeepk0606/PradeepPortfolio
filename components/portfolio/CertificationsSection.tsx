"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, ExternalLink, Eye, X, CheckCircle2 } from "lucide-react";
import { portfolioData, CertificateItem } from "@/lib/data/portfolio-data";

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [activeIssuer, setActiveIssuer] = useState<string>("ALL");

  const certs = portfolioData.certifications;

  const issuers = ["ALL", "PrepInsta", "Forage", "GUVI", "IBM", "Great Learning"];

  const filteredCerts = activeIssuer === "ALL"
    ? certs
    : certs.filter((c) => c.issuer.toLowerCase().includes(activeIssuer.toLowerCase()));

  return (
    <section id="certifications" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="site-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Continuous Learning</div>
          <h2 className="section-title">
            Certifications &amp; <span className="gradient-heading">Learning</span>
          </h2>
          <p className="section-subtitle">
            19 verified professional credentials across full-stack development, software engineering simulations, computer science core subjects, and UI/UX design.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
          {issuers.map((issuer) => (
            <button
              key={issuer}
              type="button"
              onClick={() => setActiveIssuer(issuer)}
              className="btn-secondary"
              style={{
                padding: "0.4rem 0.875rem",
                fontSize: "0.8125rem",
                minHeight: "36px",
                borderColor: activeIssuer === issuer ? "var(--accent-primary)" : "var(--border-color)",
                background: activeIssuer === issuer ? "rgba(99, 102, 241, 0.2)" : "rgba(17, 24, 39, 0.6)",
                color: activeIssuer === issuer ? "#FFFFFF" : "var(--text-muted)",
              }}
            >
              {issuer === "ALL" ? "All Credentials (19)" : issuer}
            </button>
          ))}
        </div>

        {/* Grid of Certifications */}
        <div className="certs-grid">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id || cert.title}
              className="dev-card cert-card"
              onClick={() => setSelectedCert(cert)}
              data-cursor-text="Preview"
            >
              <div className="cert-thumbnail-wrapper">
                <Image
                  src={cert.image || "/projects/Career Guidance.png"}
                  alt={cert.title}
                  width={320}
                  height={200}
                  className="cert-thumbnail"
                />
                <div className="cert-overlay-hover">
                  <Eye size={20} color="#FFFFFF" />
                  <span>View Certificate</span>
                </div>
              </div>

              <div style={{ padding: "1.125rem 1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--accent-primary)", fontWeight: 600, textTransform: "uppercase" }}>
                    {cert.issuer}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
                    {cert.year}
                  </span>
                </div>

                <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)", margin: 0, lineHeight: "1.4" }}>
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Modal Viewer */}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" style={{ maxWidth: "720px" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 1.75rem", borderBottom: "1px solid var(--border-color)" }}>
              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--accent-primary)", textTransform: "uppercase", fontWeight: 600 }}>
                  {selectedCert.issuer} • {selectedCert.year}
                </div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", margin: "0.25rem 0 0 0" }}>
                  {selectedCert.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
                style={{ background: "transparent", border: "none", color: "var(--text-muted)", cursor: "pointer" }}
              >
                <X size={22} />
              </button>
            </div>

            <div style={{ padding: "1.5rem" }}>
              <div style={{ position: "relative", width: "100%", height: "460px", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--border-color)", backgroundColor: "#0B0F19" }}>
                <Image
                  src={selectedCert.image || "/projects/Career Guidance.png"}
                  alt={selectedCert.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .certs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 640px) {
          .certs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .certs-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .cert-card {
          cursor: pointer;
          overflow: hidden;
        }
        .cert-thumbnail-wrapper {
          position: relative;
          width: 100%;
          height: 160px;
          background: #0B0F19;
          overflow: hidden;
        }
        .cert-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .cert-card:hover .cert-thumbnail {
          transform: scale(1.05);
        }
        .cert-overlay-hover {
          position: absolute;
          inset: 0;
          background: rgba(11, 15, 25, 0.7);
          backdrop-filter: blur(4px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: #FFFFFF;
          font-size: 0.8125rem;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .cert-card:hover .cert-overlay-hover {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
