import type { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "video-creation",
    title: "Creating Effective Technical Videos",
    description: "A comprehensive guide to creating engaging video content for developer audiences",
    content: `Creating video content for developers is an effective way to share knowledge, demonstrate skills, and build a community around your expertise. Developers often prefer concise, well-structured, and technical content, so your videos must meet these criteria to be successful. Here are some tips to help you create effective technical videos.`,
    featureImage: "https://img.freepik.com/free-photo/videographer-uses-software-create-visual-effects-video-projects_482257-91925.jpg",
    publishedAt: "2024-03-01",
    readingTime: "5 min read",
    author: {
      name: "Abraham Dahunsi",
      image: "https://i.postimg.cc/L593G1z9/Profile-pic.jpg",
      profession: "Lead Technical Writer",
      social: {
        twitter: "https://twitter.com/abrahamdahunsi",
        github: "https://github.com/Abraham12611",
        website: "https://www.abrahamdahunsi.com"
      }
    },
    tags: ["Video Content", "Technical Writing", "Developer Experience"],
    views: 1250
  },
  {
    slug: "blogs-for-developers",
    title: "Blogs for Developers: A Guide to Engaging Technical Audiences",
    description: "A comprehensive guide on creating compelling technical blogs that resonate with developer audiences",
    content: `Technical marketing focuses on engaging developers, engineers, and other tech-savvy audiences by providing value through in-depth, relevant, and actionable content. Unlike traditional marketing, it emphasizes education, problem-solving, and trust-building over overt selling. Here's how to create and execute effective technical marketing strategies.`,
    featureImage: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg",
    publishedAt: "2024-03-15",
    readingTime: "5 min read",
    author: {
      name: "Emily Parker",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      profession: "Content Strategist",
      social: {
        twitter: "https://twitter.com/mikechen",
        github: "https://github.com/emilyparker",
        website: "https://www.emilyparker.dev"
      }
    },
    tags: ["Technical Writing", "Content Strategy", "Developer Experience"],
    views: 980
  },
];

// Blog utility functions
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

export type { BlogPost } from "@/types/blog";