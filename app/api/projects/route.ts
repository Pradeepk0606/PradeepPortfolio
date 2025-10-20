import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongoose";
import Project from "@/lib/db/models/Project";
import { profileData } from "@/lib/data/profile";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    // If DB not configured, serve static projects
    if (!process.env.MONGODB_URI) {
      const { searchParams } = new URL(req.url);
      const category = searchParams.get("category");
      let projects = profileData.projects;
      if (category && category !== "All") {
        projects = projects.filter((p) => p.category?.includes(category));
      }
      return NextResponse.json(projects);
    }
    await connectDB();
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    let query = {};
    if (category && category !== "All") {
      query = { category: category };
    }

    const projects = await Project.find(query).sort({ createdAt: -1 });
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { error: "Database not configured" },
        { status: 503 }
      );
    }
    await connectDB();
    const data = await req.json();
    const project = await Project.create(data);
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
