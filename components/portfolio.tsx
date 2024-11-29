"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Developer Portal Redesign",
    description: "Revamped the developer documentation portal for a leading API platform, improving developer experience and reducing support tickets by 40%.",
    image: "/projects/project1.png",
    link: "#",
    tags: ["API Documentation", "Information Architecture", "UX Writing"],
  },
  {
    title: "SDK Documentation Suite",
    description: "Created comprehensive SDK documentation across multiple programming languages, increasing developer adoption by 60%.",
    image: "/projects/project2.png",
    link: "#",
    tags: ["SDK Documentation", "Code Examples", "Technical Writing"],
  },
  {
    title: "API Integration Guides",
    description: "Developed step-by-step integration guides that reduced onboarding time from 2 weeks to 3 days.",
    image: "/projects/project3.png",
    link: "#",
    tags: ["Integration Guides", "Technical Writing", "Developer Experience"],
  },
  {
    title: "Developer Blog Strategy",
    description: "Implemented a content strategy that doubled organic traffic and increased developer signups by 45%.",
    image: "/projects/project4.png",
    link: "#",
    tags: ["Content Strategy", "Blog Writing", "SEO"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="gradient-text">Documentation Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore our portfolio of developer documentation, technical content, and API documentation projects that drive developer success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="group relative bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="group/btn"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}