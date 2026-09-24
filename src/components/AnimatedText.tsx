"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
}: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.22, 1, 0.36, 1],
        opacity: { duration: 0.6 }
      }}
      className={className}
    >
      <Component>{children}</Component>
    </motion.div>
  );
}

