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

    const updatePos = () => {
      const rect = div.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      setPos({ x, y });
      setOpacity(1);
    };

    updatePos();
    window.addEventListener("resize", updatePos);
    window.addEventListener("scroll", updatePos);

    return () => {
      window.removeEventListener("resize", updatePos);
      window.removeEventListener("scroll", updatePos);
    };
  }, []);

  const gradientColors = color.map((c) => `${c}15`).join(", ");

  return (
    <div
      ref={divRef}
      className={cn("relative", className)}
      style={{
        padding: borderWidth,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: opacity }}
        transition={{ duration: 0.5 }}
        style={{
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, ${gradientColors}, transparent 40%)`,
        }}
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
      />
      <div className="absolute inset-0 rounded-3xl">
        <div className="relative h-full">
          {children}
        </div>
      </div>
    </div>
  );
} 