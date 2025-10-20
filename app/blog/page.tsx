import { getAllBlogPosts } from "@/lib/blog";
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/types/blog';

// Revalidate every hour
const REVALIDATION_TIME = 3600;

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata = {
  title: 'Blog - Pradeep Kumar',
  description: 'Thoughts, tutorials, and insights on web development and design.',
};

export const revalidate = REVALIDATION_TIME;

export default async function BlogListPage() {
  let posts;
  
  try {
    // In production, use the API endpoint
    if (process.env.NODE_ENV === 'production') {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blog`, {
        next: { revalidate: REVALIDATION_TIME }
      });
      
      if (response.ok) {
        const data = await response.json();
        posts = data.posts || [];
      } else {
        throw new Error('Failed to fetch blog posts from API');
      }
    } else {
      // In development, use direct data fetching
      posts = await getAllBlogPosts();
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Fallback to direct data fetching if API fails
    posts = await getAllBlogPosts();
  }
  
  if (!posts || posts.length === 0) {
    notFound();
  }
  
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-12 text-center">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-muted-foreground">
            Thoughts, tutorials, and insights on web development and design.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post: BlogPost) => (
            <article
              key={post._id}
              className="group relative p-6 rounded-lg border hover:bg-accent/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <time dateTime={post.createdAt}>
                      {new Date(post.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.views || 0} views</span>
                  </div>
                  <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`} className="absolute inset-0">
                      <span className="sr-only">Read {post.title}</span>
                    </Link>
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {(post.tags || []).map((tag: string) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
