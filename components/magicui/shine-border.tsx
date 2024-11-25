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
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setPos({ x, y });
      } else {
        setPos({ 
          x: rect.width / 2,
          y: rect.height / 2
        });
      }
      setOpacity(1);
    };

    updatePos();
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
        "group relative p-[1px] transition-all duration-300",
        className
      )}
    >
      {/* Animated border container */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        initial={{ opacity: 0.2 }}
        whileHover={{ opacity: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Base gradient border */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `linear-gradient(to right, ${color.join(", ")})`,
          }}
        />
        
        {/* Shine effect on border */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `radial-gradient(1000px circle at ${pos.x}px ${pos.y}px, ${color.map(c => `${c}40`).join(", ")}, transparent 40%)`,
          }}
        />
      </motion.div>

      {/* Content container */}
      <div className="relative h-full rounded-3xl bg-background/80 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
} 