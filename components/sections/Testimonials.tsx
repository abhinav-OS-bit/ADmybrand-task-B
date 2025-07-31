"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  img: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Akhila Rao",
    role: "Marketing Lead at NovaCorp",
    text: "This AI suite completely transformed our campaigns — real-time insights and automation saved us hours every week!",
    img: "/girl1.jpg",
  },
  {
    name: "Rahul Mehta",
    role: "Founder, GrowthX",
    text: "We increased ROI by 45% after switching to this platform. The predictive analytics is pure magic.",
    img: "/boy1.png",
  },
  {
    name: "Sophia Chen",
    role: "CMO, Elevate Media",
    text: "The audience intelligence features are unmatched — targeting has never been this precise.",
    img: "/girl2 .png",
  },
];

export default function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true); // autoplay default
  const [activeIndex, setActiveIndex] = useState(0);
  const isAutoScrolling = useRef(false);

  // Manual scroll handler
  const handleScroll = () => {
    if (!scrollRef.current || isAutoScrolling.current) return; // skip if auto-scrolling

    const container = scrollRef.current;
    const index = Math.round(container.scrollLeft / container.offsetWidth);
    setActiveIndex(index);
  };

  // Auto-scroll effect
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const cardWidth = container.offsetWidth;
        const nextIndex =
          activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;

        isAutoScrolling.current = true;
        container.scrollTo({
          left: nextIndex * cardWidth,
          behavior: "smooth",
        });
        setActiveIndex(nextIndex);

        // release flag after animation (~600ms)
        setTimeout(() => {
          isAutoScrolling.current = false;
        }, 600);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, activeIndex]);

  return (
    <section className="relative py-32 px-6 flex flex-col items-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-heading font-bold mb-14 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
      >
        What Our Customers Say
      </motion.h2>

      {/* Floating block */}
      <div className="bg-black rounded-3xl shadow-2xl max-w-7xl w-full overflow-hidden relative py-20 md:py-32">
        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar"
          onScroll={handleScroll}
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="snap-center flex-shrink-0 w-full px-16 py-20 flex flex-row items-center justify-center text-left gap-12"
            >
              {/* Image with animated gradient */}
              <div className="relative w-44 h-44 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-pink-400 to-blue-400 animate-gradient-wave blur-sm"></div>
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-full h-full rounded-full object-cover border-4 border-black relative z-10"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="text-2xl text-gray-300 mb-6 italic leading-relaxed">
                  “{testimonial.text}”
                </p>
                <h4 className="text-white text-xl font-semibold">
                  {testimonial.name}
                </h4>
                <span className="text-gray-500 text-base">
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Progress + Play/Pause */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <div className="bg-gray-800/80 rounded-full px-6 py-2 flex items-center gap-3">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "bg-gray-200 w-6 animate-progress"
                    : "bg-gray-500 w-2"
                }`}
              ></div>
            ))}
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
          >
            {isPlaying ? (
              <FaPause className="text-white text-lg" />
            ) : (
              <FaPlay className="text-white text-lg" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
