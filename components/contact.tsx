"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 blur-xl opacity-50" />
              <div className="relative bg-card/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl text-center">
                {/* Emoji Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 relative">
                    <div className="absolute -top-2 right-0 w-6 h-6 bg-yellow-300 rounded-full animate-pulse" />
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-3xl">
                        👩‍💻
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Have more questions?
                </h2>
                <p className="text-xl font-bold mb-8">
                  Book a FREE intro call.
                </p>

                {/* CTA Button */}
                <a
                  href="https://calendly.com/your-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-primary px-8 py-4 text-background font-medium hover:bg-primary/90 transition-colors duration-200"
                >
                  <CalendarDays className="w-5 h-5" />
                  Claim Your Free Strategy Call
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}