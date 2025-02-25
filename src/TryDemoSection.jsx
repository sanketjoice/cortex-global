export default function TryDemoSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-16 px-8 lg:px-28">
      {/* Left Content */}
      <div className="lg:w-1/2">
        <h2 className="text-4xl font-bold">
          Try Our <span className="relative">Demo</span>
          <span className="text-[#063edb]">.</span>
        </h2>
        <p className="text-[#063edb] font-medium mt-2">
          The Most Advanced Vehicle Damage Detection
        </p>

        {/* Sample Images Grid */}
        <div className="grid grid-cols-4 gap-2 mt-6">
          {/* Placeholder images */}
          {[...Array(12)].map((_, index) => (
            <div key={index} className="w-20 h-20 bg-gray-300 rounded-lg"></div>
          ))}
        </div>

        {/* Custom Demo Request Box */}
        <div className="border border-gray-300 p-6 rounded-lg mt-6 flex flex-col items-center">
          <div className="text-gray-500">⬆</div>
          <p className="text-gray-600 mt-2">
            Request a custom demo with your data
          </p>
        </div>
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 flex flex-col items-center relative mt-10 lg:mt-0">
        {/* Mobile Analysis Image */}
        <img
          src="/path-to-right-side-image.png"
          alt="Mobile Analysis"
          className="max-w-xs rounded-xl shadow-lg"
        />

        {/* Right-side text with yellow highlight */}
        <div className="mt-6 text-lg font-medium text-left relative">
          <div className="absolute left-[-20px] top-0 h-[300px] w-1 bg-yellow-200"></div>
          <p>Take Photo</p>
          <p>Damage Detection</p>
          <p>Analysis</p>
          <p>Cost Estimations</p>
          <p>Totals</p>
          <p>Recommendations</p>
        </div>
        {/* Call to Action Button */}
        <button className="mt-6 bg-[#3a3aea] text-white px-6 py- rounded-lg h-[35px] font-medium">
          Try Our Demo
        </button>
      </div>
    </section>
  );
}
