import rocket from "../public/rocket.png";

export default function Hero() {
  return (
    <div className="p-8 text-center">
      <p className="inline-block mx-auto bg-gray-200 text-blue-500 px-4 py-2 backdrop-blur-md border border-white/40 rounded-3xl shadow-sm mb-2">
        Book a Free Strategy Call
      </p>
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-6xl font-medium font-roboto text-center">
          AI to Market and scale 🚀 your <br /> venture in record time!
        </h1>
        <p className="text-xl text-gray-500 text-center">
          AI builds hight-converting landing pages and optimize your ad <br />{" "}
          performance across Google, Meta, Linedin, and more.
        </p>
        <div className="flex gap-5">
          <button className="px-5 py-2 text-white bg-blue-500 rounded-3xl">
            Book Demo Now
          </button>
          <button className="px-5 py-2 border border-gray-300 rounded-3xl">
            Success Stories
          </button>
        </div>
        {/* Corrected YouTube embed */}
        <div className="relative pb-[30%] w-full max-w-[800px] mt-5">
          <iframe
            src="https://www.youtube.com/embed/nU3FkrwMKU8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
