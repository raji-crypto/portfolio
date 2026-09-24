"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, ReactNode, useState } from "react";

interface MagneticWrapperProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  wobble?: boolean;
}

export default function MagneticWrapper({ 
  children, 
  className = "", 
  strength = 0.3,
  wobble = true 
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || !isHovered) return;
    const rect = ref.current.getBoundingClientRect();
    // Only activate if cursor is actually within the element bounds
    const isInside = 
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;
    
    if (!isInside) {
      x.set(0);
      y.set(0);
      return;
    }
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        x: xSpring,
        y: ySpring,
        rotate: wobble && !isHovered ? [0, -1, 1, -1, 0] as any : 0,
      }}
      transition={{
        rotate: { duration: 0.5, ease: "easeOut" },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

