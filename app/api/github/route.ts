import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME || "Pradeepk0606";
    const token = process.env.GITHUB_TOKEN;

    const headers: HeadersInit = {
      "Accept": "application/vnd.github.v3+json",
    };

    if (token) {
      headers["Authorization"] = `token ${token}`;
    }

    // Fetch user data
    const userResponse = await fetch(`https://api.github.com/users/${username}`, {
      headers,
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!userResponse.ok) {
      throw new Error("Failed to fetch GitHub user data");
    }

    const userData = await userResponse.json();

    // Fetch repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    if (!reposResponse.ok) {
      throw new Error("Failed to fetch GitHub repositories");
    }

    const reposData = await reposResponse.json();

    return NextResponse.json({
      user: {
        name: userData.name,
        bio: userData.bio,
        avatar: userData.avatar_url,
        followers: userData.followers,
        following: userData.following,
        publicRepos: userData.public_repos,
        location: userData.location,
      },
      repos: reposData.map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        updatedAt: repo.updated_at,
      })),
    });
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
