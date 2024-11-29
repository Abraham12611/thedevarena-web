"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "CloudScale API Docs",
    description: "Complete API documentation and developer portal for a cloud infrastructure provider",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    tags: ["API Documentation", "Developer Portal", "Technical Writing"],
    link: "#"
  },
  {
    title: "FinTech Integration Guide",
    description: "Comprehensive SDK documentation and integration guides for a payment processing platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    tags: ["SDK Documentation", "Integration Guides", "Code Samples"],
    link: "#"
  },
  {
    title: "DevOps Platform Docs",
    description: "End-to-end documentation for a containerization and orchestration platform",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    tags: ["Technical Documentation", "Tutorials", "Best Practices"],
    link: "#"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
             <span className="gradient-text">Our Work:</span> See some of the content we've created{" "}
           
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 
                overflow-hidden transition-all duration-500 ease-out
                group-hover:shadow-[0_0_50px_rgba(238,243,95,0.15)] 
                group-hover:border-primary/30 
                group-hover:-translate-y-1"
              >
                {/* Project Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out
                      group-hover:scale-105 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent 
                    opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-2 transition-colors duration-300
                    group-hover:text-primary/90 group-hover:translate-x-1 transform-gpu">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-secondary/50 
                          text-muted-foreground transition-all duration-300
                          group-hover:bg-primary/10 group-hover:text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* View Project Button */}
                  <Button
                    variant="ghost"
                    className="w-full group/button 
                      transition-all duration-300
                      hover:bg-primary/10 hover:text-primary
                      focus:ring-2 focus:ring-primary/20"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4 transition-all duration-300 
                        group-hover/button:translate-x-1 group-hover/button:rotate-12" />
                    </a>
                  </Button>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-background 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none
                  mix-blend-overlay" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="group relative hover:scale-105 transition-all duration-300 
              bg-gradient-to-r from-primary via-primary to-accent 
              hover:shadow-[0_0_30px_rgba(238,243,95,0.3)] hover:border-primary/50"
          >
            <span className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}