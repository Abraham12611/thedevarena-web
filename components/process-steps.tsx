"use client";

import { motion } from "framer-motion";
import {
  Search,
  LayoutPanelTop,
  CodeSquare,
  CheckCircle2,
  Rocket
} from "lucide-react";
import ShineBorder from "@/components/magicui/shine-border";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";


const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We conduct a detailed discovery call to understand your technical product, target audience, and content needs. This sets the foundation for our content strategy and roadmap.",
    icon: Search,
    color: "from-[#FF6B6B] to-[#FFE66D]"
  },
  {
    number: "02",
    title: "Content Plan",
    description: "We collaborate to create a tailored content strategy that aligns with your goals, resonates with your ideal audience, and delivers measurable results. If you already have a plan we can review and optimize it.",
    icon: LayoutPanelTop,
    color: "from-[#4ECDC4] to-[#556270]"
  },
  {
    number: "03",
    title: "Content Creation",
    description: "Our pool of subject matter experts create high-quality, developer-focused content that speaks to your audience, amplifying your brand’s voice and driving meaningful engagement.",
    icon: CodeSquare,
    color: "from-[#6C5CE7] to-[#A8E6CF]"
  },
  {
    number: "04",
    title: "Content Review",
    description: "We conduct thorough reviews to ensure the accuracy, clarity, and relevance of the content. This includes code reviews, API testing, and technical accuracy verification by subject matter experts.",
    icon: CheckCircle2,
    color: "from-[#FF8C42] to-[#FFF275]"
  },
  {
    number: "05",
    title: "Content Delivery",
    description: "Each content piece is delivered on schedule, thoroughly reviewed, and ready for publishing. We ensure every detail aligns with your goals, and if revisions are needed, we’ll work until you’re completely satisfied.",
    icon: Rocket,
    color: "from-[#45B7D1] to-[#DFFFE2]"
  }
];

export default function ProcessSteps() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* Project Scope Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-block mb-6"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 blur-md rounded-full group-hover:blur-lg transition-all duration-300" />
              <div className="relative px-4 py-1.5 rounded-full border border-primary/50 bg-background/50 backdrop-blur-sm">
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent font-medium">
                  Project Scope
                </span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Proven {" "}
            <span className="gradient-text">Content Framework</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We follow a battle-tested process that combines technical expertise with clear writing. The result? Content that developers trust and actually want to use.
          </p>
        </motion.div>

        <div className="relative">
          <div className="relative max-w-[900px] mx-auto">
            {/* Cards */}
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                className={`relative ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                } mb-32 last:mb-0 w-full md:w-[400px]`}
                style={{
                  zIndex: steps.length - index
                }}
              >
                <NeonGradientCard 
                  borderSize={1.5}
                  borderRadius={24}
                  neonColors={{
                    firstColor: step.color.split(" ")[0].replace("from-[", "").replace("]", ""),
                    secondColor: step.color.split(" ")[1].replace("to-[", "").replace("]", "")
                  }}
                  className="max-w-sm items-center justify-center text-center transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                >
                  <div className="relative p-8 rounded-3xl bg-card/80 backdrop-blur-sm transition-all duration-300 group">
                    {/* Content wrapper */}
                    <div className="relative">
                      {/* Number and Title */}
                      <div className="mb-6">
                        <span className="text-sm font-medium text-muted-foreground block mb-2 transition-colors group-hover:text-primary">
                          Step {step.number}
                        </span>
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-xl bg-gradient-to-br ${step.color} transition-transform duration-300 group-hover:scale-110`}>
                            <step.icon className="w-5 h-5 text-background" />
                          </div>
                          <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">{step.title}</h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed transition-colors group-hover:text-muted-foreground/80">
                        {step.description}
                      </p>

                      {/* Decorative gradient orb */}
                      <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br ${step.color} opacity-20 blur-2xl transition-all duration-300 group-hover:opacity-30 group-hover:scale-125`} />
                    </div>
                  </div>
                </NeonGradientCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}