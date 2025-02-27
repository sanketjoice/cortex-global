import React from "react";
import img1 from "./assets/Picture19.png";
import img2 from "./assets/Picture20.png";
import img3 from "./assets/Picture21.png";
import img4 from "./assets/Picture22.png";
import quotes from "./assets/Picture23.png";

const CortexSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between bg-[#3a3aea] text-white min-h-screen">
      {/* Left Side - Image Grid */}
      <div className="grid grid-cols-2 grid-rows-2 relative w-1/2">
        <div className=" flex justify-center items-center p-0">
          <img
            src={img1}
            alt="Person 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-yellow-400 flex justify-center items-center rounded-full overflow-hidden">
          <img
            src={img2}
            alt="Person 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" flex justify-center items-center rounded-full overflow-hidden">
          <img
            src={img3}
            alt="Person 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center items-center p-">
          <img
            src={img4}
            alt="Person 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="lg:w-1/2 pl-20">
        <h2 className="text-6xl font-semibold leading-tight">
          <span className="text-yellow-400">
            <img src={quotes} alt="quotes" className="w-[70px]" />
          </span>
          Cortex fast-tracks
          <br /> your AI <br /> development.
        </h2>
        <p className="text-6xl font-bold mt-4">
          <span className="text-red-500">Don't delay innovation</span>
          <span>.</span>
        </p>
      </div>
    </section>
  );
};

export default CortexSection;
