"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export interface Project {
  id: string;
  title: string;
  summary: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  github: string;
  demo: string;
  image: string;
  category: "AI/ML" | "Web" | "Blockchain" | "IoT";
  details: {
    problem: string;
    role: string;
    architecture: string;
    keyCommits: string[];
    readme: string;
  };
}

interface CardProps {
  project: Project;
  onOpen: (p: Project) => void;
}

export default function ProjectCard({ project, onOpen }: CardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/60 p-4 shadow-lg backdrop-blur-xl"
    >
      <div className="relative mb-3 aspect-video overflow-hidden rounded-lg">
        <Image src={project.image} alt={`${project.title} screenshot`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{project.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-full bg-muted px-2 py-0.5 text-xs">{t}</span>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
        {project.metrics.map((m) => (
          <span key={m.label} className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-primary" />{m.label}: <strong className="text-foreground">{m.value}</strong></span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <a href={project.demo} target="_blank" rel="noreferrer noopener" aria-label="Open live demo">
          <Button variant="outline" size="sm"><ExternalLink className="mr-2 h-4 w-4"/>Live</Button>
        </a>
        <a href={project.github} target="_blank" rel="noreferrer noopener" aria-label="Open GitHub repo">
          <Button variant="outline" size="sm"><Github className="mr-2 h-4 w-4"/>GitHub</Button>
        </a>
        <Button variant="secondary" size="sm" className="ml-auto" onClick={() => onOpen(project)} aria-label={`Open details for ${project.title}`}>Details</Button>
      </div>
    </motion.article>
  );
}
