// Blog data store
export interface Author {
  name: string;
  image: string;
  role: string;
  socials?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  readingTime: string;
  author: Author;
  tags: string[];
  views?: number;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-ui-ux-design",
    title: "The Future of UI/UX Design: A Glimpse",
    description: "Exploring upcoming trends and innovations in user interface and experience design",
    content: `The landscape of UI/UX design is constantly evolving, shaped by emerging technologies, changing user expectations, and new design paradigms. From AI-driven interfaces to immersive experiences, we explore what's next in design...`,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    date: "2024-02-25",
    readingTime: "5 min read",
    author: {
      name: "Lisa Johnson",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      role: "Senior UX Writer"
    },
    tags: ["UI/UX", "Design", "Trends"],
    views: 1250
  },
  {
    slug: "social-media-security",
    title: "Stay Social Stay Secure: Demystifying Cybersecurity",
    description: "Essential security practices for social media management and engagement",
    content: `In today's interconnected world, social media security is more important than ever. Learn about best practices, common threats, and how to protect your online presence...`,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    date: "2024-02-23",
    readingTime: "7 min read",
    author: {
      name: "Mike Chen",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      role: "Security Specialist"
    },
    tags: ["Security", "Social Media", "Best Practices"],
    views: 980
  },
  {
    slug: "api-documentation-best-practices",
    title: "API Documentation Best Practices for 2024",
    description: "Create developer-friendly API documentation that drives adoption",
    content: `Great API documentation is crucial for developer adoption. Discover the latest best practices, tools, and techniques for creating clear, comprehensive API documentation...`,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    date: "2024-02-20",
    readingTime: "8 min read",
    author: {
      name: "Sarah Zhang",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      role: "Technical Writer"
    },
    tags: ["API", "Documentation", "Developer Experience"],
    views: 1560
  },
  {
    slug: "technical-writing-tools",
    title: "Essential Tools for Modern Technical Writers",
    description: "A comprehensive guide to the best technical writing tools and platforms",
    content: `The right tools can significantly improve your technical writing workflow. From documentation generators to collaboration platforms, we review the essential tools every technical writer needs...`,
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=400&fit=crop",
    date: "2024-02-18",
    readingTime: "6 min read",
    author: {
      name: "David Kim",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop",
      role: "Documentation Engineer"
    },
    tags: ["Tools", "Technical Writing", "Productivity"],
    views: 2100
  },
  {
    slug: "developer-portal-design",
    title: "Creating an Effective Developer Portal",
    description: "Best practices for designing and organizing developer portals",
    content: `A well-designed developer portal is key to API adoption. Learn how to structure content, implement search, and create an intuitive navigation experience...`,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
    date: "2024-02-15",
    readingTime: "9 min read",
    author: {
      name: "Emily Parker",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      role: "Developer Experience Lead"
    },
    tags: ["Developer Portal", "Documentation", "UX"],
    views: 1890
  }
];

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