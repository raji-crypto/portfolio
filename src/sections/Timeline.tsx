"use client";

import SectionWrapper from "../components/SectionWrapper";
import AnimatedText from "../components/AnimatedText";
import TimelineItem from "../components/TimelineItem";
import { timelineEvents } from "../data/timeline";
import DistortedText from "../components/DistortedText";
import MagneticWrapper from "../components/MagneticWrapper";
import FloatingBlob from "../components/FloatingBlob";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.99, 1.01]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);

  return (
    <SectionWrapper id="timeline" className="bg-black relative overflow-hidden">
      {/* Floating Blobs */}
      <FloatingBlob size={260} color="rgba(150, 150, 255, 0.05)" initialX={300} initialY={400} duration={44} delay={2} />
      <FloatingBlob size={240} color="rgba(255, 200, 100, 0.04)" initialX={800} initialY={550} duration={40} delay={5} />

      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div style={{ scale, opacity }}>
          <MagneticWrapper strength={0.15}>
            <DistortedText
              as="h2"
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-8 md:mb-12 text-white tracking-tightest block whitespace-nowrap"
            >
              Career Timeline
            </DistortedText>
          </MagneticWrapper>
        </motion.div>

        <AnimatedText delay={0.1} className="mb-16 md:mb-24">
          <MagneticWrapper strength={0.1}>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 max-w-3xl font-light cursor-hover">
              Milestones in academic rigor, hands-on engineering, and professional growth
            </p>
          </MagneticWrapper>
        </AnimatedText>

        <div className="relative max-w-5xl">
          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={event.year}
              event={event}
              index={index}
              isLast={index === timelineEvents.length - 1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

