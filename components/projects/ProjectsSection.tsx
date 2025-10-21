"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Filters, { Category } from "./Filters";
import ProjectCard, { Project } from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projectsData from "@/data/projects";

export default function ProjectsSection() {
  const [category, setCategory] = useState<Category>("All");
  const [active, setActive] = useState<Project | undefined>();

  const filtered = useMemo(() => {
    if (category === "All") return projectsData;
    return projectsData.filter((p) => p.category === category);
  }, [category]);

  return (
    <section id="projects" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-2 text-muted-foreground">Selected work across AI, Web, Blockchain, and IoT.</p>
      </div>

      <Filters value={category} onChange={setCategory} />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3"
      >
        {filtered.map((p) => (
          <motion.div key={p.id} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="mb-4 break-inside-avoid">
            <ProjectCard project={p} onOpen={setActive} />
          </motion.div>
        ))}
      </motion.div>

      <ProjectModal open={!!active} onClose={() => setActive(undefined)} project={active} />
    </section>
  );
}
