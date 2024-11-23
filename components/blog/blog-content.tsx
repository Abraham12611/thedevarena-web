"use client";

import { motion } from "framer-motion"
import ShareButtons from "./share-buttons"

export default function BlogContent() {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>
          The field of UI/UX design is constantly evolving. As we look ahead,
          we&apos;re seeing emerging trends that will shape the future of digital
          experiences.
        </p>

        <h2>The Rise of AI-Driven Design</h2>
        <p>
          Artificial Intelligence isn&apos;t just a buzzword - it&apos;s
          revolutionizing how we approach design. From automated layout
          suggestions to intelligent user behavior analysis, AI is becoming an
          invaluable tool in the designer&apos;s toolkit.
        </p>

        <h2>Immersive Experiences</h2>
        <p>
          Virtual and Augmented Reality aren&apos;t just for gaming anymore.
          They&apos;re becoming integral parts of everyday digital experiences,
          from virtual shopping to remote collaboration.
        </p>

        <ShareButtons />
      </motion.div>
    </article>
  )
}