"use client";

import { blogPosts, type BlogPost } from "@/lib/blog";
import BlogList from "@/components/blog/blog-list";

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <BlogList posts={blogPosts} />
    </main>
  );
}