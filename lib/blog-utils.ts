import { BlogPost } from "@/types/blog";
import { blogPosts } from "./blog";

export function getAllTags(): string[] {
  const tagsSet = new Set<string>();
  blogPosts.forEach(post => {
    post.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet);
}

export function searchPosts(query: string, selectedTags: string[] = []): BlogPost[] {
  return blogPosts.filter(post => {
    const matchesQuery = query === '' || 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.description.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase());

    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => post.tags.includes(tag));

    return matchesQuery && matchesTags;
  });
}

export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  return blogPosts.slice(0, limit);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit: number = 2): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .sort((a, b) => {
      const aCommonTags = a.tags.filter(tag => currentPost.tags.includes(tag)).length;
      const bCommonTags = b.tags.filter(tag => currentPost.tags.includes(tag)).length;
      return bCommonTags - aCommonTags;
    })
    .slice(0, limit);
} 