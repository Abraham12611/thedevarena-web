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
import type { ComponentPropsWithoutRef } from 'react'

interface BlogContentProps {
  post: BlogPost
}

// Define proper types for code components
type CodeBlockProps = ComponentPropsWithoutRef<'code'> & {
  inline?: boolean;
  className?: string;
}

export default function BlogContent({ post }: BlogContentProps) {
  const defaultFeatureImage = "/images/blog/default-feature.jpg";
  
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

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
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
          {post.publishedAt && (
            <time dateTime={post.publishedAt} className="text-sm">
              {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
            </time>
          )}
          {post.tags && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Author Island */}
        <div className="mb-8">
          <AuthorIsland author={post.author} />
        </div>

        {/* Description */}
        {post.description && (
          <p className="text-xl text-muted-foreground mb-8">
            {post.description}
          </p>
        )}

        {/* Content */}
        <Markdown
          components={{
            code({ inline, className, children, ...props }: CodeBlockProps) {
              const match = /language-(\w+)/.exec(className || '')
              const lang = match ? match[1] : ''
              
              if (inline) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }

              return (
                <div className="relative">
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={lang}
                    PreTag="div"
                    customStyle={{
                      margin: 0,
                      borderRadius: '0.5rem',
                      background: 'hsl(var(--card))',
                    }}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </div>
              )
            }
          }}
        >
          {post.content || ''}
        </Markdown>

        <ShareButtons />
      </motion.div>
    </article>
  );
}