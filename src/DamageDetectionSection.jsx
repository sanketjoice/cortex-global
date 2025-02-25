export default function DamageDetectionSection() {
  return (
    <section className="flex flex-col mt-20 lg:flex-row items-center justify-between px-10 lg:px-28 py-">
      {/* Left Content */}
      <div className="lg:w-1/2 text-left">
        <h2 className="text-4xl font-semibold leading-tight relative">
          AI-Powered Damage <br />
          <span className="relative inline-block">
            <span className="absolute -left-2 top-2 w-6 h-6 bg-[#3a3aea]"></span>
            Detection System
          </span>
          <span className="text-pink-500">.</span>
        </h2>
        <p className="mt-4 text-[#0d76bf] font-bold">
          Advanced Computer Vision Technology for Precise <br />
          Damage Detection and Automation.
        </p>
        <p className="mt-4 text-black">
          Designed to streamline operations, reduce costs, and enhance accuracy,
          our technology transforms traditional vehicle inspection processes
          into a sophisticated, automated, and highly efficient system.
        </p>
      </div>

      {/* Right Content with Images */}
      <div className="lg:w-1/2 relative flex justify-end mt-8 lg:mt-0">
        {/* Main Image */}
        <img
          src="/path-to-main-image.jpg"
          alt="Vehicle Inspection"
          className="w-80 rounded-lg shadow-lg"
        />

        {/* Overlay Image 1 */}
        <img
          src="/path-to-small-image1.jpg"
          alt="Damaged Car"
          className="absolute top-0 right-0 w-36 rounded-lg shadow-lg border-4 border-white"
        />

        {/* Overlay Image 2 */}
        <img
          src="/path-to-small-image2.jpg"
          alt="Car Scratch"
          className="absolute bottom-0 left-12 w-48 rounded-lg shadow-lg border-4 border-white"
        />
      </div>
    </section>
  );
}
