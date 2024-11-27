"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { blogPosts, getAllTags, searchPosts, getFeaturedPosts } from "@/lib/blog";
import type { BlogPost } from "@/types/blog";
import BlogList from "@/components/blog/blog-list";
import BlogSearch from "@/components/blog/blog-search";
import FeaturedBlogs from "@/components/blog/featured-blogs";
import NewsletterForm from "@/components/blog/newsletter-form";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const allTags = getAllTags();
  const featuredPosts = getFeaturedPosts();
  const filteredPosts = searchPosts(searchQuery, selectedTags);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Featured Blogs Section */}
        <section className="mb-16">
          <FeaturedBlogs posts={featuredPosts} />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Search */}
            <div className="sticky top-24">
              <BlogSearch
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search articles..."
              />

              {/* Tags Filter */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map(tag => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? "default" : "secondary"}
                      className="cursor-pointer transition-colors"
                      onClick={() => handleTagToggle(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Newsletter Form */}
              <div className="mt-8 p-6 bg-card rounded-lg border border-border">
                <NewsletterForm />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BlogList posts={filteredPosts} />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}