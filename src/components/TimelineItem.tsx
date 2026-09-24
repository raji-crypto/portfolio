"use client";

import { motion } from "framer-motion";
import { TimelineEvent } from "../data/timeline";

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
  isLast?: boolean;
}

export default function TimelineItem({ event, index, isLast = false }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 8 }}
      className="relative pl-12 md:pl-16 pb-16 md:pb-20 group cursor-pointer"
    >
      {/* Timeline line */}
      {!isLast && (
        <motion.div 
          className="absolute left-5 md:left-6 top-12 bottom-0 w-px bg-gray-900"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
        />
      )}
      
      {/* Timeline dot with animation */}
      <motion.div 
        className="absolute left-0 md:left-1 top-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white border-2 border-black z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.3 }}
      />
      
      <div className="space-y-4 md:space-y-6">
        <motion.div 
          className="flex items-center gap-6"
          whileHover={{ x: 4 }}
        >
          <span className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tightest">
            {event.year}
          </span>
        </motion.div>
        
        <motion.h3 
          className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tightest group-hover:text-gray-200 transition-colors"
          whileHover={{ x: 4 }}
        >
          {event.title}
        </motion.h3>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-3xl font-light">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
}

