"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getAllPosts, getAllTags, searchPosts } from "@/lib/blog-utils";
import type { BlogPost } from "@/types/blog";
import BlogList from "@/components/blog/blog-list";
import BlogSearch from "@/components/blog/blog-search";
import { default as FeaturedBlogs } from "@/components/blog/featured-blogs";
import NewsletterForm from "@/components/blog/newsletter-form";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load initial data
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const [allPosts, tags] = await Promise.all([
          getAllPosts(),
          getAllTags()
        ]);
        setPosts(allPosts);
        setFilteredPosts(allPosts);
        setAllTags(tags);
      } catch (error) {
        console.error('Error loading blog data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, []);

  // Handle search and filtering
  useEffect(() => {
    const filterPosts = async () => {
      const filtered = await searchPosts(searchQuery, selectedTags);
      setFilteredPosts(filtered);
    };

    filterPosts();
  }, [searchQuery, selectedTags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const featuredPosts = posts.slice(0, 3);

  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a proper loading skeleton
  }

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