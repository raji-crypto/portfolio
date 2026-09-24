import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FloatingBlob from "../components/FloatingBlob";
import MagneticWrapper from "../components/MagneticWrapper";
import DistortedText from "../components/DistortedText";

import rajyalakshmiPhoto from "../photo/Kadiyala_.jpeg";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const zoom = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[125vh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Floating 3D Blobs - matching exact structure */}
      <FloatingBlob size={400} color="rgba(100, 100, 255, 0.08)" initialX={100} initialY={200} duration={40} delay={0} glow={true} />
      <FloatingBlob size={300} color="rgba(255, 100, 200, 0.06)" initialX={800} initialY={400} duration={45} delay={2} glow={true} />
      <FloatingBlob size={350} color="rgba(100, 255, 200, 0.05)" initialX={600} initialY={600} duration={42} delay={4} glow={true} />

      {/* Enhanced gradient glow background with parallax */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ scale: backgroundScale }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-gray-900/40 via-transparent to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Content wrapper matching exact structure */}
      <motion.div
        style={{ y, opacity, scale: zoom }}
        className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full flex flex-col items-center justify-center"
      >
        {/* Title wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex justify-center"
        >
          <MagneticWrapper strength={0.15}>
            <DistortedText
              as="h1"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 text-white tracking-wide leading-tight text-center block"
            >
              Rajya Lakshmi Kadiyala
            </DistortedText>
          </MagneticWrapper>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-400 mb-8 md:mb-12 font-light tracking-tight">
            Data Science | Artificial Intelligence | Machine Learning
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto flex flex-col items-center gap-8"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-800 shadow-xl">
            <img
              src={rajyalakshmiPhoto}
              alt="Rajya Lakshmi Kadiyala"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed font-light cursor-hover">
            Data Science graduate with hands-on expertise in Artificial Intelligence, Machine Learning, and data-driven application development. Skilled in predictive modeling, real-time data pipelines, and cloud-based REST API deployment using Python, SQL, Java, PyTorch, and AWS.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

