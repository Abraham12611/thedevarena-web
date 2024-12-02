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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 leading-[1.1] sm:leading-tight px-2 sm:px-6">
              <span className="gradient-text block sm:inline">Developer-First</span>{' '}
              <span className="block mt-2 sm:mt-0 sm:inline">Content</span>
              <span className="block text-2xl sm:text-4xl md:text-6xl lg:text-7xl mt-3 sm:mt-4">
                <span className="block sm:inline">for Growing SaaS Teams</span>{' '}
                <span className="block mt-1 sm:mt-0 sm:inline">&amp; Startups</span>{' '}
              </span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground 
              max-w-[95%] sm:max-w-2xl md:max-w-3xl mx-auto mb-8 sm:mb-12
              leading-relaxed sm:leading-loose px-2 sm:px-5">
              <span className="block sm:inline">Turning complex APIs, docs, and features </span>{' '}
              <span className="block sm:inline">into clear, dev-ready content</span>{' '}
              <span className="block sm:inline">that drives adoption</span>{' '}
              <span className="block sm:inline">and reduces support overhead.</span>
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default"
              size="lg"
              className="group/btn"
              asChild
            >
              <a 
                href="https://cal.com/abdahunsi/15min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Book a 15-min call
                <Calendar className="ml-2 w-4 h-4 transition-transform group-hover/btn:scale-110" />
              </a>
            </Button>
            <p className="mt-4 text-muted-foreground flex items-center justify-center gap-2">
              <span className="pulse-dot" aria-hidden="true" />
              4 spots available
            </p>
          </div>

          <LogoCarousel />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto mt-12 sm:mt-20 px-4 sm:px-6"
          >
            {[
              {
                title: "Technical Documentation",
                description: [
                  "From API docs to SDKs—",
                  "comprehensive technical content",
                  "that helps developers succeed",
                  "with your product from day one."
                ],
              },
              {
                title: "Content Strategy",
                description: [
                  "Data-driven technical content",
                  "that drives developer adoption",
                  "and product growth. Strategic",
                  "roadmaps for documentation",
                  "tutorials, and resources."
                ],
              },
              {
                title: "Developer Experience",
                description: [
                  "Data-driven technical content",
                  "that drives developer adoption",
                  "and product growth."
                ],
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg 
                  hover-glow transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground 
                  leading-relaxed sm:leading-loose">
                  {feature.description.map((line, i) => (
                    <span key={i} className="block sm:inline">
                      {line}{' '}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}