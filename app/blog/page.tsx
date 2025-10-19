"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
  createdAt: string;
  views: number;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      // Fetch from both APIs in parallel
      const [dbResponse, sheetResponse] = await Promise.all([
        fetch("/api/blog?published=true"),
        fetch("/api/sheet-posts")
      ]);

      let dbBlogs = [];
      let sheetBlogs = [];
      let errors = [];

      // Process database response
      if (dbResponse.ok) {
        dbBlogs = await dbResponse.json();
      } else {
        errors.push("Failed to load database posts");
      }

      // Process SheetBest response
      if (sheetResponse.ok) {
        sheetBlogs = await sheetResponse.json();
      } else {
        errors.push("Failed to load external posts");
      }

      // Combine both sources
      const allBlogs = [...dbBlogs, ...sheetBlogs];
      
      // Sort by date (newest first)
      allBlogs.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setBlogs(allBlogs);
      
      if (errors.length > 0) {
        console.error("Partial data loaded with errors:", errors);
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Thoughts, tutorials, and insights on web development, technology, and more
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </motion.div>

        {/* Blog Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="loader mx-auto" />
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">
              {searchTerm ? "No articles found matching your search." : "No blog posts yet. Check back soon!"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full card-hover group">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-t-lg flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/10">
                      {blog.title.charAt(0)}
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        5 min read
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {blog.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {blog.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="ghost" className="w-full group/btn">
                      <Link href={`/blog/${blog.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
