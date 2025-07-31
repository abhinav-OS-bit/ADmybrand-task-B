"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import LogoReveal from "@/components/LogoReveal";
import Particles from "@/components/Particles";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Particles */}
      <Particles />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative z-10 px-6">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neonPurple/20 via-transparent to-neonBlue/20 blur-3xl animate-pulse" />

        {/* Animated Logo Reveal */}
        <LogoReveal />

        {/* Hero Headline */}
        <motion.h1
          className="font-heading text-5xl md:text-7xl font-bold mt-8 text-neonPurple"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Dare To Dream Studio
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 1 }}
        >
          Futuristic marketing agency that transforms insights into action.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 1 }}
        >
          <a
            href="#pricing"
            className="px-6 py-3 rounded-full bg-neonPurple text-white font-semibold shadow-lg hover:shadow-neonPurple/50 transition hover:scale-105"
          >
            Get Started
          </a>

          <a
            href="#features"
            className="px-6 py-3 rounded-full border border-neonPurple text-neonPurple font-semibold hover:bg-neonPurple/10 transition hover:scale-105"
          >
            Learn More
          </a>
        </motion.div>

        {/* Decorative Neon Rings */}
        <div className="absolute w-[500px] h-[500px] rounded-full border border-neonPurple/30 blur-3xl animate-pulse-slow" />
        <div className="absolute w-[700px] h-[700px] rounded-full border border-neonBlue/20 blur-3xl animate-pulse-slower" />
      </section>

      {/* Other Sections with IDs */}
      <section id="features">
        <Features />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <Footer />
    </main>
  );
}
