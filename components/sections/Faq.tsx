"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does the AI improve marketing campaigns?",
    answer: "Our AI analyzes data in real-time, predicts trends, and automatically adjusts targeting for maximum ROI.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We use enterprise-grade encryption and comply with GDPR and CCPA standards.",
  },
  {
    question: "Can I switch plans anytime?",
    answer: "Absolutely. You can upgrade, downgrade, or cancel your plan whenever you want.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 md:px-16 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-heading font-bold dream-gradient mb-8"
        >
          Frequently Asked Questions
        </motion.h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`glass p-4 mb-4 rounded-2xl cursor-pointer transition ${
              openIndex === index ? "border border-neonPurple" : ""
            }`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 text-sm mt-2"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
