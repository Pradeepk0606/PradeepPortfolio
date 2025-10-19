import { BlogPost } from "@/types/blog";

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog`);
    if (!res.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    return await res.json();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/${slug}`);
    if (!res.ok) {
      throw new Error('Failed to fetch blog post');
    }
    return await res.json();
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error);
    return null;
  }
}
