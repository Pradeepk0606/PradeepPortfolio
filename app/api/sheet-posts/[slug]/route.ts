import { NextResponse } from 'next/server';

const SHEET_BEST_URL = `https://api.sheetbest.com/sheets/69db8261-4b92-424e-ad16-e5f0ae7f53e8`;

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const response = await fetch(SHEET_BEST_URL);
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts from SheetBest');
    }

    const data = await response.json();
    
    // Find the post with the matching slug
    const post = data.find((p: any) => 
      (p.slug || '').toLowerCase() === params.slug.toLowerCase()
    );

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Transform the data to match your BlogPost interface
    const formattedPost = {
      _id: `sheet-${post.slug || post.title?.replace(/\s+/g, '-').toLowerCase()}`,
      title: post.title || 'Untitled Post',
      slug: post.slug || post.title?.replace(/\s+/g, '-').toLowerCase(),
      content: post.content || '',
      tags: post.tags ? post.tags.split(',').map((tag: string) => tag.trim()) : [],
      createdAt: post.date || new Date().toISOString(),
      views: Math.floor(Math.random() * 1000), // Random views for demo
      likes: Math.floor(Math.random() * 100), // Random likes for demo
    };

    return NextResponse.json(formattedPost);
  } catch (error) {
    console.error('Error fetching post from SheetBest:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}
