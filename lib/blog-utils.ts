import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types/blog';
import { incrementViewCount, getViewCount } from '@/lib/view-counter';

const BLOG_DIR = path.join(process.cwd(), 'app/blog/content');

// Cache for blog posts
let blogPostsCache: BlogPost[] = [];

export async function getAllPosts(): Promise<BlogPost[]> {
  if (blogPostsCache.length > 0) {
    return blogPostsCache;
  }

  const files = await fs.readdir(BLOG_DIR);
  const posts = await Promise.all(
    files
      .filter(file => file.endsWith('.md'))
      .map(async file => {
        const filePath = path.join(BLOG_DIR, file);
        const content = await fs.readFile(filePath, 'utf8');
        const { data, content: markdown } = matter(content);
        const slug = file.replace('.md', '');
        
        return {
          ...data,
          slug,
          content: markdown,
          views: getViewCount(slug),
        } as BlogPost;
      })
  );

  // Sort by date, newest first
  blogPostsCache = posts.sort((a, b) => {
    const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return dateB - dateA;
  });

  return blogPostsCache;
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

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    const content = await fs.readFile(filePath, 'utf8');
    const { data, content: markdown } = matter(content);
    
    // Increment view count when post is accessed
    incrementViewCount(slug);

    return {
      ...data,
      slug,
      content: markdown,
      views: getViewCount(slug),
    } as BlogPost;
  } catch (error) {
    return null;
  }
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