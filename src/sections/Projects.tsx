"use client";

import SectionWrapper from "../components/SectionWrapper";
import AnimatedText from "../components/AnimatedText";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import DistortedText from "../components/DistortedText";
import MagneticWrapper from "../components/MagneticWrapper";
import FloatingBlob from "../components/FloatingBlob";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.99, 1.01]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <SectionWrapper id="projects" className="bg-black relative overflow-hidden">
      {/* Floating Blobs */}
      <FloatingBlob size={300} color="rgba(100, 200, 255, 0.06)" initialX={200} initialY={400} duration={42} delay={0.5} />
      <FloatingBlob size={250} color="rgba(255, 100, 150, 0.05)" initialX={1000} initialY={600} duration={40} delay={2.5} />

      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div style={{ scale, opacity }}>
          <MagneticWrapper strength={0.15}>
            <DistortedText
              as="h2"
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-8 md:mb-12 text-white tracking-tightest block whitespace-nowrap"
            >
              Featured Projects
            </DistortedText>
          </MagneticWrapper>
        </motion.div>

        <AnimatedText delay={0.1} className="mb-16 md:mb-24 flex justify-center w-full">
          <MagneticWrapper strength={0.1}>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-light cursor-hover whitespace-nowrap text-center">
              Intelligent systems and deep learning models built for measurable real-world value
            </p>
          </MagneticWrapper>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-900">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

