"use client"
import { motion } from "framer-motion";

const steps = [
  {
    title: "Share Your Idea",
    // icon: LightBulbIcon,
    description:
      "Tell us what you’re building—just a few lines about your product or service, plus a small ad budget to test (usually $200–500).",
  },
  {
    title: "Build Your Setup",
    // icon: TemplateIcon,
    description:
      "AI crafts your landing page, connects your domain, sets up tracking, and optimizes funnels to turn visitors into leads.",
  },
  {
    title: "Launch Everywhere",
    // icon: GlobeAltIcon,
    description:
      "We deploy ads across Google, YouTube, Meta, LinkedIn, Twitter, Reddit—wherever your potential customers hang out.",
  },
  {
    title: "Get Clarity",
    // icon: ChartBarIcon,
    description:
      "Within 7–14 days you receive a data-driven report: what worked, where your audience responded, and which channels to double down on.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-28 ">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 " />
        <div className="relative max-w-4xl mx-auto px-6 pb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            From idea to clarity in just{" "}
            <span className="text-blue-600">14 days</span>
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Bridging the gap between slow, expensive agencies and complex
            self-serve tools.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pb-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl "
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="flex items-center mb-4">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 text-white font-bold">
                  {idx + 1}
                </span>
                {/* <step.icon className="w-6 h-6 text-blue-500 ml-3" /> */}
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
