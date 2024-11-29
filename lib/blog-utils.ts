import { BlogPost } from "@/types/blog";
import { blogPosts } from "./blog";

export function getAllTags(): string[] {
  const tagsSet = new Set<string>();
  blogPosts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => tagsSet.add(tag));
    }
  });
  return Array.from(tagsSet);
}

export function searchPosts(query: string, selectedTags: string[] = []): BlogPost[] {
  return blogPosts.filter(post => {
    const matchesQuery = query === '' || 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      (post.description?.toLowerCase().includes(query.toLowerCase()) ?? false) ||
      (post.content?.toLowerCase().includes(query.toLowerCase()) ?? false);

    const postTags = post.tags ?? [];
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => postTags.includes(tag));

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
  if (!currentPost || !currentPost.tags) return [];

  return blogPosts
    .filter(post => post.slug !== currentSlug && post.tags)
    .sort((a, b) => {
      const aCommonTags = a.tags?.filter(tag => currentPost.tags?.includes(tag)).length ?? 0;
      const bCommonTags = b.tags?.filter(tag => currentPost.tags?.includes(tag)).length ?? 0;
      return bCommonTags - aCommonTags;
    })
    .slice(0, limit);
} 