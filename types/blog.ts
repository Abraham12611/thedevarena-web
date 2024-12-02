export interface Author {
  name: string;
  image: string;
  profession?: string;
  bio?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

export interface BlogPost {
  id?: number;
  slug: string;
  title: string;
  excerpt?: string;
  description?: string;
  content?: string;
  date?: string;
  publishedAt?: string;
  author: Author;
  category?: string;
  readingTime: string;
  tags?: string[];
  views?: number;
  featureImage?: string;
} 