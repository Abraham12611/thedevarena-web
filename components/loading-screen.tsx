"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingScreen() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Simulate minimum loading time for smooth transition
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm"
    >
      <div className="relative">
        {/* Outer spinning circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full"
        />
        
        {/* Inner spinning circle */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-8 h-8 border-4 border-primary/40 border-t-primary rounded-full" />
        </motion.div>

        {/* Loading text */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground"
        >
          Loading...
        </motion.span>
      </div>
    </motion.div>
  );
} 