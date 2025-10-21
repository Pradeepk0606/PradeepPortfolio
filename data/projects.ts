import { Project } from "@/components/projects/ProjectCard";

const projects: Project[] = [
  {
    id: "sih",
    title: "Smart India Hackathon",
    summary: "AI-powered anomaly detection and analytics platform for civic data.",
    tech: ["Next.js", "Python", "FastAPI", "Postgres", "Tailwind"],
    metrics: [
      { label: "Accuracy", value: "94%" },
      { label: "Throughput", value: "5k req/min" },
    ],
    github: "https://github.com/example/sih",
    demo: "https://example.com/sih",
    image: "/images/projects/sih.jpg",
    category: "AI/ML",
    details: {
      problem: "Detect anomalies in large-scale civic sensor streams and provide real-time dashboards.",
      role: "Led ML pipeline, model optimization, and MLOps; co-built Next.js frontend.",
      architecture: "Data -> Kafka -> FastAPI -> Model Serving -> Postgres -> Next.js. Batch + streaming with feature store.",
      keyCommits: [
        "feat(ml): add streaming anomaly detector with drift handling",
        "perf(api): vectorized inference, 2x latency improvement",
      ],
      readme: "# SIH\nReal-time anomaly detection platform using FastAPI and Next.js.",
    },
  },
  {
    id: "iaat",
    title: "Internet Addiction Assessment Tool",
    summary: "Psychometric scoring app with adaptive questionnaire and analytics dashboard.",
    tech: ["Next.js", "Node", "Prisma", "Tailwind"],
    metrics: [
      { label: "Users", value: "12k+" },
      { label: "Avg. CSAT", value: "4.7/5" },
    ],
    github: "https://github.com/example/iaat",
    demo: "https://example.com/iaat",
    image: "/images/projects/iaat.jpg",
    category: "Web",
    details: {
      problem: "Provide validated screening for internet addiction with clinician insights.",
      role: "Full-stack lead; built scoring engine and dashboards.",
      architecture: "Next.js App Router + API Routes, Prisma ORM, row-level security.",
      keyCommits: [
        "feat(scoring): implement adaptive questionnaire logic",
        "chore(db): migrate to prisma with audit logs",
      ],
      readme: "# IAAT\nAdaptive screening and analytics platform.",
    },
  },
  {
    id: "futurewell",
    title: "FutureWell",
    summary: "AI wellness assistant with personalized recommendations and habit tracking.",
    tech: ["Next.js", "OpenAI", "Supabase", "Tailwind"],
    metrics: [
      { label: "DAU", value: "3.1k" },
      { label: "Retention", value: "38% M30" },
    ],
    github: "https://github.com/example/futurewell",
    demo: "https://example.com/futurewell",
    image: "/images/projects/futurewell.jpg",
    category: "AI/ML",
    details: {
      problem: "Improve wellbeing via AI-generated micro-habits and contextual nudges.",
      role: "Built chat flows, embeddings search, and UI.",
      architecture: "Next.js + Edge runtime for chat; RAG over Supabase; server actions.",
      keyCommits: [
        "feat(chat): add RAG with embeddings and re-ranking",
        "feat(ui): motion transitions and glassmorphism",
      ],
      readme: "# FutureWell\nPersonalized wellness assistant.",
    },
  },
  {
    id: "portfolio-revamp",
    title: "Portfolio Revamp",
    summary: "Luxurious portfolio with glassmorphism, gradients, and motion.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    metrics: [
      { label: "Lighthouse", value: "> 95" },
      { label: "Pages", value: "12" },
    ],
    github: "https://github.com/example/portfolio",
    demo: "https://example.com/portfolio",
    image: "/images/projects/portfolio.jpg",
    category: "Web",
    details: {
      problem: "Demonstrate premium UI/UX craft for top-tier recruiters.",
      role: "Sole developer and designer.",
      architecture: "Next.js App Router, motion page transitions, optimized images.",
      keyCommits: [
        "feat(hero): animated gradient spheres and theme toggle",
        "feat(projects): filters, modal, masonry grid",
      ],
      readme: "# Portfolio Revamp\nShowcase built with premium UI.",
    },
  },
];

export default projects;
