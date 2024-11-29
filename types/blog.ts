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
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: Author;
  category: string;
  readingTime: string;
  slug: string;
  content?: string;
  tags?: string[];
} 