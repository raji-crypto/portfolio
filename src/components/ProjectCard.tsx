"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Project } from "../data/projects";
import Card3D from "./3DCard";
import MagneticWrapper from "./MagneticWrapper";
import DistortedText from "./DistortedText";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projectNumber = String(index + 1).padStart(3, "0");

  return (
    <>
      <Card3D intensity={18}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ type: "spring", damping: 25, stiffness: 200, delay: index * 0.1 }}
          className="group relative bg-black border border-gray-900 rounded-none p-8 md:p-12 hover:border-gray-800 transition-all duration-700 overflow-hidden cursor-pointer magnetic focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          tabIndex={0}
          role="article"
          aria-label={`Project: ${project.title}`}
        >
        {/* Enhanced gradient overlay on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
          initial={false}
        />
        
        <div className="relative z-10">
          {/* Project Number */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
            className="text-sm md:text-base font-medium text-gray-600 mb-4 tracking-wider"
          >
            {projectNumber}
          </motion.div>

          <MagneticWrapper strength={0.12}>
            <DistortedText
              as="h3"
              className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6 text-white group-hover:text-gray-200 transition-colors duration-500 tracking-tightest block cursor-hover max-w-full leading-tight"
            >
              {project.title}
            </DistortedText>
          </MagneticWrapper>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed font-light">
            {project.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-8">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-block px-3 py-1.5 text-xs md:text-sm font-medium bg-gray-900 border border-gray-800 text-gray-300 rounded-none transition-all whitespace-nowrap"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          <p className="text-sm md:text-base text-gray-500 italic font-light mb-6">
            {project.impact}
          </p>

          {/* Explore Button */}
          <MagneticWrapper strength={0.2} wobble={true}>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm md:text-base font-medium text-white group-hover:text-gray-200 transition-colors duration-500 cursor-hover focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
              aria-label={`Explore ${project.title} project`}
            >
            <span>Explore</span>
            <motion.svg
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </motion.button>
          </MagneticWrapper>
        </div>
      </motion.div>
      </Card3D>

      {/* Project Modal */}
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

