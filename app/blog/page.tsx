import { getAllBlogPosts } from "@/lib/blog";
import BlogPage from "./blog-page";

export const revalidate = 3600; // Revalidate every hour

export default async function Page() {
  const posts = await getAllBlogPosts();
  
  return <BlogPage posts={posts} />;
}
