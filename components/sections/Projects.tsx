"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, X, TrendingUp, Users, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { profileData } from "@/lib/data/profile";

const categories = ["All", "AI", "Web", "Blockchain", "Mobile"];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof profileData.projects[0] | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? profileData.projects
    : profileData.projects.filter(project => 
        project.category.includes(selectedCategory)
      );

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my best work and innovative solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                layout
              >
                <Card className="h-full card-hover group cursor-pointer overflow-hidden">
                  <div 
                    className="relative h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 overflow-hidden"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-white/10">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    {project.featured && (
                      <Badge className="absolute top-4 right-4">Featured</Badge>
                    )}
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="secondary">+{project.tech.length - 3}</Badge>
                      )}
                    </div>

                    <div className="flex gap-2 pt-2">
                      {project.github && project.github !== "#" && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block">
                          <Button size="sm" variant="outline">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        </a>
                      )}
                      <Button 
                        size="sm" 
                        onClick={() => setSelectedProject(project)}
                        className="flex-1"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-background border-b border-border p-6 flex justify-between items-start z-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.category.map((cat) => (
                        <Badge key={cat}>{cat}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="p-6 space-y-6">
                  {/* Hero Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <div className="text-8xl font-bold text-white/10">
                      {selectedProject.title.charAt(0)}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">About This Project</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Impact & Metrics */}
                  {selectedProject.impact && (
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Impact</h4>
                      <div className="flex items-center space-x-2 text-primary">
                        <TrendingUp className="h-5 w-5" />
                        <span className="font-medium">{selectedProject.impact}</span>
                      </div>
                    </div>
                  )}

                  {selectedProject.metrics && (
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(selectedProject.metrics).map(([key, value]) => (
                        <Card key={key}>
                          <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-primary mb-1">
                              {value}
                            </div>
                            <div className="text-sm text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    {selectedProject.github && selectedProject.github !== "#" && (
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button className="w-full">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </Button>
                      </a>
                    )}
                    {selectedProject.demo && selectedProject.demo !== "#" && (
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" className="w-full">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
