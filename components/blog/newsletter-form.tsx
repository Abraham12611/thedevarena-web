"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Add your newsletter subscription logic here
    // For now, just simulating an API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h3>
      <p className="text-muted-foreground text-sm mb-4">
        Get the latest articles and resources sent straight to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10"
            required
          />
        </div>
        <Button 
          type="submit" 
          className="w-full"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </Button>
        
        {status === "success" && (
          <p className="text-sm text-green-500">
            Thanks for subscribing!
          </p>
        )}
        
        {status === "error" && (
          <p className="text-sm text-red-500">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
} 