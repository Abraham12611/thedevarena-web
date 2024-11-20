"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { getAllTags, searchPosts } from "@/lib/blog";

interface BlogSearchProps {
  onSearch: (results: any[]) => void;
}

export default function BlogSearch({ onSearch }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const allTags = getAllTags();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const results = searchPosts(query, selectedTags);
    onSearch(results);
  };

  const toggleTag = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
    const results = searchPosts(searchQuery, newTags);
    onSearch(results);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search resources..."
          className="pl-10 bg-card/80 backdrop-blur-sm"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="text-sm font-medium text-muted-foreground mr-2">
          Filter by tags:
        </span>
        {allTags.map((tag) => (
          <Badge
            key={tag}
            variant={selectedTags.includes(tag) ? "default" : "secondary"}
            className="cursor-pointer hover:bg-primary/20"
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}