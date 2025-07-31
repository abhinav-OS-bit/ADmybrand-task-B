"use client";

import { useEffect, useRef } from "react";

export default function MagicCursor() {
  const wandRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const MAX_STARS = 40;
  const STAR_INTERVAL = 16;

  useEffect(() => {
    let lastTime = 0;
    let mouseX = 0;
    let mouseY = 0;
    let animationFrameId: number;

    const container = containerRef.current!;
    const wand = wandRef.current!;

    const updateWandPosition = () => {
      wand.style.left = `${mouseX}px`;
      wand.style.top = `${mouseY}px`;
      animationFrameId = requestAnimationFrame(updateWandPosition);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const now = performance.now();
      if (now - lastTime < STAR_INTERVAL) return;
      lastTime = now;

      // Create star
      const star = document.createElement("div");
      star.className =
        "fixed pointer-events-none w-2 h-2 bg-white rounded-full animate-star z-[2147483647]";
      star.style.left = `${e.clientX}px`;
      star.style.top = `${e.clientY}px`;

      container.appendChild(star);

      // Cap number of stars
      if (container.children.length > MAX_STARS) {
        container.removeChild(container.firstChild!);
      }

      setTimeout(() => star.remove(), 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(updateWandPosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef}>
      {/* Wand */}
      <div
        ref={wandRef}
        className="fixed pointer-events-none z-[2147483647] w-6 h-6"
        style={{
          backgroundImage: "url('/Curser.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}