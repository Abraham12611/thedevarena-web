"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Clock, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/components/ui/toast/use-toast";
import { submitToAirtable } from "@/lib/airtable";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    detail: "hello@thedevarena.com",
    link: "mailto:hello@thedevarena.com",
  },
  {
    icon: Clock,
    title: "Office Hours",
    description: "Working hours",
    detail: "Mon-Fri, 9AM-6PM EST",
    link: "#",
  },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitToAirtable(formData);

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
        duration: 5000,
      });

      setFormData(initialFormData);
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
            Let's Discuss Your{" "}
            <span className="gradient-text">Documentation Needs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Get in touch to discuss how we can help improve your technical documentation
            and developer experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-6 rounded-xl bg-card/80 backdrop-blur-sm 
                border border-border/50 hover:border-primary/50 
                transition-all duration-300 hover:shadow-[0_0_30px_rgba(238,243,95,0.1)]"
            >
              <div className="relative z-10">
                <div className="mb-4 inline-block p-3 rounded-lg bg-secondary/50 
                  group-hover:bg-primary/10 transition-colors duration-300"
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-2">{item.description}</p>
                <p className="font-medium text-foreground">{item.detail}</p>
              </div>
              
              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br 
                from-primary/20 to-accent/20 opacity-0 
                group-hover:opacity-50 transition-opacity duration-500"
              />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm 
            border border-border/50 hover:border-primary/50 
            transition-all duration-300 group"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="name">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="bg-secondary/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    className="bg-secondary/50"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="company">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your Company"
                  className="bg-secondary/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your documentation needs..."
                  className="bg-secondary/50 min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative hover:scale-105 transition-all duration-300 
                  bg-gradient-to-r from-primary via-primary to-accent 
                  hover:shadow-[0_0_30px_rgba(238,243,95,0.3)] hover:border-primary/50"
                size="lg"
              >
                <span className="flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </span>
              </Button>
            </form>

            {/* Form Background Gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br 
              from-primary/20 to-accent/20 opacity-0 
              group-hover:opacity-50 transition-opacity duration-500 -z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}