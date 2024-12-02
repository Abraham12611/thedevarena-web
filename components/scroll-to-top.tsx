"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled more than 50% of viewport height
      const halfwayPoint = window.innerHeight * 0.5;
      if (window.scrollY > halfwayPoint) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 left-4 z-50"
        >
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5 text-primary-foreground" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 