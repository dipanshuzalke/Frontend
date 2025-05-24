export default function Navbar() {
  return (
    <div
      className="fixed w-[calc(100vw_-_39px)] top-0 z-50 backdrop-blur-2xl bg-white/50 border border-white/40 shadow-md px-4 p-2 flex justify-between items-center
    rounded-full m-[13px]"
    >
      <div className="text-2xl font-semibold">Comarketer</div>
      <div className="flex gap-6 text-md">
        <button className="hover:underline">How it works</button>
        <button className="hover:underline">Start free</button>
        <button className="hover:underline">Success Stories</button>
      </div>
      <div className="flex gap-4 flex-row">
        <button className="px-5 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 transition">
          Schedule a Demo
        </button>
        <button className="px-5 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 transition">
          Book a Free Strategy Call
        </button>
      </div>
    </div>
  );
}
