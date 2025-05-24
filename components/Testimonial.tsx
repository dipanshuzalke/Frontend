"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Amartya Jha",
    company: "CodeAnt AI: AI Code Review Platform Backed by YC",
    message:
      "Comarketer has revolutionized our marketing strategy—doubling our inbound leads in just two weeks!",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Chase Cohn",
    company: "Spaces OS: AI-first CRM for financial advisors",
    message:
      "With Comarketer, we’ve been able to reach our exact target persona without wasted ad spend.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Prajwal",
    company: "DataTeams AI: Tech hiring and staffing agency",
    message:
      "Comarketer's insights have been invaluable in our recruitment funnels—our cost per hire is down 30%.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Tanvi Agarwal",
    company: "Elfina Health: Mental Therapy Matching Platform",
    message:
      "Thanks to Comarketer, we've expanded our reach and connected with thousands of new users.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

// A set of pastel Tailwind classes to cycle through:
const pastelBg = [
  "bg-pink-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-blue-100",
];

export default function ContinuousCarousel() {
  // Duplicate so it wraps seamlessly
  const items = [...testimonials, ...testimonials];

  return (
    <div className="py-8 bg-white" id="success-stories">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl md:text-4xl text-center font-semibold text-gray-800">
          Built for early-stage startups
        </h1>
        <p className="text-gray-600 leading-relaxed text-center">
          Get the marketing expertise of a full team without the overhead.
        </p>
      </div>
      <div className="w-full flex justify-center py-12 px-4 overflow-hidden">
        <div className="w-full max-w-5xl">
          <motion.div
            className="flex gap-8"
            style={{ width: `calc(${items.length} * 20rem)` }}
            animate={{ x: [`0%`, `-50%`] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {items.map((t, i) => (
              <motion.div
                key={i}
                className={`
                flex-shrink-0 w-80 rounded-3xl 
                ${pastelBg[i % pastelBg.length]} 
                border border-white/60
                backdrop-blur-sm
                p-6
                shadow-lg
              `}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="rounded-full border-2 border-white object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {t.name}
                    </h3>
                    <p className="text-sm text-gray-600">{t.company}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                  &ldquo;{t.message}&rdquo;
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
