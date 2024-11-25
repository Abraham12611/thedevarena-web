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

  const gradientColors = color.map((c) => `${c}15`).join(", ");

  return (
    <div
      ref={divRef}
      className={cn(
        "group relative rounded-3xl p-[1px] transition-all duration-300",
        className
      )}
    >
      {/* Shine effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 rounded-3xl transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${pos.x}px ${pos.y}px, ${gradientColors}, transparent 40%)`,
        }}
      />

      {/* Border */}
      <div
        className="absolute inset-0 rounded-3xl opacity-20"
        style={{
          background: `linear-gradient(to right, ${color.join(", ")})`,
        }}
      />

      {/* Content */}
      <div className="relative rounded-[calc(1.5rem-1px)] bg-background">
        {children}
      </div>
    </div>
  );
} 