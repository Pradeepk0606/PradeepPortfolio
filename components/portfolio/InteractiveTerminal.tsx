"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from "lucide-react";

interface CommandLog {
  cmd: string;
  output: string | string[];
}

export function InteractiveTerminal() {
  const [history, setHistory] = useState<CommandLog[]>([
    { cmd: "whoami", output: "Software Developer · Full Stack Developer" },
    { cmd: "stack", output: "Python · React.js · Node.js · Express.js · SQL · MongoDB · REST APIs" },
    { cmd: "focus", output: "Full-Stack Development, High-Performance APIs, and Practical Systems" },
    { cmd: "status", output: "Building → Learning → Improving" }
  ]);

  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const availableCommands: Record<string, string | string[]> = {
    whoami: "PradeepKumar R — Software Developer & Full Stack Developer from Coimbatore, India.",
    stack: "React.js, Node.js, Express.js, Python, JavaScript, TypeScript, SQL, MongoDB, REST APIs.",
    focus: "Building practical web applications, solving real engineering challenges, and continuous improvement.",
    status: "Open to Software Development Opportunities, Internships, and Technical Collaborations.",
    location: "Coimbatore, Tamil Nadu, India.",
    education: "B.E. Computer Science & Engineering (2023–2027) | CGPA: 8.5.",
    contact: "Email: Pradeeprajamanickam1234@gmail.com | GitHub: github.com/Pradeepk0606 | LinkedIn: linkedin.com/in/pradeepk143",
    help: "Available commands: whoami, stack, focus, status, location, education, contact, clear"
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = inputVal.trim().toLowerCase();
    if (!clean) return;

    if (clean === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    const res = availableCommands[clean] || `Command not recognized: '${clean}'. Type 'help' for available commands.`;
    setHistory((prev) => [...prev, { cmd: clean, output: res }]);
    setInputVal("");
  };

  const handlePresetClick = (cmd: string) => {
    const res = availableCommands[cmd];
    setHistory((prev) => [...prev, { cmd, output: res }]);
  };

  return (
    <section className="apple-terminal-section section-dark">
      <div className="apple-container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="apple-eyebrow">INTERACTIVE CONSOLE</div>
          <h2 className="apple-section-headline">Terminal experience.</h2>
          <p className="apple-section-subheadline" style={{ margin: "0 auto" }}>
            Explore developer state directly via the command line interface.
          </p>
        </div>

        <div className="apple-terminal-window">
          {/* Window Header */}
          <div className="terminal-header">
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span className="window-dot red" />
              <span className="window-dot yellow" />
              <span className="window-dot green" />
            </div>

            <div className="terminal-title-center">
              pradeepkumar@developer:~
            </div>

            <div style={{ marginLeft: "auto" }}>
              <TerminalIcon size={14} color="#86868B" />
            </div>
          </div>

          {/* Terminal Body */}
          <div className="terminal-body">
            {history.map((item, idx) => (
              <div key={idx} style={{ marginBottom: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span className="terminal-prompt">pradeepkumar@developer:~$</span>
                  <span className="terminal-cmd">{item.cmd}</span>
                </div>
                <div className="terminal-output" style={{ marginTop: "0.25rem" }}>
                  {item.output}
                </div>
              </div>
            ))}

            {/* Active Command Input Line */}
            <form onSubmit={handleCommandSubmit} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
              <span className="terminal-prompt">pradeepkumar@developer:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help', 'stack', 'contact'..."
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.9375rem",
                  color: "#FFFFFF",
                  flex: 1
                }}
              />
              <span className="terminal-cursor" />
            </form>
          </div>

          {/* Preset Commands Bar */}
          <div style={{ background: "#0B0B0E", borderTop: "1px solid rgba(255, 255, 255, 0.08)", padding: "0.75rem 1.5rem", display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "11px", color: "var(--color-silver-dark)", fontFamily: "var(--font-mono)" }}>Quick commands:</span>
            {["whoami", "stack", "focus", "status", "contact", "help"].map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={() => handlePresetClick(cmd)}
                style={{
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "4px",
                  padding: "2px 8px",
                  fontSize: "11px",
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-silver-light)",
                  cursor: "pointer"
                }}
              >
                ${cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
