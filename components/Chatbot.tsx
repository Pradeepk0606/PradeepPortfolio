"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { profileData } from "@/lib/data/profile";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I’m Pradeep’s portfolio assistant. Ask me about his summary, skills, projects, education, achievements/certificates, or contact info. I can only answer questions related to Pradeep’s portfolio.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const quickQuestions = [
    "Overview",
    "Show skills",
    "List projects",
    "Education details",
    "How to contact?",
  ];

  const handleSend = async (message?: string) => {
    const userMessage = message || input;
    if (!userMessage.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsLoading(true);

    // Simulated deterministic response based on portfolio data only
    setTimeout(() => {
      const base = generateResponse(userMessage);
      const followUp =
        "\n\nWhat would you like to explore next? You can ask: Overview, Show skills, List projects, Education details, How to contact?";
      const response = `${base}${followUp}`;
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsLoading(false);
    }, 400);
  };

  const generateResponse = (question: string): string => {
    const q = question.toLowerCase();

    // Overview: compile full template in one reply
    if (q.includes("overview") || q.includes("all details") || q.includes("full details")) {
      const about = profileData.summary.trim();
      const prog = profileData.skills.programming.map((s) => s.name).join(", ");
      const web = profileData.skills.web.map((s) => s.name).join(", ");
      const db = profileData.skills.database.map((s) => s.name).join(", ");
      const tools = profileData.skills.tools.map((s) => s.name).join(", ");
      const soft = profileData.skills.soft.join(", ");
      const projects = profileData.projects
        .map((p, i) => `${i + 1}. ${p.title} – ${p.description}`)
        .join("\n");
      const education = profileData.education
        .map((e) => `${e.degree}, ${e.institution} (${e.period})${e.grade ? ` – ${e.grade}` : ""}`)
        .join("\n");
      const certs = profileData.certifications
        .map((c) => `${c.title} – ${c.issuer} (${c.date})`)
        .join("\n");
      const ach = profileData.achievements
        .map((a) => `${a.title} – ${a.organization} (${a.date})`)
        .join("\n");
      const email = profileData.personal.email;
      const linkedin = profileData.social.linkedin;
      const github = profileData.social.github;

      return [
        `ABOUT\n${about}`,
        `SKILLS\nTechnical: ${prog}\nWeb: ${web}\nDatabase: ${db}\nTools: ${tools}\nSoft skills: ${soft}`,
        `PROJECTS\n${projects || "No projects available right now."}`,
        `EDUCATION\n${education || "No education info available."}`,
        `ACHIEVEMENTS / CERTIFICATES\nCertificates:\n${certs || "-"}\n\nAchievements:\n${ach || "-"}`,
        `CONTACT\nEmail – ${email}\nLinkedIn – ${linkedin}\nGitHub – ${github}`,
      ].join("\n\n");
    }

    // About/Summary
    if (q.includes("about") || q.includes("summary")) {
      return profileData.summary.trim();
    }

    // Skills
    if (q.includes("skill") || q === "show skills") {
      const prog = profileData.skills.programming.map((s) => s.name).join(", ");
      const web = profileData.skills.web.map((s) => s.name).join(", ");
      const db = profileData.skills.database.map((s) => s.name).join(", ");
      const tools = profileData.skills.tools.map((s) => s.name).join(", ");
      const soft = profileData.skills.soft.join(", ");
      return `Technical: ${prog}. Web: ${web}. DB: ${db}. Tools: ${tools}. Soft skills: ${soft}.`;
    }

    // Projects
    if (q.includes("project") || q === "list projects") {
      const list = profileData.projects
        .map((p, i) => `${i + 1}. ${p.title} – ${p.description}`)
        .join("\n");
      return list || "No projects available right now.";
    }

    // Education
    if (q.includes("education") || q.includes("degree")) {
      const list = profileData.education
        .map((e) => `${e.degree}, ${e.institution} (${e.period})${e.grade ? ` – ${e.grade}` : ""}`)
        .join("\n");
      return list || "No education info available.";
    }

    // Achievements / Certifications
    if (q.includes("achievement") || q.includes("certificate") || q.includes("certification")) {
      const certs = profileData.certifications
        .map((c) => `${c.title} – ${c.issuer} (${c.date})`)
        .join("\n");
      const ach = profileData.achievements
        .map((a) => `${a.title} – ${a.organization} (${a.date})`)
        .join("\n");
      const combined = [certs && `Certificates:\n${certs}`, ach && `Achievements:\n${ach}`]
        .filter(Boolean)
        .join("\n\n");
      return combined || "No achievements or certificates listed.";
    }

    // Contact / Connect
    if (q.includes("contact") || q.includes("connect") || q.includes("reach") || q === "how to contact?") {
      const email = profileData.personal.email;
      const linkedin = profileData.social.linkedin;
      const github = profileData.social.github;
      return `You can reach Pradeep via email: ${email}. LinkedIn: ${linkedin}. GitHub: ${github}.`;
    }

    // Internships / Experience (from data)
    if (q.includes("internship") || q.includes("experience")) {
      const list = profileData.internships
        .map((i) => `${i.company} – ${i.role} (${i.period}, ${i.duration})`)
        .join("\n");
      return list || "No internships listed.";
    }

    // Fallback strictly
    return "I can only answer questions related to Pradeep’s portfolio.";
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg hover:shadow-xl transition-all ${
          isOpen ? "hidden" : "flex"
        } items-center justify-center group`}
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <Card className="shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-white">AI Assistant</CardTitle>
                      <Badge variant="secondary" className="text-xs">Online</Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                {/* Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        <p className={`text-sm ${message.role === "assistant" ? "whitespace-pre-wrap" : ""}`}>{message.content}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-secondary rounded-lg p-3">
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Questions */}
                <div className="px-4 pb-3 space-y-2">
                  <p className="text-xs text-muted-foreground">Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((question) => (
                      <Button
                        key={question}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSend(question)}
                        className="text-xs"
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="p-4 border-t">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSend();
                    }}
                    className="flex gap-2"
                  >
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask me anything..."
                      disabled={isLoading}
                    />
                    <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
