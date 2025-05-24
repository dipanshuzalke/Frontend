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

  return (
    <div className="hero text-center p-6 flex flex-row">
      <div className="flex flex-col gap-20 flex-1 pb-20 h-full justify-center pl-14">
        <div>
          <h1 className="text-[15.8vw] font-bold font-roboto text-left h-[20vw] text-blue-600">
            AI
          </h1>
          <h1 className="text-[2.8vw] font-bold font-roboto text-left">
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
          </h1>
        </div>

        <div className="flex gap-5">
          <button className="px-10 py-4 border border-gray-300 rounded-full">
            Success Stories
          </button>
          <button className="px-10 py-4 text-white bg-blue-500 rounded-full">
            Book Demo Now
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-10 flex-1 pt-14 h-full justify-center items-center">
        <div className="relative w-[80%] rounded-3xl aspect-video overflow-hidden">
          <iframe
            src="https://www.youtube-nocookie.com/embed/nU3FkrwMKU8?rel=0&modestbranding=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-xl"
          ></iframe>
        </div>

        <p className="text-xl text-gray-500 text-center">
          AI builds high-converting landing pages and optimizes your ad <br />
          performance across Google, Meta, LinkedIn, and more.
        </p>
      </div>

      <style jsx>{`
        .hero {
          width: 100vw;
          height: 100vh;
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
    </div>
  );
}