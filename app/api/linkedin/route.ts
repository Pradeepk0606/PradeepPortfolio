import { NextResponse } from "next/server";

// SheetBest JSON endpoint used as the LinkedIn feed source
// Configure via SHEETBEST_URL; will fallback to a default if not set.
export async function GET() {
  try {
    const sheetUrl =
      process.env.SHEETBEST_URL ||
      "https://api.sheetbest.com/sheets/69db8261-4b92-424e-ad16-e5f0ae7f53e8";

    const response = await fetch(sheetUrl, {
      next: { revalidate: 900 }, // Cache 15 minutes
    });

    if (!response.ok) {
      throw new Error(`SheetBest request failed: ${response.status}`);
    }

    const rows = await response.json();

    // Expected columns (flexible): id, text, createdAt, url, likes, comments, shares
    // If not present, we will derive sensible defaults.
    const posts = (Array.isArray(rows) ? rows : []).map((r: any, idx: number) => {
      const urlRaw = r.url || r.link || r.permalink || "#";
      const id = r.id || r.ID || urlRaw || `${Date.now()}-${idx}`;
      let text = r.text || r.content || r.message || "";
      if (!text && urlRaw && urlRaw !== "#") {
        try {
          const u = new URL(urlRaw);
          text = `LinkedIn post: ${u.pathname.split("/").filter(Boolean).slice(-1)[0] || u.host}`;
        } catch {
          text = "LinkedIn post";
        }
      }
      const createdAtRaw = r.createdAt || r.date || r.timestamp || new Date().toISOString();
      const createdAt = new Date(createdAtRaw).toString() === "Invalid Date"
        ? new Date().toISOString()
        : new Date(createdAtRaw).toISOString();
      const url = urlRaw;
      const likes = Number(r.likes || r.reactions || 0) || 0;
      const comments = Number(r.comments || 0) || 0;
      const shares = Number(r.shares || 0) || 0;
      return { id, text, createdAt, url, likes, comments, shares };
    });

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("SheetBest LinkedIn error:", error);
    return NextResponse.json(
      { error: "Failed to fetch LinkedIn posts", posts: [] },
      { status: 200 }
    );
  }
}
