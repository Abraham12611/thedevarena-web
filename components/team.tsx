"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

const team = [
  {
    name: "Abraham Dahunsi",
    role: "Lead Technical Writer",
    bio: "Full-stack developer and technical writer",
    image: "https://i.postimg.cc/L593G1z9/Profile-pic.jpg",
    social: {
      twitter: "https://twitter.com/abrahamdahunsi",
      github: "https://github.com/Abraham12611",
      website: "https://www.abrahamdahunsi.com",
    },
    specialties: ["Content Strategy", "Technical Editing", "Documentation Testing"],
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
  website: Globe,
};

const teamGradients = [
  { color: "from-[#FF6B6B] to-[#FFE66D]" }, // Warm gradient
  { color: "from-[#4ECDC4] to-[#556270]" }, // Cool gradient
  { color: "from-[#6C5CE7] to-[#A8E6CF]" }, // Purple gradient
  { color: "from-[#45B7D1] to-[#DFFFE2]" }, // Blue gradient
];

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
                  firstColor: teamGradients[index].color.split(" ")[0].replace("from-[", "").replace("]", ""),
                  secondColor: teamGradients[index].color.split(" ")[1].replace("to-[", "").replace("]", "")
                }}
                className="h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              >
                <div className={`relative p-6 rounded-3xl bg-card/80 backdrop-blur-sm ${
                  member.name !== "Abraham Dahunsi" ? "blur-[8px]" : ""
                }`}>
                  {/* Decorative gradient orb */}
                  <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br ${teamGradients[index].color} opacity-20 blur-2xl transition-all duration-300 group-hover:opacity-30 group-hover:scale-125`} />

                  {/* Profile Image */}
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-border/50">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 96px) 100vw, 96px"
                      />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center relative z-10">
                    <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                      {member.name}
                    </h3>
                    <p className={`font-medium mt-1 bg-gradient-to-r ${teamGradients[index].color} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm mt-2 transition-colors group-hover:text-muted-foreground/80">
                      {member.bio}
                    </p>
                  </div>

                  {/* Specialties with solid background */}
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary backdrop-blur-sm transition-all duration-300 hover:scale-105"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3 pt-4 relative z-10">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const Icon = socialIcons[platform as keyof typeof socialIcons];
                      return (
                        <Button
                          key={platform}
                          variant="outline"
                          size="icon"
                          className="w-8 h-8 rounded-full border border-border/50 bg-transparent hover:bg-transparent hover:border-primary transition-all duration-300"
                          asChild
                        >
                          <a 
                            href={url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <Icon className="w-3.5 h-3.5 text-muted-foreground hover:text-primary transition-colors duration-300" />
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