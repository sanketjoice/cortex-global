import React, { useState, useEffect } from "react";

export default function DamageDetectionSection() {
  const [vehicleInsp, setVehicleInsp] = useState(null);
  const [cardent, setCardent] = useState(null);
  const [carbump, setCarbump] = useState(null);

  useEffect(() => {
    import("./assets/fingerpoint.png").then((image) =>
      setVehicleInsp(image.default)
    );
    import("./assets/cardent.png").then((image) => setCardent(image.default));
    import("./assets/carbump.png").then((image) => setCarbump(image.default));
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-28 py-16 lg:py-20">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight relative">
          AI-Powered Damage <br />
          <span className="relative inline-block">
            <span className="absolute -left-2 sm:-left-4 top-3 sm:top-5 w-6 sm:w-10 opacity-75 h-[40px] sm:h-[60px] bg-[#0d76bf]"></span>
            Detection System
          </span>
          <span className="text-pink-500">.</span>
        </h2>
        <p className="mt-6 sm:my-7 text-[#0d76bf] text-xl sm:text-2xl font-semibold">
          Advanced Computer Vision Technology for Precise{" "}
          <br className="hidden sm:block" />
          Damage Detection and Automation.
        </p>
        <p className="mt-4 text-lg sm:text-2xl max-w-full sm:max-w-[600px] mx-auto lg:mx-0 text-black">
          Designed to streamline operations, reduce costs, and enhance accuracy,
          our technology transforms traditional vehicle inspection processes
          into a sophisticated, automated, and highly efficient system.
        </p>
      </div>

      {/* Right Content with Images */}
      <div className="lg:w-1/2 relative flex flex-col items-center mt-8 lg:mt-0">
        {/* Main Image */}
        {vehicleInsp ? (
          <img
            src={vehicleInsp}
            alt="Vehicle Inspection"
            className="w-[80%] sm:w-[460px] rounded-lg shadow-lg"
            loading="lazy"
          />
        ) : (
          <div className="w-[80%] sm:w-[460px] h-[200px] sm:h-[300px] bg-gray-300 animate-pulse rounded-lg shadow-lg"></div>
        )}

        {/* Overlay Image 1 */}
        {cardent ? (
          <img
            src={cardent}
            alt="Damaged Car"
            className="absolute top-6 sm:top-12 right-0 sm:right-10 w-[150px] sm:w-[250px] rounded-lg shadow-lg"
            loading="lazy"
          />
        ) : (
          <div className="absolute top-6 sm:top-12 right-0 sm:right-10 w-[150px] sm:w-[250px] h-[100px] sm:h-[150px] bg-gray-300 animate-pulse rounded-lg shadow-lg"></div>
        )}

        {/* Overlay Image 2 */}
        {carbump ? (
          <img
            src={carbump}
            alt="Car Scratch"
            className="absolute -bottom-10 sm:-bottom-[100px] left-6 sm:left-12 w-[150px] sm:w-[250px] rounded-lg shadow-lg"
            loading="lazy"
          />
        ) : (
          <div className="absolute -bottom-10 sm:-bottom-[100px] left-6 sm:left-12 w-[150px] sm:w-[250px] h-[100px] sm:h-[150px] bg-gray-300 animate-pulse rounded-lg shadow-lg"></div>
        )}
      </div>
    </section>
  );
}
