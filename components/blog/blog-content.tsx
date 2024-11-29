"use client";

import { motion } from "framer-motion"
import Image from "next/image"
import { format } from "date-fns"
import ShareButtons from "./share-buttons"
import { AuthorIsland } from "./author-island"
import Markdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { BlogPost } from "@/types/blog"

interface BlogContentProps {
  post: BlogPost
}

interface CodeProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function BlogContent({ post }: BlogContentProps) {
  // Default image for posts without a feature image
  const defaultFeatureImage = "/images/blog/default-feature.jpg";
  
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Feature Image */}
        <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.featureImage || defaultFeatureImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-muted-foreground mb-8">
          {post.publishedAt && (
            <time dateTime={post.publishedAt}>
              {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
            </time>
          )}
        </div>

        {/* Author Island */}
        <div className="mb-8">
          <AuthorIsland author={post.author} />
        </div>

        {/* Content */}
        <Markdown
          components={{
            code({ className, children, inline, ...props }: CodeProps) {
              if (inline) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }

              const match = /language-(\w+)/.exec(className || '');
              const lang = match ? match[1] : '';

              return (
                <SyntaxHighlighter
                  style={vscDarkPlus as any}
                  language={lang}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              );
            },
          }}
        >
          {post.content || ''}
        </Markdown>

        <ShareButtons />
      </motion.div>
    </article>
  )
}