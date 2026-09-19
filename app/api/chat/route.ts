import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export const runtime = "nodejs";

const SYSTEM_INSTRUCTION = `You are the official AI Recruiter Assistant for PradeepKumar R.
Your role is to answer questions from hiring managers, engineering leads, and technical recruiters about Pradeep's background, technical skills, internship experience, and projects.

VERIFIED CANDIDATE PROFILE:
- Name: PradeepKumar R
- Role: Software Developer / Full Stack Developer
- Location: Coimbatore, Tamil Nadu, India
- Email: Pradeeprajamanickam1234@gmail.com
- GitHub: https://github.com/Pradeepk0606
- LinkedIn: https://www.linkedin.com/in/pradeepk143
- Target Opportunities: Open to Software Developer roles, Full-Stack internships, and engineering opportunities.
- Education: B.E. Computer Science & Engineering (2023–2027) at SNS College of Engineering. CGPA: 8.5/10. HSC: 81.83%.

5 VERIFIED INDUSTRY INTERNSHIPS:
1. GoNex Innovations (2026) – Full Stack Developer Intern
   Focus: Company web applications using MERN stack, REST APIs, MongoDB, responsive UI development, third-party integrations, Agile workflows, code reviews, and technical documentation.
2. MindFulAI (2025) – Full Stack Developer Intern
   Focus: AI-integrated full-stack application involving authentication, appointment scheduling, responsive dashboards, REST APIs, and third-party AI services.
3. Thiranex (2025) – Full Stack Developer Intern
   Focus: React frontend development, Node.js/Express backend development, REST APIs, debugging, performance optimization, and deployment.
4. Innovate Intern (2024) – Python Developer Intern
   Focus: Python automation applications, SQL databases, API integration, backend workflows, OOP, and code optimization.
5. InternPe (2024) – Python Developer Intern
   Focus: Python-based competency scoring application involving Python, SQL, APIs, and automated reports.

CORE FEATURED PROJECTS:
1. Bookit Now: Full-stack appointment booking application where users manage appointments and administrators review, approve, or reject appointment requests (React, JavaScript, Firebase, MERN).
2. AyurChainTrace: Digital platform focused on improving traceability and transparency of Ayurvedic herbs across the supply chain with geo-tagging, QR authentication, and multi-role dashboards (React, Node.js, MongoDB, AI, Blockchain concepts).
3. PathWise: AI-assisted career guidance platform designed to help students explore career paths, SWOT analysis, and personalized career roadmaps (AI, Python, Web Technologies).
4. MAC Portal: Smart hospital management platform for bed allocation, doctor scheduling, queue management, and analytics (React, Node.js, PostgreSQL, Python). Won 1st prize at SNS Hackfest.

ADDITIONAL PROJECTS:
Gonex Company Website, Gonex Digitals Website, LitLingua, Language Portal, Land Price Prediction System, Solar Panel Positioning System (Hardware Bootcamp Winner), Mini e-Sevai, Edutech Timesup.

CORE SKILLS:
- Languages: Python, JavaScript, TypeScript, Java, C
- Frontend: HTML, CSS, React.js
- Backend: Node.js, Express.js, REST APIs
- Databases: MongoDB, MySQL, PostgreSQL, Firebase
- Developer Tools: Git, GitHub, Docker, Figma
- AI: OpenAI APIs, Claude, LangChain, Hugging Face, Prompt Engineering, AI Workflow Automation

HONORS & ACHIEVEMENTS:
- Hackfest Intra-College Winner (MAC Portal)
- Arduino UNO Bootcamp Winner (Solar Panel Positioning System)
- Generative AI Bootcamp Intra-College Winner
- NPTEL Cloud Computing Certification

STRICT GUIDELINES:
- Be concise, objective, confident, and professional.
- Do NOT invent fake companies, fake metrics, fake users, or fake percentage improvements.
- Do NOT call Pradeep a "Senior Developer", "Architect", or "Lead Developer". He is an aspiring, dedicated Software Developer and CS Engineering student.
- If a recruiter asks about contacting or interviewing him, invite them to email him at Pradeeprajamanickam1234@gmail.com or download his resume from /resume.pdf.`;

