"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "./ui/button";
import LogoCarousel from "./logo-carousel";

export default function Hero() {
  return (
    <section className="min-h-[90vh] relative flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute h-full w-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-6 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 blur-md rounded-full group-hover:blur-lg transition-all duration-300" />
              <div className="relative px-4 py-1.5 rounded-full border border-primary/50 bg-background/50 backdrop-blur-sm">
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent font-medium">
                  Technical Writing as a Service
                </span>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
 <span className="gradient-text">Developer-First</span> Technical Content
for Growing SaaS Teams 
              <br />
              and Startups
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto mb-12">
              Turning complex APIs, docs, and features into clear, dev-ready content that drives adoption and reduces support overhead.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-20"
          >
            <Button
              size="lg"
              className="group relative px-8 py-6 text-lg hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary via-primary to-accent hover:shadow-[0_0_30px_rgba(238,243,95,0.3)] hover:border-primary/50"
            >
              <span className="flex items-center gap-2">
                Book a 15-min call
                <Calendar className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </span>
            </Button>
            <p className="mt-4 text-muted-foreground flex items-center justify-center gap-2">
              <span className="pulse-dot" aria-hidden="true" />
              4 spots available
            </p>
          </motion.div>

          <LogoCarousel />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20"
          >
            {[
              {
                title: "Technical Documentation",
                description:
                  "From API docs to SDKs—comprehensive technical content that helps developers succeed with your product from day one.",
              },
              {
                title: "Content Strategy",
                description:
                  "Data-driven technical content that drives developer adoption and product growth. Strategic roadmaps for documentation, tutorials, and developer resources.",
              },
              {
                title: "Developer Experience",
                description:
                  "Data-driven technical content that drives developer adoption and product growth. Strategic roadmaps for documentation, tutorials, and developer resources.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-lg hover-glow transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}