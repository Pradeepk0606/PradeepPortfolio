import { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    _id: "1",
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first application.",
    content: `# Getting Started with Next.js

Welcome to your first Next.js blog post! In this article, we'll explore the fundamentals of Next.js and how to build your first application.

## What is Next.js?

Next.js is a React framework that enables server-side rendering, static site generation, and more. It's designed to make building production-ready React applications a breeze.

## Key Features

- **Server-side Rendering (SSR)**
- **Static Site Generation (SSG)**
- **API Routes**
- **File-system based routing**
- **Built-in CSS and Sass support**

## Getting Started

To create a new Next.js project, run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

Then, start the development server:

\`\`\`bash
cd my-app
npm run dev
\`\`\`

## Conclusion

Next.js provides a powerful way to build React applications with great developer experience and performance optimizations out of the box.`,
    createdAt: "2023-10-20T00:00:00.000Z",
    updatedAt: "2023-10-20T00:00:00.000Z",
    tags: ["nextjs", "react", "webdev"],
    views: 1250,
    likes: 42,
    author: {
      name: "Pradeep Kumar",
      avatar: "/images/avatar.jpg"
    },
    coverImage: "/images/blog/nextjs-cover.jpg"
  },
  {
    _id: "2",
    slug: "introduction-to-react-hooks",
    title: "Introduction to React Hooks",
    excerpt: "Learn how to use React Hooks to simplify your functional components.",
    content: `# Introduction to React Hooks

React Hooks are a powerful feature that allow you to use state and other React features in functional components.

## Why Hooks?

- Reuse stateful logic between components
- Split one component into smaller functions based on related logic
- Use more of React's features without classes

## Basic Hooks

### useState

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

### useEffect

\`\`\`jsx
import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  
  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
\`\`\``,
    createdAt: "2023-10-15T00:00:00.000Z",
    updatedAt: "2023-10-15T00:00:00.000Z",
    tags: ["react", "hooks", "javascript"],
    views: 980,
    likes: 35,
    author: {
      name: "Pradeep Kumar",
      avatar: "/images/avatar.jpg"
    },
    coverImage: "/images/blog/react-hooks-cover.jpg"
  }
];
