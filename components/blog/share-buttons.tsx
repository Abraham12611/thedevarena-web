"use client";

import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Facebook, Link2 } from "lucide-react";

export default function ShareButtons() {
  const handleShare = (platform: string) => {
    // Share functionality would go here
    console.log(`Sharing on ${platform}`);
  };

  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="text-sm text-muted-foreground">Share this article:</span>
      <div className="flex gap-2">
        {[
          { icon: Twitter, label: "Twitter", color: "hover:text-[#1DA1F2]" },
          { icon: Linkedin, label: "LinkedIn", color: "hover:text-[#0A66C2]" },
          { icon: Facebook, label: "Facebook", color: "hover:text-[#1877F2]" },
          { icon: Link2, label: "Copy Link", color: "hover:text-primary" },
        ].map((platform) => (
          <Button
            key={platform.label}
            variant="ghost"
            size="icon"
            className={`rounded-full ${platform.color}`}
            onClick={() => handleShare(platform.label)}
          >
            <platform.icon className="w-4 h-4" />
          </Button>
        ))}
      </div>
    </div>
  );
}