export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border border-white/40shadow-md mx-12 px-4 mt-4 p-2 rounded-3xl flex justify-between items-center">
      <div className="text-2xl font-semibold">Comarketer</div>
      <div className="flex gap-6 text-md">
        <button className="hover:underline">How it works</button>
        <button className="hover:underline">Start free</button>
        <button className="hover:underline">Success Stories</button>
      </div>
      <button className="px-5 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 transition">
        Schedule a Demo
      </button>
    </div>
  );
}
