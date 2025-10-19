"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Pradeep's AI assistant. Ask me anything about his skills, projects, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const quickQuestions = [
    "What are your skills?",
    "Tell me about your projects",
    "What's your experience?",
    "How can I contact you?",
  ];

  const handleSend = async (message?: string) => {
    const userMessage = message || input;
    if (!userMessage.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const response = generateResponse(userMessage);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  const generateResponse = (question: string): string => {
    const q = question.toLowerCase();

    if (q.includes("skill")) {
      return "I'm proficient in MERN Stack (MongoDB, Express.js, React.js, Node.js), Python, Java, and JavaScript. I also work with databases like MySQL and MongoDB, and tools like Git, Figma, and Firebase.";
    } else if (q.includes("project")) {
      return "I've built several impactful projects including a Smart Competency Diagnostic tool, a Hospital Management System with predictive analytics, and a Blockchain-based Herbal Traceability System. Check out the Projects section for more details!";
    } else if (q.includes("experience") || q.includes("internship")) {
      return "I've completed internships at MindFulAi as a Full Stack Developer and at Internpe as a Python Developer. I've worked on MERN stack applications, ML-based tools, and authentication systems.";
    } else if (q.includes("contact") || q.includes("reach")) {
      return "You can reach me at Pradeeprajamanickam1234@gmail.com or call me at +91 9360541675. I'm also available on LinkedIn and GitHub!";
    } else if (q.includes("education")) {
      return "I'm currently pursuing B.E. in Computer Science at SNS College of Engineering with a CGPA of 8.50. I completed my HSC with 81.83%.";
    } else {
      return "That's an interesting question! Feel free to explore my portfolio sections for detailed information, or ask me something specific about my skills, projects, or experience.";
    }
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
                        <p className="text-sm">{message.content}</p>
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
                {messages.length === 1 && (
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
                )}

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
