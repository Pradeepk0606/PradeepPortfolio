import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import ReactMarkdown from "react-markdown";

// This function tells Next.js which paths to pre-render at build time
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Revalidate this page every hour
export const revalidate = 3600;

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const blog = await getBlogPost(slug);

  if (!blog) {
    notFound();
  }

  // Format the date
  const formattedDate = format(new Date(blog.createdAt), 'MMMM d, yyyy');
  
  // Calculate read time
  const readTime = Math.ceil(blog.content.split(/\s+/).length / 200);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <div className="flex items-center text-sm text-muted-foreground mb-6">
              <div className="flex items-center mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                {formattedDate}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {readTime} min read
              </div>
            </div>
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          <div className="prose dark:prose-invert max-w-none">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}
