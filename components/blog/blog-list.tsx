"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/lib/blog";

interface BlogListProps {
  posts: BlogPost[];
  isGridView?: boolean;
}

export default function BlogList({ posts, isGridView = true }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No posts found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className={`grid gap-8 ${isGridView ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
      {posts.map((post, index) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="group relative bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50"
        >
          <Link href={`/blog/${post.slug}`}>
            <div className={isGridView ? 'block' : 'grid md:grid-cols-2 gap-6'}>
              <div className="relative h-64 md:h-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {post.description}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {post.readingTime}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {post.author.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Hover Gradient */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
        </motion.article>
      ))}
    </div>
  );
}