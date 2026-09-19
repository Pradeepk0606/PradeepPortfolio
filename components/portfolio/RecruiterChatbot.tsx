"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, RefreshCw, Bot, User, ArrowUpRight } from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "welcome-1",
    role: "assistant",
    content:
      "Hello! I am Pradeep's AI Recruiter Assistant, powered by Gemini. You can ask me about his 5 verified internships, technical stack (MERN & Python), real-world projects, or academic background at SNS College of Engineering.",
    timestamp: "Just now"
  }
];

const SUGGESTED_QUESTIONS = [
  "Summarize 5 internships",
  "What is his core tech stack?",
  "Tell me about Bookit Now",
  "Tell me about MAC Portal",
  "Education & CGPA",
  "How to contact Pradeep?"
];

export function RecruiterChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputVal, setInputVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputVal).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInputVal("");
    setIsLoading(true);

    try {
      const payload = {
        messages: nextMessages.map((m) => ({
          role: m.role,
          content: m.content
        }))
      };

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      const replyText = data.reply || "Thank you for inquiring. Pradeep is an aspiring Software Developer specializing in full-stack and Python development.";

      const assistantMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: "assistant",
          content:
            "Pradeep has completed 5 technical internships (GoNex, MindFulAI, Thiranex, Innovate Intern, InternPe) and builds practical software across MERN, Python, and SQL. Feel free to download his resume at /resume.pdf or email him directly at Pradeeprajamanickam1234@gmail.com.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="recruiter-chat-trigger-wrapper">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`recruiter-chat-trigger ${isOpen ? "active" : ""}`}
          aria-label={isOpen ? "Close AI Recruiter Assistant" : "Open AI Recruiter Assistant"}
          aria-expanded={isOpen}
        >
          <div className="trigger-pulse" />
          <div className="trigger-content">
            <Sparkles size={16} className="trigger-sparkle-icon" />
            <span className="trigger-label">Recruiter AI</span>
          </div>
        </button>
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="recruiter-chat-modal" role="dialog" aria-label="AI Recruiter Chat">
          {/* Header */}
          <div className="chat-modal-header">
            <div className="chat-header-info">
              <div className="chat-header-avatar">
                <Bot size={16} color="#0071E3" />
              </div>
              <div>
                <div className="chat-header-title">
                  <span>Recruiter Assistant</span>
                  <span className="chat-model-tag">Gemini 3.8 Flash</span>
                </div>
                <div className="chat-header-sub">
                  <span className="online-indicator" />
                  Verified candidate data
                </div>
              </div>
            </div>

            <div className="chat-header-actions">
              <button
                type="button"
                onClick={handleResetChat}
                className="chat-icon-btn"
                title="Reset conversation"
                aria-label="Reset conversation"
              >
                <RefreshCw size={14} />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="chat-icon-btn"
                title="Close chat"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Quick Filter Questions */}
          <div className="chat-quick-chips">
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                type="button"
                className="chat-chip"
                onClick={() => handleSendMessage(q)}
                disabled={isLoading}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages Scroll Area */}
          <div className="chat-messages-container" ref={scrollRef}>
            {messages.map((m) => (
              <div
                key={m.id}
                className={`chat-bubble-row ${m.role === "user" ? "user-row" : "bot-row"}`}
              >
                {m.role === "assistant" && (
                  <div className="bubble-avatar bot-avatar">
                    <Bot size={12} color="#0071E3" />
                  </div>
                )}
                <div className={`chat-bubble ${m.role === "user" ? "user-bubble" : "bot-bubble"}`}>
                  <div className="bubble-text">{m.content}</div>
                  <div className="bubble-time">{m.timestamp}</div>
                </div>
                {m.role === "user" && (
                  <div className="bubble-avatar user-avatar">
                    <User size={12} color="#FFFFFF" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="chat-bubble-row bot-row">
                <div className="bubble-avatar bot-avatar">
                  <Bot size={12} color="#0071E3" />
                </div>
                <div className="chat-bubble bot-bubble loading-bubble">
                  <span className="dot-typing" />
                  <span className="dot-typing" />
                  <span className="dot-typing" />
                </div>
              </div>
            )}
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="chat-input-form"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask about internships, stack, or projects..."
              className="chat-text-input"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputVal.trim()}
              className="chat-send-btn"
              aria-label="Send query"
            >
              <Send size={15} />
            </button>
          </form>

          {/* Quick CTA Sub-footer */}
          <div className="chat-subfooter">
            <span>Direct contact: Pradeeprajamanickam1234@gmail.com</span>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="chat-resume-link">
              <span>Resume</span>
              <ArrowUpRight size={11} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
