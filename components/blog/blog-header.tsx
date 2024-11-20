"use client";

import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";
import Image from "next/image";

export default function BlogHeader() {
  return (
    <header className="mb-12">
      <div className="flex gap-2 mb-6">
        <Badge variant="secondary">Technical Writing</Badge>
        <Badge variant="secondary">Best Practices</Badge>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        The Future of UI/UX Design: A Glimpse
      </h1>
      <div className="flex items-center gap-4 text-muted-foreground mb-8">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>July 25, 2023</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>5 min read</span>
        </div>
      </div>
      <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
          alt="Blog Header"
          fill
          className="object-cover"
        />
      </div>
    </header>
  );
}