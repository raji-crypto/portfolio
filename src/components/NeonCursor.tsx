"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface CursorTrail {
  x: number;
  y: number;
  id: number;
}

export default function NeonCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<CursorTrail[]>([]);
  const { theme } = useTheme();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  const lastX = useMotionValue(-100);
  const lastY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 800 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const scale = useTransform(
    [velocityX, velocityY],
    ([vx, vy]: number[]) => {
      const speed = Math.sqrt(vx * vx + vy * vy);
      return Math.min(1 + speed * 0.01, 2);
    }
  );

  const stretchX = useTransform(velocityX, (v) => Math.min(Math.abs(v) * 0.1, 0.5));
  const stretchY = useTransform(velocityY, (v) => Math.min(Math.abs(v) * 0.1, 0.5));
  const scaleX = useTransform([scale, stretchX], ([s, sx]: number[]) => s + sx);
  const scaleY = useTransform([scale, stretchY], ([s, sy]: number[]) => s + sy);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let animationFrame: number;
    let lastTime = performance.now();
    let idCounter = 0;

    const updateTrail = () => {
      const currentX = cursorX.get();
      const currentY = cursorY.get();
      
      setTrail((prev) => {
        const newTrail = [
          { x: currentX, y: currentY, id: idCounter++ },
          ...prev.slice(0, 15),
        ];
        return newTrail;
      });

      animationFrame = requestAnimationFrame(updateTrail);
    };

    updateTrail();

    const moveCursor = (e: MouseEvent) => {
      const now = performance.now();
      const deltaTime = (now - lastTime) / 1000;
      lastTime = now;

      const currentX = cursorX.get();
      const currentY = cursorY.get();

      velocityX.set((e.clientX - currentX) / deltaTime);
      velocityY.set((e.clientY - currentY) / deltaTime);

      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      lastX.set(currentX);
      lastY.set(currentY);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);

    // Only detect actual interactive elements, not just classes
    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button']"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animationFrame);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [mounted, cursorX, cursorY, velocityX, velocityY, lastX, lastY]);

  if (!mounted) return null;

  const isDark = theme === "dark";
  const cursorColor = isDark ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)";
  const glowColor = isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)";

  return (
    <>
      {/* Trail */}
      {trail.map((point, index) => {
        const opacity = (15 - index) / 15;
        const size = 4 - index * 0.2;
        return (
          <motion.div
            key={point.id}
            className="pointer-events-none fixed z-[9999] rounded-full"
            style={{
              left: point.x,
              top: point.y,
              width: size,
              height: size,
              x: "-50%",
              y: "-50%",
              background: `radial-gradient(circle, ${cursorColor}, transparent)`,
              opacity: opacity * 0.3,
              filter: `blur(${index * 0.5}px)`,
            }}
          />
        );
      })}

      {/* Main cursor */}
      <motion.div
        className="pointer-events-none fixed z-[10000] rounded-full"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: "-50%",
          y: "-50%",
          width: isHovering ? 24 : 12,
          height: isHovering ? 24 : 12,
          scaleX,
          scaleY,
          background: `radial-gradient(circle, ${cursorColor}, transparent)`,
          border: `2px solid ${cursorColor}`,
          boxShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}`,
          filter: "blur(0.5px)",
        }}
      />
    </>
  );
}

