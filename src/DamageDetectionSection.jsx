import vehicleInsp from "./assets/fingerpoint.png";
import cardent from "./assets/cardent.png";
import carbump from "./assets/carbump.png";

export default function DamageDetectionSection() {
  return (
    <section className="flex flex-col mt-80 mb-60 lg:flex-row items-center justify-between px-10 lg:px-28 py-">
      {/* Left Content */}
      <div className="lg:w-1/2 text-left">
        <h2 className="text-7xl font-semibold leading-tight relative">
          AI-Powered Damage <br />
          <span className="relative inline-block">
            <span className="absolute -left-4 top-5 w-10 opacity-75 h-[60px] bg-[#0d76bf]"></span>
            Detection System
          </span>
          <span className="text-pink-500">.</span>
        </h2>
        <p className="my-7 text-[#0d76bf] text-2xl font-semibold">
          Advanced Computer Vision Technology for Precise <br />
          Damage Detection and Automation.
        </p>
        <p className="mt-4 text-2xl w-[600px] text-black">
          Designed to streamline operations, reduce costs, and enhance accuracy,
          our technology transforms traditional vehicle inspection processes
          into a sophisticated, automated, and highly efficient system.
        </p>
      </div>

      {/* Right Content with Images */}
      <div className="lg:w-1/2 relative flex justify-center mt-8 lg:mt-0">
        {/* Main Image */}
        <img
          src={vehicleInsp}
          alt="Vehicle Inspection"
          className="w-[460px] rounded-lg shadow-lg"
        />

        {/* Overlay Image 1 */}
        <img
          src={cardent}
          alt="Damaged Car"
          className="absolute top-12 right-0 w-[250px] rounded-lg shadow-lg"
        />

        {/* Overlay Image 2 */}
        <img
          src={carbump}
          alt="Car Scratch"
          className="absolute -bottom-[100px] left-12 w-[250px] rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
