"use client";

import SectionWrapper from "../components/SectionWrapper";
import AnimatedText from "../components/AnimatedText";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { socialLinks } from "../data/social";
import DistortedText from "../components/DistortedText";
import MagneticWrapper from "../components/MagneticWrapper";
import FloatingBlob from "../components/FloatingBlob";
import Card3D from "../components/3DCard";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.99, 1.01]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SectionWrapper id="contact" className="bg-black relative overflow-hidden">
      {/* Floating Blobs */}
      <FloatingBlob size={270} color="rgba(255, 150, 200, 0.06)" initialX={100} initialY={450} duration={42} delay={1} />
      <FloatingBlob size={230} color="rgba(150, 255, 150, 0.05)" initialX={1100} initialY={350} duration={40} delay={3.5} />

      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div style={{ scale, opacity }}>
          <MagneticWrapper strength={0.15}>
            <DistortedText
              as="h2"
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-8 md:mb-12 text-white tracking-tightest block whitespace-nowrap"
            >
              Get in Touch
            </DistortedText>
          </MagneticWrapper>
        </motion.div>

        <AnimatedText delay={0.1} className="mb-16 md:mb-24">
          <MagneticWrapper strength={0.1}>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 max-w-3xl font-light cursor-hover">
              Open to Data Science, Artificial Intelligence, Machine Learning, and Data Engineering opportunities. Let's build meaningful systems together.
            </p>
          </MagneticWrapper>
        </AnimatedText>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 max-w-6xl">
          {/* Contact Form */}
          <Card3D intensity={14}>
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onSubmit={handleSubmit}
              className="space-y-6 md:space-y-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-3 tracking-tight"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 bg-black border border-gray-900 rounded-none focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white transition-all font-light"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-3 tracking-tight"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 bg-black border border-gray-900 rounded-none focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white transition-all font-light"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-3 tracking-tight"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  rows={6}
                  className="w-full px-4 py-3 bg-black border border-gray-900 rounded-none focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white transition-all resize-none font-light"
                />
              </div>

              <MagneticWrapper strength={0.25} wobble={true}>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 0.98, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-4 bg-white text-gray-900 rounded-none font-medium hover:bg-gray-100 transition-all duration-300 tracking-tight cursor-hover focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                  aria-label="Submit contact form"
                >
                  {submitted ? "Message Sent!" : "Send Message"}
                </motion.button>
              </MagneticWrapper>
            </motion.form>
          </Card3D>

          {/* Social Links */}
          <Card3D intensity={14}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="flex flex-col justify-center space-y-6 md:space-y-8"
            >
              <div>
                <MagneticWrapper strength={0.12} className="block mb-3">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tightest cursor-hover">
                    Connect
                  </h3>
                </MagneticWrapper>
                <MagneticWrapper strength={0.08} className="block mb-8">
                  <p className="text-xl md:text-2xl text-gray-400 font-light cursor-hover">
                    Find me on these platforms.
                  </p>
                </MagneticWrapper>
              </div>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <MagneticWrapper key={social.name} strength={0.2} wobble={true}>
                    <motion.a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ type: "spring", damping: 20, stiffness: 300, delay: index * 0.1 }}
                      whileHover={{ scale: 0.98, x: 8, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex items-center gap-4 p-4 md:p-6 bg-black border border-gray-900 hover:border-gray-800 transition-all duration-300 group cursor-pointer cursor-hover"
                    >
                      <motion.div
                        className="text-gray-300 group-hover:text-white transition-colors flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {social.icon}
                      </motion.div>
                      <div className="flex flex-col min-w-0">
                        {social.value ? (
                          <span className="text-base md:text-lg text-gray-300 group-hover:text-white font-medium transition-colors tracking-tight break-all">
                            {social.name} - {social.value}
                          </span>
                        ) : (
                          <span className="text-base md:text-lg text-gray-300 group-hover:text-white font-medium transition-colors tracking-tight">
                            {social.name}
                          </span>
                        )}
                      </div>
                    </motion.a>
                  </MagneticWrapper>
                ))}
              </div>
            </motion.div>
          </Card3D>
        </div>
      </div>
    </SectionWrapper>
  );
}

