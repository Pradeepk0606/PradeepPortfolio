import { NextResponse } from 'next/server';
import { env } from '@/lib/env';

export const dynamic = 'force-dynamic';

const SHEET_BEST_URL = `https://api.sheetbest.com/sheets/${process.env.SHEET_BEST_ID}`;

export async function GET() {
  try {
    const response = await fetch(SHEET_BEST_URL, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch posts from SheetBest');
    }

    const data = await response.json();
    
    // Transform the data to match your BlogPost interface
    const posts = data.map((row: any, index: number) => ({
      _id: `sheet-${index + 1}`,
      title: row.title || 'Untitled Post',
      slug: row.slug || `post-${index + 1}`,
      excerpt: row.excerpt || row.content?.substring(0, 150) + '...' || '',
      coverImage: row.image || '/placeholder-blog.jpg',
      tags: row.tags ? row.tags.split(',').map((tag: string) => tag.trim()) : [],
      createdAt: row.date || new Date().toISOString(),
      views: Math.floor(Math.random() * 1000), // Random views for demo
      content: row.content || '',
    }));

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts from SheetBest:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}
