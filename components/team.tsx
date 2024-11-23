"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const team = [
  {
    name: "Sarah Chen",
    role: "Lead Technical Writer",
    bio: "10+ years documenting complex APIs and developer tools",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    specialties: ["API Documentation", "Developer Experience", "Technical Architecture"],
  },
  {
    name: "Marcus Rodriguez",
    role: "Documentation Engineer",
    bio: "Full-stack developer turned technical writer, specializing in API integration guides",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    specialties: ["SDK Documentation", "Code Examples", "Integration Guides"],
  },
  {
    name: "Emily Parker",
    role: "Content Strategist",
    bio: "Creating developer-first content strategies for enterprise platforms",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    specialties: ["Content Strategy", "Information Architecture", "User Research"],
  },
  {
    name: "David Kim",
    role: "Technical Editor",
    bio: "Ensuring clarity and accuracy in technical documentation",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    specialties: ["Technical Editing", "Style Guides", "Documentation Testing"],
  },
];

const socialIcons = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
};

export default function Team() {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Expert{" "}
            <span className="gradient-text">Documentation Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Experienced technical writers and content strategists dedicated to
            creating exceptional developer experiences
          </p>
        </motion.div>
      </div>
    </section>
  );
}