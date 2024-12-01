"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/types/blog";

interface BlogListProps {
  posts: BlogPost[];
  isGridView?: boolean;
}

export default function BlogList({ posts, isGridView = true }: BlogListProps) {
  // Default image for posts without a feature image
  const defaultFeatureImage = "/images/blog/default-feature.jpg";

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
          className="group relative"
        >
          <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50
            transition-all duration-500 ease-out
            group-hover:shadow-[0_0_50px_rgba(238,243,95,0.15)]
            group-hover:border-primary/30
            group-hover:-translate-y-1"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className={isGridView ? 'block' : 'grid md:grid-cols-2 gap-6'}>
                <div className="relative h-64 md:h-full overflow-hidden">
                  <Image
                    src={post.featureImage || defaultFeatureImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out
                      group-hover:scale-105 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent
                    opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex gap-2 mb-4">
                    {post.tags?.map((tag) => (
                      <Badge key={tag} variant="secondary" className="transition-colors duration-300
                        group-hover:bg-primary/20 group-hover:text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold mb-2 transition-all duration-300
                    group-hover:text-primary/90 group-hover:translate-x-1 transform-gpu">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 transition-colors duration-300
                    group-hover:text-muted-foreground/80">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-4 mb-4 transition-all duration-300
                    group-hover:translate-x-1">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary transition-transform duration-300
                        group-hover:scale-110" />
                      <span className="text-sm text-muted-foreground">
                        {post.readingTime}
                      </span>
                    </div>
                    {post.publishedAt && (
                      <span className="text-sm text-muted-foreground">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    )}
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {post.views || 0} views
                    </span>
                  </div>
                  <div className="flex items-center gap-3 transition-all duration-300
                    group-hover:translate-x-1">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full transition-transform duration-300
                        group-hover:scale-110"
                    />
                    <div>
                      <p className="font-medium">{post.author.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {post.author.profession}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Hover Gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-background 
              opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none
              mix-blend-overlay" />
          </div>
        </motion.article>
      ))}
    </div>
  );
}