"use client";

import { motion } from "framer-motion";
import { FaBolt, FaChartLine, FaBrain, FaUsers, FaShieldAlt, FaCloud } from "react-icons/fa";

const features = [
  {
    icon: <FaBolt className="text-neonPurple text-3xl" />,
    title: "Lightning Fast Insights",
    description: "Process marketing data in real time with cutting-edge AI acceleration.",
  },
  {
    icon: <FaChartLine className="text-neonBlue text-3xl" />,
    title: "Predictive Analytics",
    description: "Forecast trends and campaign performance with unmatched precision.",
  },
  {
    icon: <FaBrain className="text-neonPurple text-3xl" />,
    title: "AI-Driven Optimization",
    description: "Automate ad targeting and maximize ROI using adaptive algorithms.",
  },
  {
    icon: <FaUsers className="text-neonBlue text-3xl" />,
    title: "Audience Intelligence",
    description: "Deep insights into customer behavior across multiple touchpoints.",
  },
  {
    icon: <FaShieldAlt className="text-neonPurple text-3xl" />,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance for peace of mind.",
  },
  {
    icon: <FaCloud className="text-neonBlue text-3xl" />,
    title: "Seamless Cloud Sync",
    description: "Access your marketing suite anywhere with secure cloud sync.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-6 md:px-16 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-heading font-bold dream-gradient mb-8"
        >
          Powerful AI Features
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto"
        >
          Discover tools designed to supercharge your marketing strategy with cutting-edge artificial intelligence.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl hover:scale-105 transition-transform"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
