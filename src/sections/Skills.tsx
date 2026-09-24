"use client";

import SectionWrapper from "../components/SectionWrapper";
import AnimatedText from "../components/AnimatedText";
import { motion, useScroll, useTransform } from "framer-motion";
import { skills, skillCategories } from "../data/skills";
import DistortedText from "../components/DistortedText";
import MagneticWrapper from "../components/MagneticWrapper";
import FloatingBlob from "../components/FloatingBlob";
import Card3D from "../components/3DCard";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.99, 1.01]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);

  return (
    <SectionWrapper id="skills" className="bg-black relative overflow-hidden">
      {/* Floating Blobs */}
      <FloatingBlob size={280} color="rgba(200, 100, 255, 0.06)" initialX={150} initialY={500} duration={43} delay={1.5} />
      <FloatingBlob size={220} color="rgba(100, 255, 200, 0.05)" initialX={950} initialY={300} duration={41} delay={4} />

      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div style={{ scale, opacity }}>
          <MagneticWrapper strength={0.15}>
            <DistortedText
              as="h2"
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black mb-8 md:mb-12 text-white tracking-tightest block"
            >
              Expertise
            </DistortedText>
          </MagneticWrapper>
        </motion.div>

        <AnimatedText delay={0.1} className="mb-16 md:mb-24 flex justify-center w-full">
          <MagneticWrapper strength={0.1}>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-light cursor-hover whitespace-nowrap text-center">
              Core competencies across AI/ML engineering, NLP, and production backend services
            </p>
          </MagneticWrapper>
        </AnimatedText>

        <div className="space-y-12 md:space-y-16">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = skills.filter((skill) => skill.category === category);

            return (
              <Card3D key={category} intensity={10} className="p-6 md:p-8 border border-gray-900/50 bg-black/40">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ type: "spring", damping: 25, stiffness: 200, delay: categoryIndex * 0.1 }}
                  className="pl-2 sm:pl-4 md:pl-6 mb-5"
                >
                  <MagneticWrapper strength={0.12} className="inline-block">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tightest cursor-hover">
                      {category}
                    </h3>
                  </MagneticWrapper>
                </motion.div>
                <div className="flex flex-wrap gap-3 md:gap-4 pl-2 sm:pl-4 md:pl-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <MagneticWrapper key={skill.id} strength={0.15} wobble={true} className="inline-block">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{
                          type: "spring",
                          damping: 20,
                          stiffness: 300,
                          delay: categoryIndex * 0.1 + skillIndex * 0.03,
                        }}
                        whileHover={{ scale: 1.05, y: -4, x: 2 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block px-4 py-2 md:px-6 md:py-3 bg-black border border-gray-900 text-gray-300 rounded-none text-sm md:text-base font-medium hover:border-gray-800 transition-all cursor-pointer cursor-hover whitespace-nowrap"
                      >
                        {skill.name}
                      </motion.span>
                    </MagneticWrapper>
                  ))}
                </div>
              </Card3D>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

