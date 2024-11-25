"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

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
            Meet Our Expert{" "}
            <span className="gradient-text">Documentation Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Experienced technical writers and content strategists dedicated to
            creating exceptional developer experiences
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5
              }}
            >
              <NeonGradientCard
                borderSize={1.5}
                borderRadius={24}
                neonColors={{
                  firstColor: "hsl(var(--primary))",
                  secondColor: "hsl(var(--accent))"
                }}
                className="h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              >
                <div className="p-6 space-y-4">
                  {/* Profile Image */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium mt-1">{member.role}</p>
                    <p className="text-muted-foreground text-sm mt-2">
                      {member.bio}
                    </p>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3 pt-4">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const Icon = socialIcons[platform as keyof typeof socialIcons];
                      return (
                        <Button
                          key={platform}
                          variant="outline"
                          size="icon"
                          className="w-8 h-8 rounded-full border border-muted-foreground/20 bg-transparent hover:bg-transparent hover:border-primary transition-colors duration-300"
                          asChild
                        >
                          <a 
                            href={url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </NeonGradientCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}