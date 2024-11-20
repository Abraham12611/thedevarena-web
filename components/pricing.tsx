"use client";

import { motion } from "framer-motion";
import { Check, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { useState } from "react";

const basePackages = [
  {
    title: "Developer Portal Essentials",
    monthlyPrice: 1250,
    description: "Launch your developer documentation with everything you need to get started",
    features: [
      "Strategic Content Planning & Research",
      "Technical Content Creation (7,000 words)",
      "Developer-Focused SEO Optimization",
      "Visual Documentation",
      "Expert Technical Review",
      "Professional Technical Editing",
      "48-Hour Revision Turnaround",
    ],
    spotsAvailable: 2,
  },
  {
    title: "Enterprise Documentation Suite",
    monthlyPrice: 3200,
    description: "Complete documentation ecosystem for growing products",
    features: [
      "Comprehensive Content Strategy",
      "Extended Technical Content (15,000 words)",
      "Advanced Technical SEO & Content Distribution",
      "Enhanced Visual Documentation:",
      "Unlimited Technical Reviews",
      "Priority Editing & Revisions",
      "Dedicated Technical Writer",
    ],
    spotsAvailable: 1,
    featured: true,
  },
];

export default function Pricing() {
  const [isQuarterly, setIsQuarterly] = useState(false);

  const calculatePrice = (basePrice: number) => {
    if (!isQuarterly) return basePrice;
    const quarterlyPrice = basePrice * 3;
    const discount = quarterlyPrice * 0.15;
    return Math.round(quarterlyPrice - discount);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
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
            Technical Content {" "}
            <span className="gradient-text">That Fits Your Budget</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
           Flexible plans that scale with your documentation needs. Choose monthly for flexibility or save 15% with quarterly commitments.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-card/80 backdrop-blur-sm p-2 rounded-full border border-border/50">
            <span className={`px-3 py-1 rounded-full transition-colors duration-200 ${!isQuarterly ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isQuarterly}
              onCheckedChange={setIsQuarterly}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`px-3 py-1 rounded-full transition-colors duration-200 ${isQuarterly ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
              Quarterly
              <span className="ml-1 text-xs text-primary">Save 15%</span>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {basePackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`relative group rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 p-8
                ${pkg.featured ? "ring-2 ring-primary/50" : ""}
              `}
            >
              {/* Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold">
                    {formatPrice(calculatePrice(pkg.monthlyPrice))}
                  </span>
                  <span className="text-muted-foreground">
                    /{isQuarterly ? 'quarter' : 'month'}
                  </span>
                </div>
                <p className="text-muted-foreground">{pkg.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Spots Available */}
              <div className="mb-6 flex items-center gap-2">
                <div className="pulse-dot" />
                <span className="text-sm text-muted-foreground">
                  {pkg.spotsAvailable} spot{pkg.spotsAvailable !== 1 ? "s" : ""} available
                </span>
              </div>

              {/* CTA Button */}
              <Button
                className="w-full group relative hover:scale-105 transition-all duration-300 
                  bg-gradient-to-r from-primary via-primary to-accent 
                  hover:shadow-[0_0_30px_rgba(238,243,95,0.3)] hover:border-primary/50"
                size="lg"
              >
                <span className="flex items-center gap-2">
                  Schedule Technical Consultation
                  <Calendar className="w-5 h-5 transition-transform group-hover:rotate-12" />
                </span>
              </Button>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 -z-10 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}