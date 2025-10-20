import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongoose";
import Blog from "@/lib/db/models/Blog";
import { blogPosts } from "@/lib/blog-data";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // If no DB configured, serve from static data
    if (!process.env.MONGODB_URI) {
      const post = blogPosts.find((p) => p.slug === params.slug);
      if (!post) {
        return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
      }
      return NextResponse.json(post);
    }

    // DB-backed path
    await connectDB();
    const blog = await Blog.findOne({ slug: params.slug });
    if (!blog) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }
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
