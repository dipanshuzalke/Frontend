'use client';

import { RxStarFilled } from 'react-icons/rx';
import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  return (
<div className="relative bg-black text-white rounded-t-3xl overflow-hidden">
  {/* Curved bottom gradient overlay */}
  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-500/30 to-transparent rounded-t-3xl z-10" />

      {/* Top CTA section */}
      <div className="relative z-20 flex flex-col md:flex-row gap-10 md:justify-around p-10 md:pt-20">
        <div className="flex flex-col gap-6 md:text-left">
          <h1 className="text-4xl md:text-7xl font-roboto leading-tight">
            LET&apos;S MAKE IT
            <br /> HAPPEN NOW
          </h1>
          <div className="flex sm:flex-row gap-2 md:gap-4 md:justify-start">
            <button className="px-3 py-1 md:px-6 md:py-2 bg-blue-400 hover:bg-blue-500 transition rounded-3xl">
              Start Now
            </button>
            <button className="px-3 py-1 md:px-6 md:py-2 border border-white/30 hover:bg-white/10 transition rounded-3xl">
              Book a call
            </button>
          </div>
        </div>

        <div className="flex sm:flex-row gap-10 md:between">
          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-center sm:text-left mr-8">NAVIGATE</h2>
            <ul className="text-white/80 space-y-1">
              {['How it works', 'Start free', 'Success Stories', 'Privacy', 'Terms'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-1">
                  <RxStarFilled className="text-blue-600 text-lg" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-center sm:text-left">COMPANY</h2>
            <ul className="text-white/80 space-y-1">
              {['Twitter', 'LinkedIn', 'Messages'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-1">
                  <RxStarFilled className="text-blue-600 text-lg" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-white/20" />

      {/* Bottom section */}
      <div className="relative z-20 flex flex-col md:flex-row md:justify-between gap-4 px-6 py-6 text-white/80">
        <div className="text-center md:text-left">
          <h2>ALL RIGHTS RESERVED</h2>
          <p className="text-3xl md:text-5xl font-roboto text-white">@ 2025 COMARKETER</p>
        </div>

        <div className='flex justify-around p-6 md:gap-20'>
          <div className="md:text-left">
          <h2>LOCAL TIME</h2>
          <div className="flex items-center justify-center md:justify-start gap-1">
            <RxStarFilled className="text-blue-600 text-lg" />
            <p>10:45:01, GMT +0</p>
          </div>
        </div>

        <button
          className="bg-blue-600 p-4 md:p-5 rounded-full text-white hover:bg-blue-700 transition"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
        </div>
      </div>
    </div>
  );
}
