import { NextResponse } from "next/server";

export async function GET() {
  try {
    const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;

    if (!accessToken) {
      return NextResponse.json(
        { error: "LinkedIn not configured", posts: [] },
        { status: 200 }
      );
    }

    // Fetch LinkedIn posts
    const response = await fetch(
      "https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(urn:li:person:YOUR_PERSON_ID)&sortBy=LAST_MODIFIED&count=5",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "X-Restli-Protocol-Version": "2.0.0",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch LinkedIn posts");
    }

    const data = await response.json();

    // Transform LinkedIn data
    const posts = data.elements?.map((post: any) => ({
      id: post.id,
      text: post.specificContent?.["com.linkedin.ugc.ShareContent"]?.shareCommentary?.text || "",
      createdAt: new Date(post.created.time).toISOString(),
      url: `https://www.linkedin.com/feed/update/${post.id}`,
      likes: post.numLikes || 0,
      comments: post.numComments || 0,
      shares: post.numShares || 0,
    })) || [];

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("LinkedIn API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch LinkedIn posts", posts: [] },
      { status: 200 }
    );
  }
}
