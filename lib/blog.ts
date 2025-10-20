import { BlogPost } from "@/types/blog";
import { blogPosts } from "./blog-data";

// Server-side data fetching
let cachedPosts: BlogPost[] | null = null;

async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  if (cachedPosts) {
    return cachedPosts;
  }
  
  // In a real app, you would fetch from your database or API
  // Example:
  // const res = await fetch('http://localhost:3000/api/blog');
  // const data = await res.json();
  // return data.posts;
  
  // For now, using static data
  cachedPosts = blogPosts;
  return blogPosts;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    return await fetchAllBlogPosts();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await fetchAllBlogPosts();
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error);
    return null;
  }
}

// For server-side data revalidation
export const revalidate = 3600; // Revalidate every hour
