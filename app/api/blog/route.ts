import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongoose";
import Blog from "@/lib/db/models/Blog";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const published = searchParams.get("published");

    let query = {};
    if (published === "true") {
      query = { published: true };
    }

    const blogs = await Blog.find(query).sort({ createdAt: -1 });
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const data = await req.json();
    const blog = await Blog.create(data);
    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
