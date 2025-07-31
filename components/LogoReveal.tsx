"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoReveal() {
  return (
    <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] overflow-hidden flex items-center justify-center">
      {/* Logo fades in + scale up */}
      <motion.div
        className="relative w-full h-full z-10 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      >
        <Image
          src="/Adobe Express - file.png"
          alt="ADmyBRAND Logo"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Light sweep layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/70 to-transparent z-20"
        initial={{ x: "-150%", y: "150%" }}
        animate={{ x: "150%", y: "-150%" }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
      />

      {/* Idle glow layer */}
      <motion.div
        className="absolute inset-0 rounded-xl blur-2xl bg-neonPurple/40 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}