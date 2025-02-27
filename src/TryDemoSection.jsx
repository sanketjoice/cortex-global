import mobileimg from "./assets/mobileimg.png";
import mobilescreen from "./assets/mobilescreen.png";
import yellowpoint from "./assets/yellowpoint.png";
import React from "react";

export default function TryDemoSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-16 px-8 lg:px-28">
      {/* Left Content */}
      <div className="ml-[0px]">
        <h2 className="text-7xl text-center font-semibold">
          Try Our <span className="relative">Demo</span>
          <span className="text-[#063edb]">.</span>
        </h2>
        <p className="text-[#063edb] mb-[100px] text-2xl text-center font-medium my-5">
          The Most Advanced Vehicle Damage Detection
        </p>

        {/* Sample Images Grid */}
        <p className="text-lg font-semibold">Test With Sample Image</p>
        <div className="grid grid-cols-3 gap-3 mt-6">
          {/* Placeholder images */}
          {[...Array(12)].map((_, index) => (
            <div key={index} className="w-30 h-14 bg-gray-300 rounded-lg"></div>
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
      <div className="lg:w-1/2 mt-[150px] flex flex-row items-center relative lg:mt-0">
        <div className="flex flex-col">
          {/* Mobile Analysis Image */}
          <img
            src={mobilescreen}
            alt="Mobile Analysis"
            className="w-[480px] h-[830px] relative rounded-xl"
          />
          <img
            src={mobileimg}
            alt="Mobile Analysis"
            className="max-w-xs mt-[60px] ml-[80px] rounded-xl absolute shadow-lg"
          />
          <img
            src={yellowpoint}
            alt="yellow"
            className="absolute w-[100px] ml-[160px] mt-[70px]"
          />
          {/* Call to Action Button */}
          <button className="mt-[-90px] bg-[#3a3aea] text-white px-6 w-[200px] self-center rounded-lg h-[40px] hover:cursor-pointer font-medium">
            Try Our Demo
          </button>
        </div>

        {/* Right-side text with yellow highlight */}
        <div className="mt-[-100px] text-lg font-medium text-left relative">
          <div className="absolute left-[-20px] top-0 h-[300px] w-1 bg-yellow-200"></div>

          <div className="mt-[50px]">
            <p>Take Photo</p>
            <p>Damage Detection</p>
            <p>Analysis</p>
            <p>Cost Estimations</p>
            <p>Totals</p>
            <p>Recommendations</p>
          </div>
        </div>
      </div>
    </section>
  );
}
