"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface FloatingBlobProps {
  size?: number;
  color?: string;
  initialX?: number;
  initialY?: number;
  duration?: number;
  delay?: number;
  glow?: boolean;
}

export default function FloatingBlob({
  size = 200,
  color = "rgba(255, 255, 255, 0.1)",
  initialX = 0,
  initialY = 0,
  duration = 20,
  delay = 0,
  glow = true,
}: FloatingBlobProps) {
  const [, setPosition] = useState({ x: initialX, y: initialY });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: rect.left, y: rect.top });
  }, []);

  return (
    <motion.div
      ref={ref}
      className="pointer-events-none fixed z-0"
      style={{
        width: size,
        height: size,
        left: initialX,
        top: initialY,
      }}
      animate={{
        x: [0, 40, -20, 20, 0],
        y: [0, -30, 50, -15, 0],
        scale: [1, 1.05, 0.95, 1.02, 1],
        rotate: [0, 90, 180],
      }}
      transition={{
        duration: duration * 1.5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="w-full h-full rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 70%)`,
          boxShadow: glow
            ? `0 0 ${size * 0.3}px ${size * 0.2}px ${color}`
            : "none",
          filter: "blur(50px)",
        }}
      />
    </motion.div>
  );
}

