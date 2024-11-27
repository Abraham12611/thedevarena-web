export interface Author {
  name: string;
  profession: string;
  image: string;
  twitter?: string;
  github?: string;
  website?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  featureImage: string;
  author: Author;
  tags: string[];
  readingTime?: string;
  views?: number;
} 