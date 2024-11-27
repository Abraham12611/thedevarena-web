"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";

interface FeaturedBlogsProps {
  posts: BlogPost[];
}

export default function FeaturedBlogs({ posts }: FeaturedBlogsProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link 
              href={`/blog/${post.slug}`}
              className="group block relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.featureImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2 mb-4">
                  {post.description}
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">{post.author.name}</p>
                    <p className="text-xs text-muted-foreground">{post.author.profession}</p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}