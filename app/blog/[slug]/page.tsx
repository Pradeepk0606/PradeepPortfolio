"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import ReactMarkdown from "react-markdown";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  views: number;
  likes: number;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const fetchBlog = async () => {
    try {
      // Try to fetch from the database first
      const dbResponse = await fetch(`/api/blog/${slug}`);
      
      if (dbResponse.ok) {
        const data = await dbResponse.json();
        setBlog(data);
        setLoading(false);
        return;
      }
      
      // If not found in database, try fetching from SheetBest
      const sheetResponse = await fetch(`/api/sheet-posts/${slug}`);
      
      if (sheetResponse.ok) {
        const data = await sheetResponse.json();
        setBlog(data);
      } else {
        console.error("Blog post not found in either source");
      }
    } catch (error) {
      console.error("Failed to fetch blog:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="loader" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link href="/blog" className="flex items-center">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="ghost" className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              5 min read
            </div>
            <div className="flex items-center">
              <Eye className="h-5 w-5 mr-2" />
              {blog.views} views
            </div>
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                className="gap-2 flex items-center"
                onClick={() => console.log('Like button clicked')}
                disabled={false}
              >
                <Heart
                  className={`h-5 w-5 text-foreground`}
                />
                {blog.likes}
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {blog.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <div className="h-64 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg mb-8 flex items-center justify-center">
            <div className="text-8xl font-bold text-white/10">
              {blog.title.charAt(0)}
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
