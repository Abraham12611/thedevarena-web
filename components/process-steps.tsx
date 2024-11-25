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

const steps = [
  {
    number: "01",
    title: "Technical Discovery & Scope",
    description: "We start with a deep dive into your API, SDK, or technical product. Our team analyzes your existing documentation and codebase, identifies target developer personas and use cases, and delivers a detailed content strategy and documentation plan.",
    icon: Search,
    color: "from-[#FF6B6B] to-[#FFE66D]"
  },
  {
    number: "02",
    title: "Information Architecture",
    description: "Building the right structure is crucial for developer experience. We create documentation site information hierarchy, content type definitions, and navigation flows optimized for developer workflows.",
    icon: LayoutPanelTop,
    color: "from-[#4ECDC4] to-[#556270]"
  },
  {
    number: "03",
    title: "Content Prototyping",
    description: "We develop initial content samples to validate our approach with sample documentation in your preferred format, interactive code examples and API request/response pairs, and integration with your existing documentation tools.",
    icon: CodeSquare,
    color: "from-[#6C5CE7] to-[#A8E6CF]"
  },
  {
    number: "04",
    title: "Technical Review & Iteration",
    description: "Quality assurance with a focus on technical accuracy including code review by senior developers, testing of all sample code and API calls, and technical accuracy verification by subject matter experts.",
    icon: CheckCircle2,
    color: "from-[#FF8C42] to-[#FFF275]"
  },
  {
    number: "05",
    title: "Deployment & Maintenance",
    description: "We ensure your documentation stays current and valuable through integration with your CI/CD pipeline, version control and change management, and ongoing updates based on developer feedback.",
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
            <span className="gradient-text">Documentation Framework</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            From API specs to interactive tutorials, we follow a battle-tested process that combines technical expertise with clear writing. The result? Documentation that developers trust and actually want to use.
          </p>
        </motion.div>

        <div className="relative">
          <div className="relative max-w-[900px] mx-auto">
            {/* Connecting Lines Container */}
            <div className="absolute inset-0 hidden md:block">
              {steps.map((_, index) => (
                index < steps.length - 1 && (
                  <svg
                    key={`line-${index}`}
                    className="absolute"
                    style={{
                      top: `${index * 220 + 100}px`,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '500px',
                      height: '120px',
                    }}
                    viewBox="0 0 500 120"
                  >
                    <path
                      d={
                        index % 2 === 0
                          ? "M50,10 C150,10 350,110 450,110"
                          : "M450,10 C350,10 150,110 50,110"
                      }
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      className="opacity-30"
                    />
                  </svg>
                )
              ))}
            </div>

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
                  index % 2 === 0 ? "ml-0 mr-auto" : "ml-auto mr-0"
                } mb-32 last:mb-0 w-full md:w-[400px] group`}
                style={{
                  zIndex: steps.length - index
                }}
              >
                <ShineBorder
                  color={[
                    step.color.split(" ")[0].replace("from-", ""),
                    step.color.split(" ")[1].replace("to-", ""),
                    "hsl(var(--primary))"
                  ]}
                  className="rounded-3xl"
                >
                  <div className="relative p-8 rounded-3xl overflow-hidden">
                    {/* Glassmorphism effects */}
                    <div className="absolute inset-0 bg-background/20 backdrop-blur-xl" />
                    <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/20" />

                    {/* Content wrapper */}
                    <div className="relative">
                      {/* Number and Title */}
                      <div className="mb-6">
                        <span className="text-sm font-medium text-muted-foreground block mb-2">
                          Step {step.number}
                        </span>
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-xl bg-gradient-to-br ${step.color}`}>
                            <step.icon className="w-5 h-5 text-background" />
                          </div>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>

                      {/* Decorative gradient orb */}
                      <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br ${step.color} opacity-20 blur-2xl`} />
                    </div>
                  </div>
                </ShineBorder>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}