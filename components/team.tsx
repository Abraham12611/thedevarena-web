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
            Meet Our Expert{" "}
            <span className="gradient-text">Documentation Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Experienced technical writers and content strategists dedicated to creating
            exceptional developer experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 
                overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(238,243,95,0.1)]"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

                  {/* Specialties */}
                  <div className="space-y-2 mb-4">
                    {member.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="inline-block text-xs mr-2 px-2 py-1 rounded-full 
                          bg-secondary/50 text-muted-foreground"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const Icon = socialIcons[platform as keyof typeof socialIcons];
                      return (
                        <Button
                          key={platform}
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full hover:text-primary hover:bg-secondary/80"
                          asChild
                        >
                          <a href={url} target="_blank" rel="noopener noreferrer">
                            <Icon className="h-4 w-4" />
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 
                  opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"
                />
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
          <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented technical writers and documentation engineers
            to join our team. If you're passionate about creating exceptional developer
            experiences, we'd love to hear from you.
          </p>
          <Button
            className="group relative hover:scale-105 transition-all duration-300 
              bg-gradient-to-r from-primary via-primary to-accent 
              hover:shadow-[0_0_30px_rgba(238,243,95,0.3)] hover:border-primary/50"
            size="lg"
          >
            View Open Positions
          </Button>
        </motion.div>
      </div>
    </section>
  );
}