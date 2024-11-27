import type { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-ui-ux-design",
    title: "The Future of UI/UX Design: A Glimpse",
    description: "Exploring upcoming trends and innovations in user interface and experience design",
    content: `The landscape of UI/UX design is constantly evolving...`,
    featureImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    publishedAt: "2024-02-25",
    readingTime: "5 min read",
    author: {
      name: "Lisa Johnson",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      profession: "Senior UX Writer",
      twitter: "https://twitter.com/lisajohnson",
      github: "https://github.com/lisajohnson",
      website: "https://lisajohnson.dev"
    },
    tags: ["UI/UX", "Design", "Trends"],
    views: 1250
  },
  {
    slug: "social-media-security",
    title: "Stay Social Stay Secure: Demystifying Cybersecurity",
    description: "Essential security practices for social media management and engagement",
    content: `In today's interconnected world...`,
    featureImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    publishedAt: "2024-02-23",
    readingTime: "7 min read",
    author: {
      name: "Mike Chen",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      profession: "Security Specialist",
      twitter: "https://twitter.com/mikechen",
      github: "https://github.com/mikechen",
      website: "https://mikechen.dev"
    },
    tags: ["Security", "Social Media", "Best Practices"],
    views: 980
  },
  // ... Add more blog posts with the updated structure
];

export type { BlogPost } from "@/types/blog";
export { getAllTags, searchPosts, getPostBySlug, getRelatedPosts } from "./blog-utils";