"use client";

import { motion } from "framer-motion"
import ShareButtons from "./share-buttons"
import Markdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import type { CodeProps } from 'react-markdown/lib/components/code'

interface BlogContentProps {
  content: string
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Markdown
          components={{
            code({ className, children, ...props }: CodeProps) {
              const match = /language-(\w+)/.exec(className || '');
              const isInline = !match;
              
              return isInline ? (
                <code className={className} {...props}>
                  {children}
                </code>
              ) : (
                <SyntaxHighlighter
                  {...props}
                  style={vscDarkPlus as any}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              );
            },
          }}
        >
          {content}
        </Markdown>

        <ShareButtons />
      </motion.div>
    </article>
  )
}