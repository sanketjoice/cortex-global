import React from "react";
import mobilescreen from "./assets/mobilescreen.png";
import mobilescreen1 from "./assets/leadingimg.png";
import mobileimg from "./assets/Picture7.png";
import greenpoint from "./assets/greenpoint.png";

const LeadingPerformance = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-28 py-10 lg:py-16 bg-white">
      {/* Left Side Content */}
      <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black text-center lg:text-left">
          Leading Industry <br className="hidden lg:block" /> Performance
          <span className="text-green-600">.</span>
        </h2>
        <p className="text-purple-600 text-lg sm:text-xl font-semibold mt-2 text-center lg:text-left">
          Advanced Solution for Car Rental Companies
        </p>
        <p className="text-gray-600 mt-6 lg:mt-10 w-full lg:w-[500px] text-base sm:text-lg lg:text-xl text-center lg:text-left">
          Our AI-powered system, designed to deliver exceptional results. With a
          95% detection accuracy, our technology minimizes errors, ensuring
          highly accurate assessments. The system completes these assessments in
          under 30 seconds, offering rapid results that don't sacrifice quality.
        </p>
        {/* Progress Indicators */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-12 lg:mt-20 space-y-10 sm:space-y-0 sm:space-x-10">
          {/* Accuracy Circle */}
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-xl font-bold mb-3 sm:mb-5">
              Accuracy
            </span>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40">
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
              <div className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl font-bold">
                95%
              </div>
            </div>
          </div>

          {/* Processing Time Circle */}
          <div className="flex flex-col items-center sm:ml-[70px]">
            <span className="text-lg sm:text-xl font-bold mb-3 sm:mb-5">
              Processing Time
            </span>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40">
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
              <div className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl font-bold">
                30sec
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center justify-center relative mt-12 lg:mt-0">
        <div className="flex flex-col relative">
          {/* Mobile Analysis Image */}
          <img
            src={mobilescreen1}
            alt="Mobile Analysis"
            className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[480px] h-auto lg:h-[600px] relative rounded-4xl"
          />

          {/* Overlapping images positioned absolutely */}
          <div className="hidden sm:block">
            {/* <img
              src={mobileimg}
              alt="Mobile Analysis"
              className="max-w-[180px] lg:max-w-xs absolute top-[60%] right-[-30%] sm:right-[-20%] rounded-xl shadow-lg"
            /> */}
            <img
              src={greenpoint}
              alt="greenpoint"
              className="absolute w-[80px] lg:w-[120px] top-[25%] right-[30%] lg:right-[35%]"
            />
          </div>
        </div>

        {/* Right-side text with yellow highlight */}
        <div className="mt-8 sm:mt-[-100px] ml-0 sm:ml-8 text-base lg:text-lg font-medium text-center sm:text-left relative">
          <div className="hidden sm:block absolute left-[-20px] top-0 h-[300px] w-1 bg-[#79DD6B]"></div>

          <div className="mt-4 sm:mt-[50px] space-y-2">
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
