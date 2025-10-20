import { NextResponse } from 'next/server';
import { getBlogPost, getAllBlogPosts } from '@/lib/blog';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    // If slug is provided, return a single blog post
    if (slug) {
      const post = await getBlogPost(slug);
      if (!post) {
        return new Response(
          JSON.stringify({ error: 'Blog post not found' }), 
          { status: 404, headers: getCorsHeaders() }
        );
      }
      return new Response(JSON.stringify({ post }), { 
        status: 200, 
        headers: getCorsHeaders() 
      });
    }

    // Otherwise, return all blog posts
    const posts = await getAllBlogPosts();
    return new Response(JSON.stringify({ posts }), { 
      status: 200, 
      headers: getCorsHeaders() 
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }), 
      { status: 500, headers: getCorsHeaders() }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: getCorsHeaders()
  });
}

function getCorsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json',
    'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
  };
}
