import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="aspect-video relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
        
        <p className="text-muted-foreground mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 