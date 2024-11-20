"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";

const tags = [
  { name: "API Documentation", count: 12 },
  { name: "Technical Writing", count: 8 },
  { name: "Developer Experience", count: 15 },
  { name: "UI/UX", count: 10 },
  { name: "Best Practices", count: 7 },
];

export default function BlogSidebar() {
  return (
    <aside className="space-y-8">
      {/* Newsletter Signup */}
      <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
        <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
        <p className="text-muted-foreground mb-4">
          Get the latest articles and resources straight to your inbox.
        </p>
        <Input
          type="email"
          placeholder="Enter your email"
          className="mb-4"
        />
        <Button className="w-full">Subscribe</Button>
      </div>

      {/* Popular Tags */}
      <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
        <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
        <div className="space-y-2">
          {tags.map((tag) => (
            <div
              key={tag.name}
              className="flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="group-hover:bg-primary/20">
                  {tag.name}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  ({tag.count})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Access */}
      <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
        <h3 className="text-xl font-bold mb-4">Get Premium Access</h3>
        <ul className="space-y-3 mb-6">
          {["Full article access", "Weekly emails", "No advertisement"].map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full">Subscribe Now</Button>
      </div>
    </aside>
  );
}