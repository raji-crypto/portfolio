"use client";

import { motion } from "framer-motion";
import { socialLinks } from "../data/social";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-gray-400 font-light"
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.p>
          <div className="flex space-x-6 md:space-x-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 pt-12 border-t border-gray-900 text-center"
        >
          <p className="text-xs md:text-sm text-gray-500 font-light">
            Designed and Developed by Rajya Lakshmi Kadiyala
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

