"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Project } from "../data/projects";
import DistortedText from "./DistortedText";
import MagneticWrapper from "./MagneticWrapper";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scrolling completely when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!project || !mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop with heavy blur and locked background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl touch-none cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col bg-black border border-gray-800 shadow-2xl rounded-xl overflow-hidden pointer-events-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-description"
          >
            {/* Sticky Header with Project Identifier & Prominent Close Button */}
            <div className="sticky top-0 z-50 flex items-center justify-between px-6 sm:px-8 md:px-12 py-4 bg-black/95 backdrop-blur-xl border-b border-gray-800/80">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  {project.id.toUpperCase()}
                </span>
                {project.founded && (
                  <span className="hidden sm:inline-block text-xs font-medium text-gray-500 border-l border-gray-800 pl-3">
                    Founded {project.founded}
                  </span>
                )}
              </div>

              {/* Prominent High-Contrast Close Button */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.08, rotate: 90 }}
                whileTap={{ scale: 0.92 }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900/90 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-700 shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close modal (Esc)"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto p-6 sm:p-8 md:p-12 lg:p-14 space-y-8">
              {/* Title */}
              <MagneticWrapper strength={0.12}>
                <DistortedText
                  as="h2"
                  id="project-modal-title"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tightest block max-w-full leading-tight"
                >
                  {project.title}
                </DistortedText>
              </MagneticWrapper>

              {/* Mission */}
              {project.mission && (
                <MagneticWrapper strength={0.08}>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-medium">
                    {project.mission}
                  </p>
                </MagneticWrapper>
              )}

              {/* Description */}
              <MagneticWrapper strength={0.08}>
                <p
                  id="project-modal-description"
                  className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed font-light"
                >
                  {project.description}
                </p>
              </MagneticWrapper>

              {/* Statistics */}
              {project.statistics && project.statistics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {project.statistics.map((stat, index) => {
                    const isLongText = stat.value.length > 12;
                    return (
                      <MagneticWrapper key={stat.label} strength={0.1}>
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.08 }}
                          className="border border-gray-800 p-4 md:p-6 bg-gray-950/60 h-full flex flex-col justify-between rounded-lg"
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
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Technologies & Focus Areas
                </h3>
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  {project.tags.map((tag, index) => (
                    <MagneticWrapper key={tag} strength={0.12} wobble={true} className="inline-block">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25, delay: index * 0.04 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="inline-block px-3.5 py-1.5 md:px-4 md:py-2 text-xs sm:text-sm font-medium bg-gray-900 border border-gray-800 text-gray-300 rounded-md transition-all whitespace-nowrap"
                      >
                        {tag}
                      </motion.span>
                    </MagneticWrapper>
                  ))}
                </div>
              </div>

              {/* Key Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Key Technologies
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.technologies.map((tech, index) => (
                      <MagneticWrapper key={tech} strength={0.08}>
                        <motion.div
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.25, delay: index * 0.04 }}
                          className="flex items-center gap-3 text-base md:text-lg text-gray-300 font-light"
                        >
                          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                          {tech}
                        </motion.div>
                      </MagneticWrapper>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {project.achievements && project.achievements.length > 0 && (
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Key Achievements
                  </h3>
                  <div className="space-y-3">
                    {project.achievements.map((achievement, index) => (
                      <MagneticWrapper key={index} strength={0.06}>
                        <motion.div
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.25, delay: index * 0.04 }}
                          className="flex items-start gap-3 text-base md:text-lg text-gray-300 font-light"
                        >
                          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.div>
                      </MagneticWrapper>
                    ))}
                  </div>
                </div>
              )}

              {/* Impact & Website */}
              <div className="pt-6 border-t border-gray-800 space-y-4">
                <MagneticWrapper strength={0.08}>
                  <p className="text-base md:text-lg lg:text-xl text-gray-400 italic font-light">
                    {project.impact}
                  </p>
                </MagneticWrapper>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  {project.website ? (
                    <MagneticWrapper strength={0.12}>
                      <motion.a
                        href={project.website.startsWith("http") ? project.website : `https://${project.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center gap-2 text-sm md:text-base text-gray-300 hover:text-white font-medium transition-colors"
                      >
                        <span>Visit {project.website.replace(/^https?:\/\//, "")}</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    </MagneticWrapper>
                  ) : <div />}

                  <button
                    onClick={onClose}
                    className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white bg-gray-900 hover:bg-gray-800 border border-gray-700/80 rounded-md transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
