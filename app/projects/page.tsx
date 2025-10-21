import dynamic from "next/dynamic";

const ProjectsSection = dynamic(() => import("@/components/projects/ProjectsSection"), { ssr: false });

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return <ProjectsSection />;
}
