'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHelpCircle, FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    question: 'Can I try ToDesktop without buying?',
    answer:
      'Yes! Sign up and get a 7-day free trial. Cancel anytime in two clicks—no questions asked.',
  },
  {
    question: 'How do app updates reach my users?',
    answer:
      'Every update is auto-pushed through our cloud—your users always run the latest version without lifting a finger.',
  },
  {
    question: 'What support channels are available?',
    answer:
      'We offer 24/7 email support, live chat in-app, and a community Slack with power-user roundtables.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-gray-50 py-16 px-6">
      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <FiHelpCircle className="w-12 h-12 mx-auto text-gradient-to-r from-blue-500 to-purple-500" />
        <h2 className="mt-4 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-gray-600">
          Everything you need to know before you get started.
        </p>
      </div>

      {/* FAQ Grid */}
      <motion.div
        className="max-w-4xl mx-auto grid gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {faqs.map((faq, idx) => {
          const isOpen = idx === openIndex;
          return (
            <motion.div
              key={idx}
              layout
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Question */}
              <motion.button
                layout="position"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between px-6 py-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span
                  className={`flex items-center text-lg font-medium transition-colors ${
                    isOpen ? 'text-blue-600' : 'text-gray-800'
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full ${
                      isOpen
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-500" />
                </motion.span>
              </motion.button>

              {/* Answer */}
              <AnimatePresence mode="popLayout" initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{
                      opacity: { duration: 0.3 },
                      y: { type: 'spring', stiffness: 300, damping: 20 },
                    }}
                    className="px-6 pb-5 text-gray-700"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Dummy Ask Question Button */}
      <div className="max-w-4xl mx-auto text-center mt-10">
        <button
          type="button"
          className="inline-block bg-blue-600 text-white font-medium px-8 py-3 rounded-full shadow hover:bg-blue-700 transition"
        >
          Ask a Question
        </button>
      </div>
    </section>
  );
}
