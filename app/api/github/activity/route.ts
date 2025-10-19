import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME || "Pradeepk0606";
    const token = process.env.GITHUB_TOKEN;

    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
    };

    if (token) {
      headers["Authorization"] = `token ${token}`;
    }

    // Fetch recent activity (events)
    const eventsResponse = await fetch(
      `https://api.github.com/users/${username}/events/public?per_page=10`,
      {
        headers,
        next: { revalidate: 1800 }, // Cache for 30 minutes
      }
    );

    if (!eventsResponse.ok) {
      throw new Error("Failed to fetch GitHub activity");
    }

    const events = await eventsResponse.json();

    // Transform and filter relevant events
    const activities = events
      .filter((event: any) =>
        ["PushEvent", "CreateEvent", "PullRequestEvent", "IssuesEvent", "ReleaseEvent"].includes(
          event.type
        )
      )
      .map((event: any) => {
        let action = "";
        let description = "";

        switch (event.type) {
          case "PushEvent":
            const commits = event.payload.commits?.length || 0;
            action = "Pushed";
            description = `${commits} commit${commits > 1 ? "s" : ""} to ${event.repo.name}`;
            break;
          case "CreateEvent":
            action = "Created";
            description = `${event.payload.ref_type} in ${event.repo.name}`;
            break;
          case "PullRequestEvent":
            action = event.payload.action === "opened" ? "Opened" : "Updated";
            description = `pull request in ${event.repo.name}`;
            break;
          case "IssuesEvent":
            action = event.payload.action === "opened" ? "Opened" : "Updated";
            description = `issue in ${event.repo.name}`;
            break;
          case "ReleaseEvent":
            action = "Released";
            description = `${event.payload.release.tag_name} in ${event.repo.name}`;
            break;
        }

        return {
          id: event.id,
          type: event.type,
          action,
          description,
          repo: event.repo.name,
          repoUrl: `https://github.com/${event.repo.name}`,
          createdAt: event.created_at,
          avatar: event.actor.avatar_url,
        };
      });

    return NextResponse.json({ activities });
  } catch (error) {
    console.error("GitHub activity error:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub activity", activities: [] },
      { status: 200 }
    );
  }
}
