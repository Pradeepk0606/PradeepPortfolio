import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongoose";
import Project from "@/lib/db/models/Project";

export async function GET(req: NextRequest) {
  try {
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
