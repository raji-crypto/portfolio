"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Project } from "../data/projects";
import DistortedText from "./DistortedText";
import MagneticWrapper from "./MagneticWrapper";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-description"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-gray-900 rounded-none pointer-events-auto"
            >
              {/* Close Button */}
              <MagneticWrapper strength={0.2}>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 z-10 p-2 text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </MagneticWrapper>

              {/* Modal Content */}
              <div className="p-8 md:p-12 lg:p-16">
                {/* Project Number & Founded */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm md:text-base font-medium text-gray-600 tracking-wider">
                    {project.id.toUpperCase()}
                  </div>
                  {project.founded && (
                    <div className="text-sm md:text-base font-medium text-gray-500">
                      Founded {project.founded}
                    </div>
                  )}
                </div>

                {/* Title */}
                <MagneticWrapper strength={0.15}>
                  <DistortedText
                    as="h2"
                    id="project-modal-title"
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8 text-white tracking-tightest block max-w-full leading-tight"
                  >
                    {project.title}
                  </DistortedText>
                </MagneticWrapper>

                {/* Mission */}
                {project.mission && (
                  <MagneticWrapper strength={0.1}>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed font-medium">
                      {project.mission}
                    </p>
                  </MagneticWrapper>
                )}

                {/* Description */}
                <MagneticWrapper strength={0.1}>
                  <p
                    id="project-modal-description"
                    className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 md:mb-12 leading-relaxed font-light"
                  >
                    {project.description}
                  </p>
                </MagneticWrapper>

                {/* Statistics */}
                {project.statistics && project.statistics.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
                    {project.statistics.map((stat, index) => {
                      const isLongText = stat.value.length > 12;
                      return (
                        <MagneticWrapper key={stat.label} strength={0.1}>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="border border-gray-900 p-4 md:p-6 bg-black h-full flex flex-col justify-between overflow-hidden rounded-none"
                          >
                            <div
                              className={`font-black text-white mb-2 break-words leading-tight ${
                                isLongText
                                  ? "text-base sm:text-lg md:text-xl font-bold"
                                  : "text-2xl md:text-3xl lg:text-4xl font-black"
                              }`}
                            >
                              {stat.value}
                            </div>
                            <div className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider mt-auto">
                              {stat.label}
                            </div>
                          </motion.div>
                        </MagneticWrapper>
                      );
                    })}
                  </div>
                )}

                {/* Tags */}
                <div className="mb-8 md:mb-12">
                  <h3 className="text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider mb-4">
                    Technologies & Focus Areas
                  </h3>
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 md:gap-4">
                    {project.tags.map((tag, index) => (
                      <MagneticWrapper key={tag} strength={0.15} wobble={true} className="inline-block">
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="inline-block px-3.5 py-1.5 md:px-5 md:py-2.5 text-xs sm:text-sm md:text-base font-medium bg-gray-900 border border-gray-800 text-gray-300 rounded-none transition-all whitespace-nowrap"
                        >
                          {tag}
                        </motion.span>
                      </MagneticWrapper>
                    ))}
                  </div>
                </div>

                {/* Key Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-8 md:mb-12">
                    <h3 className="text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider mb-4">
                      Key Technologies
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.technologies.map((tech, index) => (
                        <MagneticWrapper key={tech} strength={0.1}>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="flex items-center gap-3 text-base md:text-lg text-gray-400 font-light"
                          >
                            <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                            {tech}
                          </motion.div>
                        </MagneticWrapper>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {project.achievements && project.achievements.length > 0 && (
                  <div className="mb-8 md:mb-12">
                    <h3 className="text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider mb-4">
                      Key Achievements
                    </h3>
                    <div className="space-y-3">
                      {project.achievements.map((achievement, index) => (
                        <MagneticWrapper key={index} strength={0.08}>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="flex items-start gap-3 text-base md:text-lg text-gray-400 font-light"
                          >
                            <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.div>
                        </MagneticWrapper>
                      ))}
                    </div>
                  </div>
                )}

                {/* Impact & Website */}
                <div className="pt-8 md:pt-12 border-t border-gray-900 space-y-4">
                  <MagneticWrapper strength={0.1}>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-500 italic font-light">
                      {project.impact}
                    </p>
                  </MagneticWrapper>
                  {project.website && (
                    <MagneticWrapper strength={0.15}>
                      <motion.a
                        href={project.website.startsWith("http") ? project.website : `https://${project.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center gap-2 text-base md:text-lg text-gray-300 hover:text-white font-medium transition-colors"
                      >
                        <span>Visit {project.website.replace(/^https?:\/\//, "")}</span>
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </motion.svg>
                      </motion.a>
                    </MagneticWrapper>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

