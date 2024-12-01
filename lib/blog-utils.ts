import { BlogPost } from '@/types/blog';

// Cache for blog posts
let blogPostsCache: BlogPost[] = [];

export async function getAllPosts(): Promise<BlogPost[]> {
  if (blogPostsCache.length > 0) {
    return blogPostsCache;
  }

  const response = await fetch('/api/blog?action=getAllPosts');
  const posts = await response.json();
  blogPostsCache = posts;
  return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`/api/blog?action=getPost&slug=${slug}`);
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tagsSet = new Set<string>();
  
  posts.forEach((post: BlogPost) => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((tag: string) => tagsSet.add(tag));
    }
  });
  
  return Array.from(tagsSet);
}

export async function searchPosts(query: string, selectedTags: string[] = []): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  
  return posts.filter((post: BlogPost) => {
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

export async function getFeaturedPosts(limit: number = 3): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
}

export async function getRelatedPosts(currentSlug: string, limit: number = 2): Promise<BlogPost[]> {
  const [currentPost, allPosts] = await Promise.all([
    getPostBySlug(currentSlug),
    getAllPosts()
  ]);

  if (!currentPost || !currentPost.tags) return [];

  return allPosts
    .filter((post: BlogPost) => post.slug !== currentSlug && post.tags)
    .sort((a: BlogPost, b: BlogPost) => {
      const aCommonTags = a.tags?.filter((tag: string) => 
        currentPost.tags?.includes(tag)
      ).length ?? 0;
      
      const bCommonTags = b.tags?.filter((tag: string) => 
        currentPost.tags?.includes(tag)
      ).length ?? 0;
      
      return bCommonTags - aCommonTags;
    })
    .slice(0, limit);
} 