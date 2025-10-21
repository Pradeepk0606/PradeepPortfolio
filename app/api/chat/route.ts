import { NextRequest } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { question } = body as { question?: string };
  if (!process.env.OPENAI_API_KEY) {
    return new Response(JSON.stringify({ error: "Missing OPENAI_API_KEY" }), { status: 500 });
  }
  if (!question) {
    return new Response(JSON.stringify({ error: "Question is required" }), { status: 400 });
  }

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const system = `You are a helpful portfolio assistant for Pradeepkumar R. Answer concisely, referencing portfolio highlights when useful. Projects: Smart India Hackathon (AI anomaly detection, 94% accuracy); Internet Addiction Assessment Tool (12k users); FutureWell (RAG wellness assistant); Portfolio Revamp (Glassmorphism, >95 Lighthouse).`;

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: system },
      { role: "user", content: question },
    ],
    temperature: 0.4,
  });

  const answer = completion.choices[0]?.message?.content ?? "";
  return Response.json({ answer });
}
