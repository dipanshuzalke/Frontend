export default function () {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="inline-block mx-auto bg-gray-200 text-blue-500 px-4 py-2 backdrop-blur-md border border-white/40 rounded-3xl shadow-sm">How it works?</p>
      <h1 className="text-2xl font-medium">From idea to clarity in just 14 days.</h1>
      <p className="text-gray-500 text-center">
        Bridging the gap between slow, expensive agencies and <br /> complex self-serve tools.
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center bg-blue-200 rounded-lg">
          <div>
            <p>Strp 1</p>
            <h2>Share your idea</h2>
            <p>
              Tell us what you're building—just a few lines about your <br />{" "}
              product or service. We’ll also ask for a small ad budget to <br />{" "}
              test with (usually $200–500).
            </p>
          </div>
          <div>Image</div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="flex flex-col gap-4 bg-blue-200 rounded-lg">
            <p>Step 2</p>
            <h2>Build your launch setup</h2>
            <p>
              The AI creates landing pages, connects a domain, sets up <br />
              conversion tracking, and optimizes everything to turn <br />{" "}
              visitors into leads.
            </p>
            <div>Image</div>
          </div>
          <div className="flex flex-col gap-4 bg-blue-200 rounded-lg">
            <p>Step 3</p>
            <h2>Go live across channelsp</h2>
            <p>
              Ads run on Google, YouTube, Meta, LinkedIn, Twitter, <br />
              Reddit—wherever your potential customers are.
            </p>
            <div>Image</div>
          </div>
          <div className="flex flex-col gap-4 bg-blue-200 rounded-lg">
            <p>Step 4</p>
            <h2>Get clarity</h2>
            <p>
              In 7–14 days, we send you a report on what worked, <br /> where
              your audience responded, and what channels <br /> to double down
              on.
            </p>
            <div>Image</div>
          </div>
        </div>
      </div>
      {/* <div
        className="flex justify-center px-4 mt-20 "
        style={{ perspective: "1000px" }}
      >
        <div className="bg-[#1E1A35] text-white flex ">
    <div
          className=" px-10 py-6 rounded-xl shadow-2xl text-center text-lg font-semibold max-w-xl w-full"
          style={{
            transform: "rotateX(45deg)",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <p>Best Platform AI Converter</p>
        </div>
        <div className="flex gap-3">
                <div className="flex flex-col gap-1">
                    <p>3M+</p>
                    <p>Happy Customers</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p>3M+</p>
                    <p>Happy Customers</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p>3M+</p>
                    <p>Happy Customers</p>
                </div>
            </div>
        </div>
        
      </div> */}
    </div>
  );
}
