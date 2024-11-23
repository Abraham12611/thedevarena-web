"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, FileText, Code2, CheckCircle2, TrendingUp, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Phone,
    title: "Discovery Call",
    description: "We start with a 30-minute introductory call to understand your unique needs, goals, and target audience. This allows us to ensure we&apos;re the right fit before we begin.",
    color: "from-[#FF6B6B] to-[#FFE66D]"
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description: "Together, we&apos;ll create a comprehensive content plan tailored to your business objectives. This roadmap keeps our efforts aligned and helps us track progress towards your goals.",
    color: "from-[#4ECDC4] to-[#556270]"
  },
  {
    icon: Code2,
    title: "Agile Content Creation",
    description: "Our in-house team of technical writers - who are developers themselves - methodically craft your content. We leverage the latest SEO best practices and developer-centric storytelling to maximize impact.",
    color: "from-[#6C5CE7] to-[#A8E6CF]"
  },
  {
    icon: CheckCircle2,
    title: "Rigorous Review",
    description: "Before delivery, your content undergoes a multi-stage review process. We validate accuracy, optimize for clarity, and refine the tone to match your brand.",
    color: "from-[#FF8C42] to-[#FFF275]"
  }
];

export default function HowWeWork() {
  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted Technical Content for{" "}
            <span className="gradient-text">Growing SaaS Businesses</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            At TheDevArena, we specialize in creating high-impact technical content for the modern software industry. 
            From web development to cloud engineering, our team of developer-writers transforms complex topics into 
            engaging, developer-friendly content that drives understanding and adoption.
          </p>
        </motion.div>
      </div>
    </div>
  );
}