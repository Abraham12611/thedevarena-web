"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of documentation do you specialize in?",
    answer: "We specialize in developer-focused content, including Articles, Blogs, integration tutorials, troubleshooting docs, and user manuals. Our expertise ensures clear, concise, and technically accurate content tailored to your product."
  },
  {
    question: "How long does a typical documentation project take?",
    answer: "Project timelines vary based on scope and complexity. A basic documentation project typically takes between a few days to a week, while a comprehensive e-book or whitepaper might take 4-6 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you work with existing documentation tools?",
    answer: "Yes, we integrate with popular documentation tools and platforms including Swagger/OpenAPI, GitBook, ReadTheDocs, Docusaurus, and custom documentation solutions. We can also recommend and implement the best documentation setup for your needs."
  },
  {
    question: "How do you ensure technical accuracy?",
    answer: "We follow a rigorous review process that includes code testing, technical accuracy verification by subject matter experts, and multiple rounds of review. All code samples are tested in real environments, and API documentation is validated against actual endpoints."
  },
  {
    question: "Can you help with documentation strategy?",
    answer: "Absolutely! We provide comprehensive content strategy services, including content planning, community research, style guides, and developer experience optimization. We'll help you create a content roadmap that aligns with your product goals."
  },
  {
    question: "Do you offer ongoing content maintenance?",
    answer: "Yes, we offer maintenance packages to keep your content up-to-date with product changes. This includes regular reviews, updates for new features, and continuous improvement based on developer feedback and usage analytics at extra charge."
  },
  {
    question: "What makes your technical writing services different?",
    answer: "We have a talent pool consisting of subject matter experts, technical editors, and professional writers. We focus on developer experience, ensuring content is not just accurate but also practical and easy to use. We also emphasize modern documentation practices like interactive examples and testing."
  },
];

export default function FAQs() {
  return (
    <section id="faqs" className="py-24 relative overflow-hidden">
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
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Common questions about our technical documentation services and process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group relative rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm px-6 
                  transition-all duration-500 ease-out
                  hover:shadow-[0_0_50px_rgba(238,243,95,0.15)]
                  hover:border-primary/30
                  hover:-translate-y-1
                  data-[state=open]:bg-secondary/50
                  data-[state=open]:shadow-[0_0_30px_rgba(238,243,95,0.15)]
                  data-[state=open]:border-primary/30"
              >
                <AccordionTrigger 
                  className="py-6 text-left hover:no-underline
                    transition-all duration-300 ease-out"
                >
                  <div className="flex items-center gap-3 text-lg font-semibold pr-4
                    transition-colors duration-300
                    group-hover:text-primary/90
                    group-data-[state=open]:text-primary">
                    {faq.question}
                  </div>
                </AccordionTrigger>
                
                <AccordionContent 
                  className="pb-6 text-muted-foreground
                    transition-all duration-300
                    group-hover:text-muted-foreground/80"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                </AccordionContent>

                {/* Enhanced Hover/Active Gradient */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 via-accent/5 to-background 
                  opacity-0 transition-all duration-700 ease-out -z-10 mix-blend-overlay
                  group-hover:opacity-100
                  group-data-[state=open]:opacity-100" />
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}