"use client";

import { motion } from "framer-motion";
import { Check, Calendar, Video, GhostIcon, BookText, FileText, Presentation, Braces, PenTool, LineChart } from "lucide-react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";

const basePackages = [
  {
    title: "Essential",
    monthlyPrice: 2227,
    description: "Launch your content strategy with everything you need to get started",
    monthlyWords: 17500,
    features: [
      "Strategic Content Planning & Research",
      (isQuarterly: boolean) => `Technical Content Creation (${isQuarterly ? '52,500' : '17,500'} words)`,
      "Developer-Focused SEO Optimization",
      "Visual Documentation",
      "Expert Technical Review",
      "Professional Technical Editing",
      "48-Hour Revision Turnaround",
    ],
    spotsAvailable: 3,
  },
  {
    title: "Suite",
    monthlyPrice: 4454,
    description: "Complete content strategy for growing products",
    monthlyWords: 30000,
    features: [
      "Comprehensive Content Strategy",
      (isQuarterly: boolean) => `Extended Technical Content (${isQuarterly ? '90,000' : '30,000'} words)`,
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

const addonServices = [
  {
    title: "Video Tutorials",
    description: "Professional screencast tutorials and product demos with expert narration",
    icon: Video,
    price: "from $997",
  },
  {
    title: "Executive Ghostwriting",
    description: "Thought leadership content written in your voice for blogs and publications",
    icon: GhostIcon,
    price: "from $797",
  },
  {
    title: "Technical Ebooks",
    description: "Comprehensive, well-researched ebooks that establish authority",
    icon: BookText,
    price: "from $2,497",
  },
  {
    title: "Whitepapers",
    description: "In-depth technical whitepapers with original research and insights",
    icon: FileText,
    price: "from $1,997",
  },
  {
    title: "Technical Presentations",
    description: "Engaging slide decks and presentation materials for conferences",
    icon: Presentation,
    price: "from $997",
  },
  {
    title: "API Documentation",
    description: "Detailed API documentation with interactive examples",
    icon: Braces,
    price: "from $1,497",
  },
  {
    title: "UX Writing",
    description: "Microcopy and interface content that enhances user experience",
    icon: PenTool,
    price: "from $797",
  },
  {
    title: "Analytics Reports",
    description: "Documentation performance analysis and optimization reports",
    icon: LineChart,
    price: "from $997",
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
          {/* Add Badge */}
          <div className="inline-block mb-6 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 blur-md rounded-full group-hover:blur-lg transition-all duration-300" />
            <div className="relative px-4 py-1.5 rounded-full border border-primary/50 bg-background/50 backdrop-blur-sm">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent font-medium">
                Pricing
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Content {" "}
            <span className="gradient-text">That Fits Your Budget</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
           Flexible plans that scale with your content needs. Choose monthly for flexibility or save 15% with quarterly commitments.
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
              className="group relative"
            >
              <div className={`relative rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 p-8
                transition-all duration-500 ease-out
                group-hover:shadow-[0_0_50px_rgba(238,243,95,0.15)]
                group-hover:border-primary/30
                group-hover:-translate-y-1
                ${pkg.featured ? "ring-2 ring-primary/50" : ""}`}
              >
                {/* Content */}
                <div className="mb-6 relative z-10">
                  <h3 className="text-2xl font-bold mb-2 transition-colors duration-300
                    group-hover:text-primary/90">{pkg.title}</h3>
                  <div className="flex items-baseline gap-2 mb-4 transition-all duration-300
                    group-hover:translate-x-1">
                    <span className="text-4xl font-bold">
                      {formatPrice(calculatePrice(pkg.monthlyPrice))}
                    </span>
                    <span className="text-muted-foreground">
                      /{isQuarterly ? 'quarter' : 'month'}
                    </span>
                  </div>
                  <p className="text-muted-foreground transition-colors duration-300
                    group-hover:text-muted-foreground/80">{pkg.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 relative z-10">
                  {pkg.features.map((feature, i) => (
                    <li key={i} 
                      className="flex items-start gap-3 transition-all duration-300 ease-out
                        hover:translate-x-1">
                      <Check className="w-5 h-5 text-primary mt-0.5 transition-transform duration-300
                        group-hover:scale-110" />
                      <span className="text-muted-foreground transition-colors duration-300
                        group-hover:text-muted-foreground/80">
                        {typeof feature === 'function' ? feature(isQuarterly) : feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Spots Available */}
                <div className="mb-6 flex items-center gap-2 relative z-10">
                  <div className="pulse-dot transition-all duration-300
                    group-hover:scale-110" />
                  <span className="text-sm text-muted-foreground transition-all duration-300
                    group-hover:text-primary/80">
                    {pkg.spotsAvailable} spot{pkg.spotsAvailable !== 1 ? "s" : ""} available
                  </span>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full group/button relative z-10
                    transition-all duration-300
                    bg-gradient-to-r from-primary via-primary to-accent 
                    hover:shadow-[0_0_30px_rgba(238,243,95,0.3)]
                    hover:border-primary/50
                    hover:scale-[1.02]"
                  size="lg"
                >
                  <span className="flex items-center gap-2">
                    Schedule Discovery Call
                    <Calendar className="w-5 h-5 transition-all duration-300 
                      group-hover/button:rotate-12" />
                  </span>
                </Button>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-background 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none
                  mix-blend-overlay" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add Addon Services Button and Dialog */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-16"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="group relative px-6 py-2
                  border border-primary/50 hover:border-primary
                  bg-background/50 backdrop-blur-sm
                  transition-all duration-300
                  hover:shadow-[0_0_30px_rgba(238,243,95,0.2)]"
              >
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  View Addon Services
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center mb-6">
                  Addon Services
                </DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {addonServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm 
                      border border-border/50 hover:border-primary/50 
                      transition-all duration-300"
                  >
                    <div className="relative z-10">
                      <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary 
                        transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 group-hover:text-foreground/80 
                        transition-colors duration-300">
                        {service.description}
                      </p>
                      <p className="text-primary font-semibold">{service.price}</p>
                    </div>
                    
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br 
                      from-primary/5 via-accent/5 to-background 
                      opacity-0 group-hover:opacity-100 
                      transition-opacity duration-500 pointer-events-none" 
                    />
                  </motion.div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
}