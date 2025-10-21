"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Music, Code, TrendingUp, Star, GitFork } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function GitHubWidget() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-3">
            <div className="h-4 bg-secondary rounded w-3/4" />
            <div className="h-4 bg-secondary rounded w-1/2" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!data || data.error) {
    return null;
  }

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Github className="h-5 w-5 mr-2 text-primary" />
          GitHub Stats
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">{data.user.publicRepos}</div>
            <div className="text-xs text-muted-foreground">Repositories</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">{data.user.followers}</div>
            <div className="text-xs text-muted-foreground">Followers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">{data.user.following}</div>
            <div className="text-xs text-muted-foreground">Following</div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Recent Repositories</h4>
          <div className="space-y-2">
            {data.repos.slice(0, 3).map((repo: any) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="font-medium text-sm mb-1">{repo.name}</div>
                    {repo.description && (
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {repo.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground ml-2">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      {repo.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="h-3 w-3 mr-1" />
                      {repo.forks}
                    </div>
                  </div>
                </div>
                {repo.language && (
                  <Badge variant="outline" className="mt-2 text-xs">
                    {repo.language}
                  </Badge>
                )}
              </a>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function SpotifyWidget() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpotify = () => {
      fetch("/api/spotify")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    };

    fetchSpotify();
    const interval = setInterval(fetchSpotify, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-3">
            <div className="h-4 bg-secondary rounded w-3/4" />
            <div className="h-4 bg-secondary rounded w-1/2" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!data || !data.isPlaying) {
    return (
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Music className="h-5 w-5 mr-2 text-primary" />
            Spotify
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Not playing anything right now</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Music className="h-5 w-5 mr-2 text-green-500 animate-pulse" />
          Currently Playing
        </CardTitle>
      </CardHeader>
      <CardContent>
        <a
          href={data.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:opacity-80 transition-opacity"
        >
          <div className="flex items-center space-x-4">
            {data.albumImageUrl && (
              <img
                src={data.albumImageUrl}
                alt={data.album}
                className="w-16 h-16 rounded-lg"
              />
            )}
            <div className="flex-1 min-w-0">
              <div className="font-semibold truncate">{data.title}</div>
              <div className="text-sm text-muted-foreground truncate">{data.artist}</div>
              <div className="text-xs text-muted-foreground truncate">{data.album}</div>
            </div>
          </div>
        </a>
      </CardContent>
    </Card>
  );
}

export function CodingStatsWidget() {
  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Code className="h-5 w-5 mr-2 text-primary" />
          Coding Stats
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-secondary/50 rounded-lg">
            <div className="text-2xl font-bold text-primary">100+</div>
            <div className="text-xs text-muted-foreground">Problems Solved</div>
          </div>
          <div className="text-center p-3 bg-secondary/50 rounded-lg">
            <div className="text-2xl font-bold text-primary">150+</div>
            <div className="text-xs text-muted-foreground">Rating</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">LeetCode</span>
            <Badge variant="secondary">Active</Badge>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Codeforces</span>
            <Badge variant="secondary">Pupil</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
