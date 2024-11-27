"use client";

import { motion } from "framer-motion"
import ShareButtons from "./share-buttons"
import Markdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

interface BlogContentProps {
  content: string
}

// Define the CodeProps interface locally
interface CodeProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
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
          {content}
        </Markdown>

        <ShareButtons />
      </motion.div>
    </article>
  )
}