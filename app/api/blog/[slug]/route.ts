import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongoose";
import Blog from "@/lib/db/models/Blog";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB();
    const blog = await Blog.findOne({ slug: params.slug });

    if (!blog) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}
