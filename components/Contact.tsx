'use client';

import Image from 'next/image';
import contact from '../public/contact.jpg';

export default function Contact() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center md:gap-10 px-6 pb-10"
      id="start-free"
    >
      {/* IMAGE */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={contact}
          alt="Contact Us"
          width={600}
          height={500}
          className="rounded-xl max-w-full h-auto object-cover"
          priority
        />
      </div>

      {/* FORM */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 bg-white rounded-2xl px-6 py-10 shadow-lg max-w-[600px]">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center underline mb-4">
          Get a Personalized Optimization Report
        </h1>

        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Website URL (Optional)</label>
          <input
            type="url"
            placeholder="https://yourwebsite.com"
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <button className="inline-block px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Get Free Report
          </button>

          <p className="text-gray-400 text-sm">
            By signing up, you agree to our Terms of Service and Privacy Policy. No spam. Just real value.
          </p>
        </div>
      </div>
    </div>
  );
}
