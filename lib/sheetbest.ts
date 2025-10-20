export type SheetBestPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: string;
  tags?: string[];
  createdAt?: string;
  views?: number;
  content?: string;
};

const DEFAULT_SHEET_ID = "69db8261-4b92-424e-ad16-e5f0ae7f53e8";

export async function fetchSheetBestPosts(signal?: AbortSignal): Promise<SheetBestPost[]> {
  const id = process.env.SHEET_BEST_ID || DEFAULT_SHEET_ID;
  const url = `https://api.sheetbest.com/sheets/${id}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(url, {
      signal: signal ?? controller.signal,
      // Let Next.js cache on server when used there
      next: { revalidate: 300 },
      headers: { 'accept': 'application/json' },
    } as any);

    if (!res.ok) throw new Error(`SheetBest HTTP ${res.status}`);
    const data = await res.json();

    const posts: SheetBestPost[] = (data || []).map((row: any, index: number) => ({
      _id: row._id || `sheet-${index + 1}`,
      title: row.title || 'Untitled Post',
      slug: row.slug || `post-${index + 1}`,
      excerpt: row.excerpt || (row.content ? String(row.content).slice(0, 150) + '...' : ''),
      coverImage: row.image || '/placeholder-blog.jpg',
      tags: row.tags ? String(row.tags).split(',').map((t: string) => t.trim()).filter(Boolean) : [],
      createdAt: row.date || new Date().toISOString(),
      views: Number.isFinite(Number(row.views)) ? Number(row.views) : Math.floor(Math.random() * 1000),
      content: row.content || '',
    }));

    return posts;
  } catch (err) {
    console.error('SheetBest fetch error:', err);
    return [];
  } finally {
    clearTimeout(timeout);
  }
}
