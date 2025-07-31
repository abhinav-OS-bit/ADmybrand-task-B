"use client";

import { motion } from "framer-motion";
import LogoReveal from "./LogoReveal";

export default function Hero() {
  return (
    <section 
    id = "hero"
    className="h-screen flex flex-col justify-center items-center text-center px-4">
      {/* Animated Logo */}
      <LogoReveal />

      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-6xl font-heading font-bold mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Dare To Dream Studio
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-lg sm:text-xl text-gray-300 mt-4 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        Crafting futuristic digital experiences with AI and bold creativity.
      </motion.p>

      {/* Scroll Indicator */}
      <motion.div
        className="mt-16 w-6 h-10 border-2 border-white rounded-full flex items-start justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full mt-2" />
      </motion.div>
    </section>
  );
}
