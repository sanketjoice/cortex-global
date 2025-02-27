import React from "react";
import mobilescreen from "./assets/mobilescreen.png";
import mobileimg from "./assets/Picture7.png";
import greenpoint from "./assets/greenpoint.png";
const LeadingPerformance = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-28 py-16 bg-white">
      {/* Left Side Content */}
      <div className="lg:w-1/2">
        <h2 className="text-6xl font-bold text-black">
          Leading Industry <br /> Performance
          <span className="text-green-600">.</span>
        </h2>
        <p className="text-purple-600 text-xl font-semibold mt-2">
          Advanced Solution for Car Rental Companies
        </p>
        <p className="text-gray-600 mt-10 w-[500px] text-xl">
          Our AI-powered system, designed to deliver exceptional results. With a
          95% detection accuracy, our technology minimizes errors, ensuring
          highly accurate assessments. The system completes these assessments in
          under 30 seconds, offering rapid results that don't sacrifice quality.
        </p>
        {/* Progress Indicators */}
        <div className="flex mt-20 space-x-10">
          {/* Accuracy Circle */}
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold mb-5">Accuracy</span>
            <div className="relative w-40 h-40">
              <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#E0E0E0"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#79DD6B"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="283"
                  strokeDashoffset="14"
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
                95%
              </div>
            </div>
          </div>

          {/* Processing Time Circle */}
          <div className="flex flex-col ml-[70px] items-center">
            <span className="text-xl font-bold mb-5">Processing Time</span>
            <div className="relative w-40 h-40">
              <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#E0E0E0"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#79DD6B"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="283"
                  strokeDashoffset="225"
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
                30sec
              </div>
            </div>
          </div>
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
            src={greenpoint}
            alt="greenpoint"
            className="absolute w-[120px] ml-[210px] mt-[120px]"
          />
        </div>

        {/* Right-side text with yellow highlight */}
        <div className="mt-[-100px] text-lg font-medium text-left relative">
          <div className="absolute left-[-20px] top-0 h-[300px] w-1 bg-[#79DD6B]"></div>

          <div className="mt-[50px]">
            <p>Industry Leading</p>
            <p>Large Database</p>
            <p>Lowest Cost</p>
            <p>Safe & Secure</p>
            <p>Integrations</p>
            <p>Highest Performance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadingPerformance;
