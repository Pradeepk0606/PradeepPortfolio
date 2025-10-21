"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function ChatWidget() {
  const [q, setQ] = useState("");
  const [a, setA] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function ask() {
    setLoading(true);
    setA(null);
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question: q }) });
      const data = await res.json();
      setA(data.answer ?? "");
    } catch (e) {
      setA("Something went wrong. Please try later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 w-80 rounded-2xl border border-border/60 bg-background p-4 shadow-xl">
      <h4 className="mb-2 text-sm font-semibold">Ask about my portfolio</h4>
      <textarea
        className="h-20 w-full resize-none rounded-md border bg-background p-2 text-sm outline-none focus:ring-2 focus:ring-primary/50"
        placeholder="Ask a question..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Question"
      />
      <div className="mt-2 flex items-center justify-between">
        <Button size="sm" onClick={ask} disabled={loading || !q.trim()} aria-label="Send question">
          {loading ? "Thinking..." : "Send"}
        </Button>
        <span className="text-xs text-muted-foreground">Powered by OpenAI</span>
      </div>
      {a && <p className="mt-3 text-sm text-muted-foreground whitespace-pre-wrap" aria-live="polite">{a}</p>}
    </div>
  );
}