function getRuleBasedFallback(question: string): string {
  const q = question.toLowerCase();
  if (q.includes("resume") || q.includes("cv")) {
    return "You can view and download Pradeep's official resume at /resume.pdf. It outlines his 5 verified internships, technical skills in MERN & Python, and academic credentials (8.5 CGPA).";
  }
  if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("hire")) {
    return "You can reach Pradeep directly via email at Pradeeprajamanickam1234@gmail.com or connect with him on LinkedIn at https://www.linkedin.com/in/pradeepk143. He is located in Coimbatore, India and actively open to software development opportunities.";
  }
  if (q.includes("experience") || q.includes("internship") || q.includes("company") || q.includes("work")) {
    return "Pradeep has completed 5 technical internships: GoNex Innovations (2026, Full Stack MERN), MindFulAI (2025, Full Stack & AI Integrations), Thiranex (2025, React & Node.js/Express), Innovate Intern (2024, Python & SQL Automation), and InternPe (2024, Python & Competency Scoring).";
  }
  if (q.includes("project") || q.includes("build") || q.includes("portfolio")) {
    return "Pradeep's 4 featured projects are: 1) Bookit Now (full-stack appointment booking with approval workflows), 2) AyurChainTrace (herb supply chain traceability with QR verification), 3) PathWise (AI career guidance platform), and 4) MAC Portal (smart hospital management system, 1st place Hackfest winner).";
  }
  if (q.includes("education") || q.includes("college") || q.includes("degree") || q.includes("cgpa")) {
    return "Pradeep is pursuing a B.E. in Computer Science & Engineering (2023–2027) at SNS College of Engineering with an 8.5 CGPA, with strong academic foundations in Data Structures, Algorithms, DBMS, and System Design.";
  }
  if (q.includes("stack") || q.includes("skill") || q.includes("technology") || q.includes("language")) {
    return "Pradeep's core stack includes Python, JavaScript, TypeScript, React.js, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, REST APIs, Git, Docker, and AI API integrations.";
  }
  return "PradeepKumar R is an aspiring Software Developer and Computer Science student (8.5 CGPA, SNS College of Engineering, Class of 2027). He has completed 5 internships in MERN and Python development, built practical applications like Bookit Now and MAC Portal, and is open to software development roles.";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { message, messages, complexity } = body as {
      message?: string;
      messages?: Array<{ role: "user" | "model" | "assistant"; content: string }>;
      complexity?: "fast" | "general" | "complex";
    };

    const userQuery = message || (messages && messages.length > 0 ? messages[messages.length - 1].content : "");

    if (!userQuery) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GEMINI_API_KEY;

    if (!apiKey) {
      // Return high-quality, verified rule-based response
      return NextResponse.json({
        reply: getRuleBasedFallback(userQuery),
        source: "local-verified"
      });
    }

    // Determine model based on guidelines
    let modelName = "gemini-3.8-flash";
    if (complexity === "fast") {
      modelName = "gemini-3.1-flash-lite";
    } else if (complexity === "complex") {
      modelName = "gemini-3.1-pro-preview";
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });

    // Format conversation history
    const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

    if (messages && messages.length > 0) {
      for (const m of messages) {
        const role = m.role === "assistant" || m.role === "model" ? "model" : "user";
        contents.push({
          role,
          parts: [{ text: m.content }]
        });
      }
    } else {
      contents.push({
        role: "user",
        parts: [{ text: userQuery }]
      });
    }

    const response = await ai.models.generateContent({
      model: modelName,
      contents: contents as any,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.4
      }
    });

    const reply = response.text || getRuleBasedFallback(userQuery);

    return NextResponse.json({ reply, model: modelName });
  } catch (error: any) {
    console.error("Gemini API error:", error?.message || error);
    const body = await req.json().catch(() => ({}));
    const userQuery = body?.message || "general question";
    return NextResponse.json({
      reply: getRuleBasedFallback(userQuery),
      fallback: true
    });
  }
}
