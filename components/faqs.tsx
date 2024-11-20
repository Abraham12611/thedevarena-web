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
    answer: "We specialize in technical documentation for APIs, SDKs, developer tools, and enterprise software. This includes API references, integration guides, tutorials, code samples, and developer portals. Our expertise covers both user-facing documentation and internal technical specifications."
  },
  {
    question: "How long does a typical documentation project take?",
    answer: "Project timelines vary based on scope and complexity. A basic API documentation project typically takes 2-3 weeks, while a comprehensive developer portal with multiple integration guides might take 4-6 weeks. We'll provide a detailed timeline during our initial consultation."
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
    answer: "Absolutely! We provide comprehensive documentation strategy services, including content planning, information architecture, style guides, and developer experience optimization. We'll help you create a documentation roadmap that aligns with your product goals."
  },
  {
    question: "Do you offer ongoing documentation maintenance?",
    answer: "Yes, we offer maintenance packages to keep your documentation up-to-date with product changes. This includes regular reviews, updates for new features, and continuous improvement based on developer feedback and usage analytics."
  },
  {
    question: "What makes your technical writing services different?",
    answer: "Our team combines deep technical expertise with clear communication skills. We focus on developer experience, ensuring documentation is not just accurate but also practical and easy to use. We also emphasize modern documentation practices like interactive examples and automated testing."
  },
  {
    question: "How do you handle API documentation for multiple versions?",
    answer: "We implement version control strategies for API documentation, including clear version switching, change logs, and migration guides. We can set up automated processes to keep multiple versions in sync and highlight version-specific features or breaking changes."
  }
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
                className="group relative rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm px-6 data-[state=open]:bg-secondary/50"
              >
                <AccordionTrigger className="py-6 text-left hover:no-underline">
                  <div className="flex items-center gap-3 text-lg font-semibold pr-4">
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>

                {/* Hover/Active Gradient */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-50 group-data-[state=open]:opacity-50 transition-opacity duration-500 -z-10" />
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}