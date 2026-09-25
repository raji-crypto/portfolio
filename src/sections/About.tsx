import SectionWrapper from "../components/SectionWrapper";
import AnimatedText from "../components/AnimatedText";
import DistortedText from "../components/DistortedText";
import Card3D from "../components/3DCard";
import MagneticWrapper from "../components/MagneticWrapper";
import FloatingBlob from "../components/FloatingBlob";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1.02]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);

  return (
    <SectionWrapper id="about" className="bg-black relative overflow-hidden !pt-12 md:!pt-16 lg:!pt-20">
      {/* Floating Blobs */}
      <FloatingBlob size={250} color="rgba(150, 100, 255, 0.05)" initialX={50} initialY={300} duration={40} delay={1} />
      <FloatingBlob size={200} color="rgba(255, 150, 100, 0.04)" initialX={900} initialY={500} duration={45} delay={3} />

      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div style={{ scale, opacity }}>
          <MagneticWrapper strength={0.15}>
            <DistortedText
              as="h2"
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black mb-16 md:mb-24 text-white tracking-tightest block"
            >
              About
            </DistortedText>
          </MagneticWrapper>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 max-w-6xl">
          <Card3D intensity={12} className="space-y-8">
            <AnimatedText delay={0.1}>
              <MagneticWrapper strength={0.1}>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed font-light cursor-hover text-justify pb-4">
                  My work centers on developing scalable data systems and predictive AI solutions that solve practical enterprise challenges. At JPMorgan Chase, I develop AI-enabled financial analytics applications using Python, SQL, and Databricks to analyze credit portfolio performance, while previously at AbhiBus, I built enterprise ETL pipelines using AWS, Apache Spark, and Databricks processing 2M+ daily operational transactions.
                </p>
              </MagneticWrapper>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <MagneticWrapper strength={0.1}>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed font-light cursor-hover text-justify">
                  With hands-on expertise spanning Databricks, Snowflake, PyTorch, Scikit-learn, MLflow, Docker, and Apache Airflow, I handle the complete data lifecycle - from robust ETL/ELT pipelines and feature engineering to production ML serving and auditable AI governance.
                </p>
              </MagneticWrapper>
            </AnimatedText>
          </Card3D>

          <Card3D intensity={12} className="space-y-8">
            <AnimatedText delay={0.3}>
              <MagneticWrapper strength={0.1}>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed font-light cursor-hover text-justify">
                  Currently pursuing a Master of Science in Data Science at the University at Albany (Aug 2024 - May 2026) and holding a Bachelor's in Computer Science with a specialization in Data Science from SRM University AP, I combine analytical rigor with clean engineering execution.
                </p>
              </MagneticWrapper>
            </AnimatedText>
          </Card3D>
        </div>
      </div>
    </SectionWrapper>
  );
}

