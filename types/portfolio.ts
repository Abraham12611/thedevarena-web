export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface ProjectCategory {
  id: string;
  title: string;
  projects: Project[];
} 