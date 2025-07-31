"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../ui/Button";

const plans = [
  {
    name: "Starter",
    price: { monthly: 19, yearly: 190 },
    features: ["Basic AI Insights", "Email Support", "Community Access"],
  },
  {
    name: "Pro",
    price: { monthly: 49, yearly: 490 },
    features: [
      "Advanced AI Predictions",
      "Priority Support",
      "Custom Analytics",
      "Team Collaboration",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 99, yearly: 990 },
    features: [
      "Full AI Suite",
      "Dedicated Support",
      "Custom Integrations",
      "Unlimited Users",
    ],
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section
      id="pricing"
      className="relative py-24 px-6 md:px-16 bg-[var(--background)]"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-heading font-bold dream-gradient mb-8"
        >

          Flexible Pricing
            {/* Dream gradient text */}
        </motion.h2>

        {/* Toggle */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span
            className={!isYearly ? "text-white font-semibold" : "text-gray-400"}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-8 rounded-full bg-gray-600 transition"
          >
            {/* Sliding dot */}
            <span
              className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-neonPurple transition-transform duration-300 ${
                isYearly ? "translate-x-6" : ""
              } flex items-center justify-center`}
            >
              {/* Dot inside the sliding ball */}
              <span className="w-2 h-2 rounded-full bg-white" />
            </span>
          </button>
          <span
            className={isYearly ? "text-white font-semibold" : "text-gray-400"}
          >
            Yearly
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const cardContent = (
              <div className="glass p-8 rounded-2xl flex flex-col items-center h-full min-h-[330px]">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-4xl font-heading text-neonPurple mb-6">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                  <span className="text-base text-gray-400">
                    /{isYearly ? "yr" : "mo"}
                  </span>
                </p>

                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button variant="secondary" href="#get-started">
                    Choose Plan
                  </Button>
                </div>
              </div>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl relative ${plan.highlight ? "z-10" : ""}`}
              >
                {plan.highlight ? (
                  // Gradient border with masking, Pro block sits on top
                  <div className="relative">
                    <div className="p-[2px] rounded-2xl bg-[linear-gradient(270deg,#ff00ff,#00ffff,#ff9900,#ff00ff)] bg-[length:400%_400%] animate-gradient">
                      <div className="glass rounded-2xl p-8 flex flex-col items-center h-full min-h-[330px]">
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-4xl font-heading text-neonPurple mb-6">
                          ${isYearly ? plan.price.yearly : plan.price.monthly}
                          <span className="text-base text-gray-400">
                            /{isYearly ? "yr" : "mo"}
                          </span>
                        </p>
                        <ul className="text-gray-300 text-sm space-y-2 mb-6">
                          {plan.features.map((feature, idx) => (
                            <li key={idx}>• {feature}</li>
                          ))}
                        </ul>
                        <div className="mt-auto">
                          <Button variant="secondary" href="#get-started">
                            Choose Plan
                          </Button>
                        </div>
                      </div>
                    </div>
                    {/* Mask overlay for highlight effect */}
                    <div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                    />
                  </div>
                ) : (
                  // Normal border for others
                  <div className="p-[2px] rounded-2xl border border-neonPurple">
                    {cardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}