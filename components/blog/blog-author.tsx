"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogAuthor() {
  return (
    <div className="flex items-center gap-6 py-8 border-y border-border mb-12">
      <Image
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
        alt="Lisa Johnson"
        width={80}
        height={80}
        className="rounded-full"
      />
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-1">Lisa Johnson</h3>
        <p className="text-muted-foreground mb-3">Senior UX Writer</p>
        <div className="flex gap-2">
          {[
            { icon: Twitter, href: "#" },
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
          ].map((social, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full hover:text-primary hover:bg-secondary/80"
              asChild
            >
              <Link href={social.href}>
                <social.icon className="h-4 w-4" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}