"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  borderWidth?: string;
  duration?: number;
  delay?: number;
  color?: string[];
  children: React.ReactNode;
}

export default function ShineBorder({
  borderWidth = "1px",
  duration = 3,
  delay = 0,
  color = ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--secondary))"],
  children,
  className,
  ...props
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

  return (
    <motion.div
      ref={divRef}
      className={cn("relative", className)}
      style={{
        padding: borderWidth,
      }}
      {...props}
    >
      <div
        style={{
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, ${color.map(
            (c) => `${c}15`
          )}, transparent 40%)`,
        }}
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-500",
          opacity === 0 ? "opacity-0" : "opacity-100"
        )}
      />
      <div className="absolute inset-0 rounded-3xl">{children}</div>
    </motion.div>
  );
} 