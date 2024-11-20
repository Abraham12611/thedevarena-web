"use client";

import { Pin } from "lucide-react";

export default function Pushpin({ color = "primary" }: { color?: string }) {
  return (
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
      <Pin className="w-8 h-8 text-primary rotate-45 drop-shadow-lg" />
    </div>
  );
}