"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 490 }); // more particles for a space look

function randomColor() {
  const colors = [
    "rgba(255,255,255,0.95)", // bright white
    "rgba(173,216,230,0.9)",  // light blue
    "rgba(186,85,211,0.8)",   // purple
    "rgba(0,255,255,0.8)",    // cyan
    "rgba(255,255,0,0.7)",    // yellow
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function randomShape() {
  const shapes = [
    "rounded-full", // circle
    "rounded-md",   // square
    "rotate-45",    // diamond
    "rounded-t-full", // semi-circle
  ];
  return shapes[Math.floor(Math.random() * shapes.length)];
}

export default function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${randomShape()}`}
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: randomColor(),
            boxShadow: `0 0 ${Math.random() * 32 + 16}px ${randomColor()}`,
            opacity: Math.random() * 0.7 + 0.3,
            filter: "blur(0px)",
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}