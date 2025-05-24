"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [isScale, setIsScale] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsScale((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -30, opacity: 0 },
  };

  // Load animation for entire hero section
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row text-center pt-16 px-6 h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #c7e5ff 0%, #d3ffea 25%, #c0e6ff 50%, #e7f0ff 75%, #ffc9ff 100%)",
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* TEXT BLOCK */}
      <div className="flex flex-col md:gap-12 gap-6 flex-1 justify-center md:items-start items-center text-left px-2 md:px-14 pt-10">
        <div>
          <h1 className="text-[20vw] md:text-[10vw] font-bold font-roboto text-blue-600 leading-none">
            AI
          </h1>
          <h2 className="text-[6vw] md:text-[2.5vw] font-bold font-roboto">
            to Launch &{" "}
            <span className="inline-block min-w-[10vw]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={isScale ? "scale" : "validate"}
                  className="inline-block"
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                >
                  {isScale ? "Scale 🚀" : "Validate"}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            Your Venture
            <br />
            Faster Than Ever
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <button className="px-8 py-3 border border-gray-300 rounded-full">
            Success Stories
          </button>
          <button className="px-8 py-3 text-white bg-blue-500 rounded-full">
            Book Demo Now
          </button>
        </div>
      </div>

      {/* VIDEO BLOCK */}
      <div className="flex flex-col gap-8 flex-1 justify-center items-center py-6 px-4">
        <div className="relative w-full max-w-[600px] aspect-video overflow-hidden rounded-3xl">
          <iframe
            src="https://www.youtube-nocookie.com/embed/nU3FkrwMKU8?rel=0&modestbranding=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <p className="text-md md:text-xl text-gray-500 text-center px-2 md:px-0">
          AI builds high-converting landing pages and optimizes <br />
          your ad performance across Google, Meta, LinkedIn, and more.
        </p>
      </div>

      <style jsx>{`
        .hero {
          width: 100vw;
          background: linear-gradient(
            135deg,
            #c7e5ff 0%,
            #d3ffea 25%,
            #c0e6ff 50%,
            #e7f0ff 75%,
            #ffc9ff 100%
          );
        }
      `}</style>
    </motion.div>
  );
}
