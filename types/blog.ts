export interface Author {
  name: string;
  image: string;
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
} 