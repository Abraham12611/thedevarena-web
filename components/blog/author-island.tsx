import Image from "next/image";
import { Twitter, Github, Globe } from "lucide-react";
import { Author } from "@/types/blog";

interface AuthorIslandProps {
  author: Author;
}

export function AuthorIsland({ author }: AuthorIslandProps) {
  return (
    <div className="flex items-center gap-4 p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm">
      <div className="relative h-16 w-16 rounded-full overflow-hidden">
        <Image
          src={author.image}
          alt={author.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{author.name}</h3>
        <p className="text-muted-foreground text-sm">{author.profession}</p>
        
        <div className="flex gap-3 mt-2">
          {author.twitter && (
            <a
              href={author.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </a>
          )}
          
          {author.github && (
            <a
              href={author.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          
          {author.website && (
            <a
              href={author.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Globe className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 