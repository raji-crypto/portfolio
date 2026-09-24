"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

interface DistortedTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  id?: string;
}

export default function DistortedText({ 
  children, 
  className = "", 
  as: Component = "span",
  id
}: DistortedTextProps) {
  const ref = useRef<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  const words = children.split(" ");
  let globalCharIndex = 0;

  return (
    <Component
      ref={ref as any}
      id={id}
      className={`${className} max-w-full inline-block leading-tight`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      onMouseMove={handleMouseMove}
      style={{ perspective: "1000px" }}
    >
      {words.map((word, wordIdx) => {
        const wordChars = word.split("");
        const startIdx = globalCharIndex;
        globalCharIndex += wordChars.length + 1;

        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {wordChars.map((letter, letterIdx) => {
              const i = startIdx + letterIdx;
              const offsetX = useTransform(x, (latest) => latest * 15 * (i - children.length / 2));
              const offsetY = useTransform(y, (latest) => latest * 15 * Math.sin(i * 0.5));
              const rotateX = useTransform(y, (latest) => latest * 10);
              const rotateY = useTransform(x, (latest) => latest * 10);
              const distance = useTransform([x, y], ([xVal, yVal]: number[]) => Math.abs(xVal) + Math.abs(yVal));
              const scale = useTransform(distance, (d) => 1 + d * 0.1);

              return (
                <motion.span
                  key={letterIdx}
                  style={{
                    display: "inline-block",
                    x: isHovered ? offsetX : 0,
                    y: isHovered ? offsetY : 0,
                    rotateX: isHovered ? rotateX : 0,
                    rotateY: isHovered ? rotateY : 0,
                    scale: isHovered ? scale : 1,
                    transformStyle: "preserve-3d",
                  }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              );
            })}
            {wordIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        );
      })}
    </Component>
  );
}

