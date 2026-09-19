import { NextResponse } from 'next/server';
import { env } from '@/lib/env';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    if (!env.SHEET_BEST_ID) {
      // Return empty array if no sheet ID is configured
      return NextResponse.json([]);
    }

    const SHEET_BEST_URL = `https://api.sheetbest.com/sheets/${env.SHEET_BEST_ID}`;
    
    const response = await fetch(SHEET_BEST_URL, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching posts:', error);
    // Return empty array on error
    return NextResponse.json([]);
  }
}
