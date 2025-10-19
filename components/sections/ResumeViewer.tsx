"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download, Eye, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function ResumeViewer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            View or download my complete resume
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="group">
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              Download PDF
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Eye className="mr-2 h-4 w-4" />
              View Online
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-0">
              {/* Resume PDF Viewer */}
              <div className="relative w-full" style={{ height: "800px" }}>
                <iframe
                  src="/resume/Pradeepkumar_R_Resume.pdf"
                  className="w-full h-full border-0 rounded-lg"
                  title="Resume PDF"
                />
                {/* Fallback if PDF doesn't load */}
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/50 backdrop-blur-sm pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                  <div className="text-center p-8 bg-background rounded-lg shadow-lg pointer-events-auto">
                    <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Resume Preview</h3>
                    <p className="text-muted-foreground mb-4">
                      Place your resume PDF at: <br />
                      <code className="text-sm bg-secondary px-2 py-1 rounded">
                        /public/resume/Pradeepkumar_R_Resume.pdf
                      </code>
                    </p>
                    <a href="/resume/Pradeepkumar_R_Resume.pdf" download className="inline-block">
                      <Button>
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {[
            { label: "Years Experience", value: "2+" },
            { label: "Projects Completed", value: "10+" },
            { label: "Technologies", value: "20+" },
            { label: "Certifications", value: "5+" },
          ].map((stat, index) => (
            <Card key={stat.label} className="text-center card-hover">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
