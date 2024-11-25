"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface ShineBorderProps {
  borderWidth?: string;
  duration?: number;
  delay?: number;
  color?: string[];
  children: ReactNode;
  className?: string;
}

export default function ShineBorder({
  borderWidth = "1px",
  duration = 3,
  delay = 0,
  color = ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--secondary))"],
  children,
  className,
}: ShineBorderProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const div = divRef.current;
    if (!div) return;

    const updatePos = (e?: MouseEvent) => {
      const rect = div.getBoundingClientRect();
      
      if (e) {
        // Mouse position relative to the container
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setPos({ x, y });
      } else {
        // Default center position
        setPos({ 
          x: rect.width / 2,
          y: rect.height / 2
        });
      }
      setOpacity(1);
    };

    // Initial position
    updatePos();

    // Track mouse movement
    div.addEventListener("mousemove", updatePos);
    window.addEventListener("resize", () => updatePos());
    window.addEventListener("scroll", () => updatePos());

    return () => {
      div.removeEventListener("mousemove", updatePos);
      window.removeEventListener("resize", () => updatePos());
      window.removeEventListener("scroll", () => updatePos());
    };
  }, []);

  return (
    <div
      ref={divRef}
      className={cn(
        "group relative transition-all duration-300",
        className
      )}
    >
      {/* Background with shine effect */}
      <div className="absolute inset-0 rounded-3xl bg-background/10 backdrop-blur-xl" />
      
      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: `linear-gradient(to right, ${color.join(", ")})`,
          padding: "1px",
        }}
        initial={{ opacity: 0.1 }}
        whileHover={{ opacity: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-background to-transparent opacity-50" />
      </motion.div>

      {/* Shine effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 rounded-3xl"
        style={{
          background: `radial-gradient(1200px circle at ${pos.x}px ${pos.y}px, ${color.map(c => `${c}10`).join(", ")}, transparent 40%)`,
        }}
      />

      {/* Content */}
      <div className="relative rounded-3xl bg-background/5 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
} 