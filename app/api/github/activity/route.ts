import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME || "Pradeepk0606";
    const token = process.env.GITHUB_TOKEN;

    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "pradeep-portfolio-app",
    };

    if (token) {
      headers["Authorization"] = `token ${token}`;
    }

    // Fetch recent activity (events)
    const eventsResponse = await fetch(
      `https://api.github.com/users/${username}/events/public?per_page=30`,
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
    let activities = events
      .filter((event: any) =>
        [
          "PushEvent",
          "CreateEvent",
          "PullRequestEvent",
          "IssuesEvent",
          "ReleaseEvent",
          "WatchEvent",
          "ForkEvent",
          "IssueCommentEvent",
          "PullRequestReviewCommentEvent",
          "PublicEvent",
        ].includes(event.type)
      )
      .map((event: any) => {
        let action = "";
        let description = "";

        switch (event.type) {
          case "PushEvent": {
            const commits = event.payload.commits?.length || 0;
            action = "Pushed";
            description = `${commits} commit${commits > 1 ? "s" : ""} to ${event.repo.name}`;
            break;
          }
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
            description = `${event.payload.release?.tag_name || "a release"} in ${event.repo.name}`;
            break;
          case "WatchEvent":
            action = "Starred";
            description = `starred ${event.repo.name}`;
            break;
          case "ForkEvent":
            action = "Forked";
            description = `forked ${event.repo.name}`;
            break;
          case "IssueCommentEvent":
            action = "Commented";
            description = `on an issue in ${event.repo.name}`;
            break;
          case "PullRequestReviewCommentEvent":
            action = "Reviewed";
            description = `a pull request in ${event.repo.name}`;
            break;
          case "PublicEvent":
            action = "Open Sourced";
            description = `made ${event.repo.name} public`;
            break;
          default:
            action = event.type;
            description = `activity in ${event.repo.name}`;
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

    if (!activities || activities.length === 0) {
      activities = events.slice(0, 10).map((event: any) => ({
        id: event.id,
        type: event.type,
        action: event.type,
        description: `activity in ${event.repo?.name || username}`,
        repo: event.repo?.name || username,
        repoUrl: event.repo?.name ? `https://github.com/${event.repo.name}` : `https://github.com/${username}`,
        createdAt: event.created_at,
        avatar: event.actor?.avatar_url,
      }));
    }

    return NextResponse.json({ activities });
  } catch (error) {
    console.error("GitHub activity error:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub activity", activities: [] },
      { status: 200 }
    );
  }
}
