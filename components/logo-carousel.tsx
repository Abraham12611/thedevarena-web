"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const logos = [
  { src: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", alt: "MongoDB", className: "h-8", invert: true },
  { src: "https://cdn.worldvectorlogo.com/logos/digitalocean-2.svg", alt: "DigitalOcean", className: "h-8", invert: true },
  { src: "https://cdn.worldvectorlogo.com/logos/netlify.svg", alt: "Netlify", className: "h-8", invert: true },
  { src: "https://cdn.worldvectorlogo.com/logos/vercel.svg", alt: "Vercel", className: "h-16", invert: true },
  { src: "/images/logos/vultr-logo.png", alt: "Vultr", className: "h-16", invert: true },
  { src: "/images/logos/freecodecamp-logo.svg", alt: "freeCodeCamp", className: "h-8", invert: true },
  { src: "/images/logos/inplaineglish_logo.png", alt: "inPlainEnglish", className: "h-8", invert: false },
];

export default function LogoCarousel() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      if (row1Ref.current) row1Ref.current.style.animationPlayState = "paused";
      if (row2Ref.current) row2Ref.current.style.animationPlayState = "paused";
    };

    const handleMouseLeave = () => {
      if (row1Ref.current) row1Ref.current.style.animationPlayState = "running";
      if (row2Ref.current) row2Ref.current.style.animationPlayState = "running";
    };

    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    if (row1 && row2) {
      row1.addEventListener("mouseenter", handleMouseEnter);
      row1.addEventListener("mouseleave", handleMouseLeave);
      row2.addEventListener("mouseenter", handleMouseEnter);
      row2.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (row1 && row2) {
        row1.removeEventListener("mouseenter", handleMouseEnter);
        row1.removeEventListener("mouseleave", handleMouseLeave);
        row2.removeEventListener("mouseenter", handleMouseEnter);
        row2.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="w-full overflow-hidden py-10 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="inline-block relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 blur-md rounded-full group-hover:blur-lg transition-all duration-300" />
          <div className="relative px-4 py-1.5 rounded-full border border-primary/50 bg-background/50 backdrop-blur-sm">
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent font-medium">
              Trusted By
            </span>
          </div>
        </div>
      </div>
      <div
        ref={row1Ref}
        className="flex animate-scroll-left"
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="mx-12 flex items-center justify-center min-w-[150px] opacity-70 hover:opacity-100 
              transition-all duration-300 hover:scale-110"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className={`w-auto object-contain ${logo.className} ${
                logo.invert ? 'filter brightness-0 invert' : ''
              }`}
            />
          </div>
        ))}
      </div>
      <div
        ref={row2Ref}
        className="flex animate-scroll-right mt-8"
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="mx-12 flex items-center justify-center min-w-[150px] opacity-70 hover:opacity-100 
              transition-all duration-300 hover:scale-110"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className={`w-auto object-contain ${logo.className} ${
                logo.invert ? 'filter brightness-0 invert' : ''
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}