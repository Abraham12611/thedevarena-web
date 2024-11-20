"use client";

import { useState } from "react";
import BlogList from "@/components/blog/blog-list";
import BlogSearch from "@/components/blog/blog-search";
import BlogSidebar from "@/components/blog/blog-sidebar";
import { Button } from "@/components/ui/button";
import { LayoutGrid, LayoutList } from "lucide-react";
import { blogPosts, type BlogPost } from "@/lib/blog";

export default function BlogPage() {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [isGridView, setIsGridView] = useState(true);
  const [sortBy, setSortBy] = useState<"latest" | "popular">("latest");

  const handleSearch = (results: BlogPost[]) => {
    let sortedResults = [...results];
    if (sortBy === "latest") {
      sortedResults.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === "popular") {
      sortedResults.sort((a, b) => (b.views || 0) - (a.views || 0));
    }
    setFilteredPosts(sortedResults);
  };

  const handleSort = (value: "latest" | "popular") => {
    setSortBy(value);
    handleSearch(filteredPosts);
  };

  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            From Local Advancements{" "}
            <span className="gradient-text">to Global Changes</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Insights and expertise from our technical writing team on documentation,
            developer experience, and content strategy.
          </p>
        </div>

        <BlogSearch onSearch={handleSearch} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <Button
                  variant={isGridView ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsGridView(true)}
                >
                  <LayoutGrid className="w-4 h-4" />
                </Button>
                <Button
                  variant={!isGridView ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsGridView(false)}
                >
                  <LayoutList className="w-4 h-4" />
                </Button>
              </div>
              <select
                className="bg-secondary rounded-md px-3 py-1 text-sm"
                value={sortBy}
                onChange={(e) => handleSort(e.target.value as "latest" | "popular")}
              >
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
            <BlogList posts={filteredPosts} isGridView={isGridView} />
          </div>
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}