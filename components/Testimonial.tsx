"use client";

import { motion} from "framer-motion";

const testimonials = [
  {
    name: "Amartya Jha",
    company: "CodeAnt AI: AI Code Review Platform Backed by YC",
    message: "Comarketer has revolutionized our marketing strategy...",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Chase Cohn",
    company: "Spaces OS: AI-first CRM for financial advisors",
    message: "With Comarketer, we’ve been able to reach our target audience...",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Prajwal",
    company: "DataTeams AI: Tech hiring and staffing agency",
    message: "Comarketer's insights have been invaluable in our recruitment...",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Tanvi Agarwal",
    company: "Elfina Health: Mental Therapy Matching Platform",
    message: "Thanks to Comarketer, we've expanded our reach and connected...",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const cardWidth = 320; // width of one card including margin (adjust if needed)
const visibleCards = 3;
const containerWidth = cardWidth * visibleCards;

export default function ContinuousCarousel() {
  // Duplicate the testimonials array so we can loop seamlessly
  const duplicated = [...testimonials, ...testimonials];

  // Total width of the scrolling content (all cards)
  const totalWidth = duplicated.length * cardWidth;

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="overflow-hidden" style={{ width: containerWidth }}>
        <motion.div
          style={{ display: "flex", gap: 24, width: totalWidth }}
          animate={{ x: [-totalWidth / 2, 0] }} // animate from left to right
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20, // adjust speed here (higher = slower)
              ease: "linear",
            },
          }}
        >
          {duplicated.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-gray-300 p-6 shadow-md flex-shrink-0"
              style={{ width: cardWidth - 24 }} // subtract gap for precise fit
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-blue-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                {testimonial.message}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
