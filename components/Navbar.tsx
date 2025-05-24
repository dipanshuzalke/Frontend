'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; // Menu and Close icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed w-[calc(100vw_-_39px)] top-0 z-50 backdrop-blur-2xl bg-white/50 border border-white/40 shadow-md px-4 py-3 flex justify-between items-center rounded-full m-[13px]">
      <Link href="/" className="text-2xl font-semibold">
        Comarketer
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-md">
        <Link href="#how-it-works" scroll={true} className="hover:underline">
          How it works
        </Link>
        <Link href="#start-free" scroll={true} className="hover:underline">
          Start free
        </Link>
        <Link href="#success-stories" scroll={true} className="hover:underline">
          Success Stories
        </Link>
      </div>

      <div className="hidden md:flex gap-4">
        <button className="px-5 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 transition">
          Schedule a Demo
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[70px] right-4 bg-white shadow-lg rounded-xl p-5 flex flex-col gap-4 text-md md:hidden z-50">
          <Link href="#how-it-works" scroll={true} onClick={() => setMenuOpen(false)} className="hover:underline">
            How it works
          </Link>
          <Link href="#start-free" scroll={true} onClick={() => setMenuOpen(false)} className="hover:underline">
            Start free
          </Link>
          <Link href="#success-stories" scroll={true} onClick={() => setMenuOpen(false)} className="hover:underline">
            Success Stories
          </Link>
          <button
            className="px-5 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Schedule a Demo
          </button>
        </div>
      )}
    </div>
  );
}
