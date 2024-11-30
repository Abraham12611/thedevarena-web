"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "PRODUCT PERSUASION GUIDE", 
    description: "This step-by-step guide demonstrates how to install OpenLiteSpeed on Vultr's Debian 12. It highlights Vultr's reliability and ease of use while showcasing OpenLiteSpeed's performance benefits, persuading developers to adopt both seamlessly.",
    image: "/images/a401679d-d9a4-4672-8d84-673c6e20810b.webp",
    link: "https://docs.vultr.com/how-to-install-openlitespeed-webserver-on-debian-12",
    tags: ["Technical Writing", "Code Examples", "SEO"],
  },
  {
    title: "PRODUCT PERSUASION GUIDE",
    description: "This guide explains how to generate AI-powered videos using Show-1 on Vultr Cloud GPU. It emphasizes Vultr's powerful GPU performance and flexibility, persuading developers to harness AI creativity with Vultr’s infrastructure.",
    image: "/images/f78ec501fb566b29.webp",
    link: "https://docs.vultr.com/ai-generated-videos-using-show-1-on-vultr-cloud-gpu",
    tags: ["Technical Writing", "Code Examples", "SEO"],
  },
  {
    title: "PRODUCT PERSUASION GUIDE",
    description: "This guide walks developers through installing a LAMP stack on Ubuntu 24.04 using Vultr's infrastructure. It highlights Vultr's reliability and scalability, persuading developers to build and deploy robust web applications with ease.",
    image: "/images/8f79779e094f9e60.webp",
    link: "https://docs.vultr.com/how-to-install-apache-mysql-php-lamp-stack-on-ubuntu-24-04",
    tags: ["Code Examples", "Technical Writing", "Developer Experience"],
  },
  {
    title: "Developer Blog Strategy",
    description: "This guide details running a Docker-Surfshark container for secure, private internet access. It emphasizes Docker's flexibility and Surfshark's robust VPN features, persuading developers to streamline privacy solutions through containerized deployments.s",
    image: "/images/featureimg.webp",
    link: "https://collabnix.com/why-run-vpn-in-a-docker-container/",
    tags: ["Technical Writing", "Blog Writing", "Developer Experience"],
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
          <div className="inline-block mb-6 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 blur-md rounded-full group-hover:blur-lg transition-all duration-300" />
            <div className="relative px-4 py-1.5 rounded-full border border-primary/50 bg-background/50 backdrop-blur-sm">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent font-medium">
                Portfolio
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our {" "}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Some of the of contents we`ve created for our clients.
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