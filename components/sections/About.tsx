"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Briefcase, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { profileData } from "@/lib/data/profile";

const timelineData = [
  {
    year: "2023",
    title: "Started B.E. in Computer Science",
    description: "Began journey at SNS College of Engineering",
    icon: GraduationCap,
    type: "education",
  },
  {
    year: "2024",
    title: "Python Developer Intern",
    description: "Internpe - Built ML-based assessment tools",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "2024",
    title: "Hackfest Winner",
    description: "Won college-level hackathon",
    icon: Award,
    type: "achievement",
  },
  {
    year: "2025",
    title: "Full Stack Developer Intern",
    description: "MindFulAi - MERN Stack Development",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "Future",
    title: "Tech Entrepreneur",
    description: "Building a tech-driven unicorn startup",
    icon: Target,
    type: "goal",
  },
];

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey, experiences, and aspirations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-2xl font-bold text-gradient">Who I Am</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {profileData.summary}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Philosophy</h4>
                    <p className="text-muted-foreground italic">
                      "{profileData.philosophy}"
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Languages</h4>
                    <div className="flex gap-2">
                      {profileData.languages.map((lang) => (
                        <span
                          key={lang}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Hobbies</h4>
                    <ul className="space-y-1">
                      {profileData.hobbies.slice(0, 3).map((hobby) => (
                        <li key={hobby} className="text-muted-foreground text-sm flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {hobby}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Goals */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="glass-effect">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Long-term Goal</h4>
                    <p className="text-muted-foreground">{profileData.goals.longTerm}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Short-term Goal</h4>
                    <p className="text-muted-foreground">{profileData.goals.shortTerm}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-4">Strengths</h4>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.soft.slice(0, 6).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            My <span className="text-gradient">Journey</span>
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    {index % 2 === 0 && (
                      <Card className="inline-block card-hover">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                              <item.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                              <p className="text-sm text-primary font-semibold mb-1">
                                {item.year}
                              </p>
                              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full border-4 border-background">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <div className="flex-1 md:text-left md:pl-8 mt-4 md:mt-0">
                    {index % 2 !== 0 && (
                      <Card className="inline-block card-hover">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                              <item.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm text-primary font-semibold mb-1">
                                {item.year}
                              </p>
                              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
