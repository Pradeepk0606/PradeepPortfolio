"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  FolderKanban, 
  FileText, 
  MessageSquare, 
  Users,
  TrendingUp,
  Mail
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    blogs: 0,
    contacts: 0,
    testimonials: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [projects, blogs, contacts] = await Promise.all([
        fetch("/api/projects").then(r => r.json()),
        fetch("/api/blog").then(r => r.json()),
        fetch("/api/contact").then(r => r.json()),
      ]);

      setStats({
        projects: projects.length || 0,
        blogs: blogs.length || 0,
        contacts: contacts.length || 0,
        testimonials: 2, // Static for now
      });
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    }
  };

  const statCards = [
    {
      title: "Total Projects",
      value: stats.projects,
      icon: FolderKanban,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Blog Posts",
      value: stats.blogs,
      icon: FileText,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Contact Messages",
      value: stats.contacts,
      icon: MessageSquare,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Testimonials",
      value: stats.testimonials,
      icon: Users,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-3 mb-4">
            <LayoutDashboard className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">
              Admin <span className="text-gradient">Dashboard</span>
            </h1>
          </div>
          <p className="text-muted-foreground">
            Manage your portfolio content and view analytics
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.title}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="card-hover cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FolderKanban className="h-5 w-5 mr-2 text-primary" />
                  Manage Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Add, edit, or delete your portfolio projects
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  Write Blog Post
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Create and publish new blog articles
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  View Messages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Check and respond to contact form submissions
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
          <Card>
            <CardContent className="p-6">
              <div className="text-center text-muted-foreground py-8">
                <p>Activity tracking coming soon...</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
