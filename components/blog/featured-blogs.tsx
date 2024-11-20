"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const featuredPosts = [
  {
    slug: "future-of-interactive-design",
    title: "The Future of Interactive Design with Framer",
    description: "Exploring the latest innovations in interactive design using Framer",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    date: "July 25, 2023",
    readingTime: "6 min read",
    category: "Framer"
  },
  {
    slug: "perfect-font-introduction",
    title: "The Art of Choosing the Perfect Font Introduction",
    description: "A comprehensive guide to typography in technical documentation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    date: "July 25, 2023",
    readingTime: "4 min read",
    category: "Design"
  }
];

export default function FeaturedBlogs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold"
          >
            Featured <span className="gradient-text">Blogs</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="ghost" asChild>
              <Link href="/blog" className="group">
                Browse more posts
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <Badge
                    className="absolute top-4 left-4"
                    variant="secondary"
                  >
                    {post.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readingTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {post.description}
                  </p>
                </div>
              </Link>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}