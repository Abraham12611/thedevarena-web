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
    metrics: ["45% Reduction in Support Tickets", "92% Developer Satisfaction"],
    link: "#"
  },
  {
    title: "FinTech Integration Guide",
    description: "Comprehensive SDK documentation and integration guides for a payment processing platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    tags: ["SDK Documentation", "Integration Guides", "Code Samples"],
    metrics: ["2.5x Faster Integration Time", "89% First-Try Success Rate"],
    link: "#"
  },
  {
    title: "DevOps Platform Docs",
    description: "End-to-end documentation for a containerization and orchestration platform",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    tags: ["Technical Documentation", "Tutorials", "Best Practices"],
    metrics: ["78% Increase in User Adoption", "94% Documentation Accuracy"],
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
             <span className="gradient-text">Success Stories:</span> See How Great Docs Drive Developer Success{" "}
           
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Browse real results from companies that transformed their technical documentation from a pain point into a competitive advantage.
          </p>
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
                overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(238,243,95,0.1)]"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
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
                          text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="space-y-2 mb-6">
                    {project.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <ArrowRight className="w-4 h-4 text-primary" />
                        {metric}
                      </div>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <Button
                    variant="ghost"
                    className="w-full group/button hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4 transition-transform duration-300 
                        group-hover/button:translate-x-1" />
                    </a>
                  </Button>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 
                  opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
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