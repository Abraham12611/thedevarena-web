"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";

interface FeaturedBlogsProps {
  posts: BlogPost[];
}

export function FeaturedBlogs({ posts }: FeaturedBlogsProps) {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="rounded-lg overflow-hidden">
              {/* Blog post card content */}
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              {/* Add more post content display */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}