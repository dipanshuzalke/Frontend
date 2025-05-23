"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "Can I try ToDesktop without buying?",
    answer:
      "Yes. We offer a 7 day trial when you sign up. Cancel (it takes two clicks) within 7 days.",
  },
  {
    question: "How does my app get updated?",
    answer: "Updates are automatically pushed to your users through the cloud.",
  },
  {
    question: "What support do you offer?",
    answer: "We offer 24/7 email support and community Slack access.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row gap-12 p-6 max-w-6xl mx-auto">
      {/* Left Info */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-6 text-lg">
          Some frequently asked questions to us by our first time users before
          using
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Another Question
        </button>
      </div>

      {/* Right FAQ */}
      <div className="flex-1 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-lg border ${
                isOpen ? "border-blue-500" : "border-gray-200"
              } transition-colors duration-300`}
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className={`w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium transition-colors duration-200 hover:ring-2 rounded-xl hover:ring-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isOpen ? "text-blue-600" : "text-gray-900"
                }`}
              >
                {faq.question}
                <motion.svg
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="overflow-hidden px-5 pb-4 mt-1 text-gray-600"
                  >
                    <div>{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
