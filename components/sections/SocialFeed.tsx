"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, ExternalLink, Heart, MessageCircle, Share2, GitCommit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatDistanceToNow } from "date-fns";

interface LinkedInPost {
  id: string;
  text: string;
  createdAt: string;
  url: string;
  likes: number;
  comments: number;
  shares: number;
}

interface GitHubActivity {
  id: string;
  type: string;
  action: string;
  description: string;
  repo: string;
  repoUrl: string;
  createdAt: string;
  avatar: string;
}

export function SocialFeed() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [linkedInPosts, setLinkedInPosts] = useState<LinkedInPost[]>([]);
  const [githubActivity, setGithubActivity] = useState<GitHubActivity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSocialData();
  }, []);

  const fetchSocialData = async () => {
    try {
      const [linkedInRes, githubRes] = await Promise.all([
        fetch("/api/linkedin"),
        fetch("/api/github/activity"),
      ]);

      const linkedInData = await linkedInRes.json();
      const githubData = await githubRes.json();

      setLinkedInPosts(linkedInData.posts || []);
      setGithubActivity(githubData.activities || []);
    } catch (error) {
      console.error("Failed to fetch social data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            Latest <span className="text-gradient">Activity</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            My recent posts and contributions across social platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* LinkedIn Posts */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-2 text-[#0A66C2]" />
                  LinkedIn Posts
                </CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="animate-pulse">
                        <div className="h-4 bg-secondary rounded w-3/4 mb-2" />
                        <div className="h-4 bg-secondary rounded w-1/2" />
                      </div>
                    ))}
                  </div>
                ) : linkedInPosts.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-6 md:py-8">
                    No LinkedIn posts yet. Configure LinkedIn API to see posts here.
                  </p>
                ) : (
                  <div className="space-y-4 max-h-[60vh] md:max-h-[600px] overflow-y-auto">
                    {linkedInPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      >
                        <Card className="card-hover">
                          <CardContent className="p-4">
                            <p className="text-sm md:text-base mb-3 line-clamp-3">{post.text}</p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <span>
                                {formatDistanceToNow(new Date(post.createdAt), {
                                  addSuffix: true,
                                })}
                              </span>
                              <div className="flex items-center space-x-3">
                                <span className="flex items-center">
                                  <Heart className="h-3 w-3 mr-1" />
                                  {post.likes}
                                </span>
                                <span className="flex items-center">
                                  <MessageCircle className="h-3 w-3 mr-1" />
                                  {post.comments}
                                </span>
                                <span className="flex items-center">
                                  <Share2 className="h-3 w-3 mr-1" />
                                  {post.shares}
                                </span>
                              </div>
                            </div>
                            <a
                              href={post.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-primary hover:underline mt-2 inline-flex items-center"
                            >
                              View on LinkedIn
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* GitHub Activity */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Github className="h-5 w-5 mr-2 text-primary" />
                  GitHub Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="animate-pulse">
                        <div className="h-4 bg-secondary rounded w-3/4 mb-2" />
                        <div className="h-4 bg-secondary rounded w-1/2" />
                      </div>
                    ))}
                  </div>
                ) : githubActivity.length === 0 ? (
                  <GitHubFallback />
                ) : (
                  <div className="space-y-4 max-h-[600px] overflow-y-auto">
                    {githubActivity.map((activity, index) => (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      >
                        <Card className="card-hover">
                          <CardContent className="p-4">
                            <div className="flex items-start space-x-3">
                              <div className="p-2 bg-primary/10 rounded-lg">
                                <GitCommit className="h-4 w-4 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 mb-1">
                                  <Badge variant="secondary" className="text-xs">
                                    {activity.action}
                                  </Badge>
                                  <span className="text-xs text-muted-foreground">
                                    {formatDistanceToNow(new Date(activity.createdAt), {
                                      addSuffix: true,
                                    })}
                                  </span>
                                </div>
                                <p className="text-sm mb-2">{activity.description}</p>
                                <a
                                  href={activity.repoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-primary hover:underline inline-flex items-center"
                                >
                                  View Repository
                                  <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GitHubFallback() {
  const [repos, setRepos] = useState<Array<{ name: string; description: string; url: string; updatedAt: string }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/github");
        const data = await res.json();
        setRepos((data.repos || []).slice(0, 6));
      } catch (e) {
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-secondary rounded w-3/4 mb-2" />
            <div className="h-4 bg-secondary rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (!repos.length) {
    return (
      <p className="text-sm text-muted-foreground text-center py-6 md:py-8">
        No recent GitHub activity found. Try adding a token in env to increase API limits.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {repos.map((repo) => (
        <Card key={repo.name} className="card-hover">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="min-w-0 pr-3">
                <p className="font-medium truncate">{repo.name}</p>
                {repo.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{repo.description}</p>
                )}
                <p className="text-xs text-muted-foreground mt-2">Updated {formatDistanceToNow(new Date(repo.updatedAt), { addSuffix: true })}</p>
              </div>
              <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline flex-shrink-0 inline-flex items-center">
                View Repository
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
