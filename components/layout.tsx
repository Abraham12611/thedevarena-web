"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
} 