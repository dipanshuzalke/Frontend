export default function Footer() {
  return (
    <div className="relative bg-black text-white">
      {/* Blue top gradient shadow */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-blue-500/30 to-transparent rounded-t-3xl z-10" />

      <div className="relative z-20 flex justify-around p-20">
        <div className="flex flex-col gap-5">
          <h1 className="text-7xl font-small font-roboto leading-tight">
            LET'S MAKE IT
            <br /> HAPPEN NOW
          </h1>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-blue-400 hover:bg-blue-500 transition rounded-3xl">
              Start Now
            </button>
            <button className="px-4 py-2 border border-white/30 hover:bg-white/10 transition rounded-3xl">
              Book a call
            </button>
          </div>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">NAVIGATE</h1>
            <ul className="text-white/80 space-y-1">
              <li>Home</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>About</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">RESOURCES</h1>
            <ul className="text-white/80 space-y-1">
              <li>Download CV</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>About</li>
              <li>Testimonials</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-white/20" />

      <div className="relative z-20 flex justify-between p-10 text-white/80">
        <div className="flex flex-col">
          <h2>ALL RIGHTS RESERVED</h2>
          <p className="text-5xl font-roboto text-white">@ 2025 COMARKETER</p>
        </div>
        <div className="flex flex-col gap-3">
          <h2>LOCAL TIME</h2>
          <p>10:45:01, GMT +0</p>
        </div>
        <div className="self-end">Scroll</div>
      </div>
    </div>
  );
}
