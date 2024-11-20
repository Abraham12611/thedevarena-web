"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, FileText, Code2, CheckCircle2, TrendingUp, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Phone,
    title: "Discovery Call",
    description: "We start with a 30-minute introductory call to understand your unique needs, goals, and target audience. This allows us to ensure we're the right fit before we begin.",
    color: "from-[#FF6B6B] to-[#FFE66D]"
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description: "Together, we'll create a comprehensive content plan tailored to your business objectives. This roadmap keeps our efforts aligned and helps us track progress towards your goals.",
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
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "You'll receive your finalized content on a regular cadence. We welcome your feedback and commit to revising anything that doesn't meet your standards.",
    color: "from-[#45B7D1] to-[#DFFFE2]"
  },
  {
    icon: CreditCard,
    title: "Transparent Billing",
    description: "You'll only be invoiced monthly for the work we've completed. No advance payments, just high-quality technical content that delivers results.",
    color: "from-[#A8E6CF] to-[#DCEDC1]"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Our Process: <span className="gradient-text">Content That Converts</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 p-6
                transition-all duration-300 hover:shadow-[0_0_30px_rgba(238,243,95,0.1)]"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-secondary/50 
                  group-hover:bg-primary/10 transition-colors duration-300"
                >
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 
                  opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your{" "}
            <span className="gradient-text">Developer Content?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Schedule a call to learn how TheDevArena can elevate your technical documentation, 
            tutorials, and more. We're excited to help your SaaS business drive adoption through 
            developer-first content.
          </p>
          <Button
            size="lg"
            className="group relative hover:scale-105 transition-all duration-300 
              bg-gradient-to-r from-primary via-primary to-accent 
              hover:shadow-[0_0_30px_rgba(238,243,95,0.3)] hover:border-primary/50"
          >
            <span className="flex items-center gap-2">
              Schedule Discovery Call
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}