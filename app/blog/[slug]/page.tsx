import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

// Revalidation time in seconds (1 hour)
const REVALIDATION_TIME = 3600;

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const posts = await getAllBlogPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Generate metadata for better SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Pradeep Kumar',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} - Pradeep Kumar`,
    description: post.excerpt || 'Read this blog post on Pradeep Kumar\'s blog',
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      type: 'article',
      publishedTime: post.createdAt,
      authors: ['Pradeep Kumar'],
    },
  };
}

export const revalidate = REVALIDATION_TIME;

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  let post;

  try {
    // In production, try to fetch from API first
    if (process.env.NODE_ENV === 'production') {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blog?slug=${slug}`, 
        { next: { revalidate: REVALIDATION_TIME } }
      );
      
      if (response.ok) {
        const data = await response.json();
        post = data.post;
      }
    }
    
    // If post not found via API or in development, try direct data fetching
    if (!post) {
      post = await getBlogPost(slug);
    }
  } catch (error) {
    console.error('Error fetching blog post:', error);
    post = await getBlogPost(slug);
  }

  if (!post) {
    notFound();
  }

  const formattedDate = format(parseISO(post.createdAt), 'MMMM d, yyyy');
  const readTime = Math.ceil(post.content.split(/\s+/).length / 200);

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
          {post.coverImage && (
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={1200}
                height={630}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          )}
          
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              {post.author?.avatar && (
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <div>
                <p className="font-medium text-foreground">
                  {post.author?.name || 'Anonymous'}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{formattedDate}</span>
                  <span>•</span>
                  <Clock className="h-4 w-4" />
                  <span>{readTime} min read</span>
                  <span>•</span>
                  <Eye className="h-4 w-4" />
                  <span>{post.views || 0} views</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {(post.tags || []).map((tag: string) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div className="prose dark:prose-invert max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <Link href="/blog">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="gap-1">
                  <Heart className="h-4 w-4" />
                  <span>{post.likes || 0}</span>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
