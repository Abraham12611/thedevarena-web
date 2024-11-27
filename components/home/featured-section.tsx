"use client";

import { motion } from "framer-motion";
import { getFeaturedPosts } from "@/lib/blog";
import FeaturedBlogs from "@/components/blog/featured-blogs";

export default function FeaturedSection() {
  const featuredPosts = getFeaturedPosts(3); // Get 3 featured posts

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our latest insights on technical writing, developer experience, and content strategy.
          </p>
        </div>
        
        <FeaturedBlogs posts={featuredPosts} />
      </motion.div>
    </section>
  );
} 