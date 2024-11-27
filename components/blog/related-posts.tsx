"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const relatedPosts = [
  {
    slug: "design-systems-evolution",
    title: "The Evolution of Design Systems",
    description: "How design systems have transformed UI development",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    date: "July 20, 2023",
    readingTime: "4 min read",
    category: "Design"
  },
  {
    slug: "future-of-micro-interactions",
    title: "The Future of Micro-Interactions",
    description: "Creating engaging user experiences through subtle animations",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    date: "July 18, 2023",
    readingTime: "3 min read",
    category: "UX"
  }
];

export default function RelatedPosts() {
  return (
    <section className="mt-16 pt-12 border-t border-border">
      <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {relatedPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative"
          >
            <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50
              transition-all duration-500 ease-out
              group-hover:shadow-[0_0_50px_rgba(238,243,95,0.15)]
              group-hover:border-primary/30
              group-hover:-translate-y-1"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out
                      group-hover:scale-105 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent
                    opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  <Badge
                    className="absolute top-4 left-4 transition-all duration-300
                      group-hover:bg-primary/20 group-hover:text-primary"
                    variant="secondary"
                  >
                    {post.category}
                  </Badge>
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground
                    transition-all duration-300 group-hover:translate-x-1">
                    <span>{post.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 transition-transform duration-300
                        group-hover:scale-110" />
                      {post.readingTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 transition-all duration-300
                    group-hover:text-primary/90 group-hover:translate-x-1 transform-gpu">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground transition-colors duration-300
                    group-hover:text-muted-foreground/80">
                    {post.description}
                  </p>
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
    </section>
  );
}