import React from "react";
import techimg from "./assets/Picture17.png";
import pinkCard from "./assets/Picture18.png";

const TechnicalImplementation = () => {
  return (
    <section className="relative flex flex-col lg:flex-row mb-[100px] mt-[100px] lg:mt-[250px] items-center justify-between px-4 sm:px-8 lg:px-28 py-8 lg:py-16 bg-white">
      {/* Pink Card Background - Hidden on mobile */}
      <div className="hidden lg:block absolute right-0">
        <img
          src={pinkCard}
          alt="card"
          className="w-[900px] h-[900px] flex mt-[290px] object-cover"
        />
      </div>

      {/* Left Side - Text Content */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-[300px] relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-black text-center lg:text-left">
          <span className="relative">
            <span className="absolute -left-5 top-3 sm:top-5 bg-[#ff1495] w-6 sm:w-10 opacity-75 h-[40px] sm:h-[65px]"></span>
            T
          </span>
          echnical <br /> Implementation.
        </h2>
        <h3 className="text-[#ff1495] text-xl sm:text-2xl font-semibold mt-4 text-center lg:text-left">
          System Architecture
        </h3>
        <p className="text-gray-700 text-lg sm:text-xl mt-4 text-center lg:text-left">
          Our robust architecture includes native mobile applications, a
          web-based admin interface, secure cloud processing, and comprehensive
          database integration.
        </p>
        <h4 className="font-semibold text-xl sm:text-2xl mt-6 text-center lg:text-left">
          Integration Options:
        </h4>
        <p className="text-gray-700 text-lg sm:text-xl mt-2 text-center lg:text-left">
          Flexible API services support RESTful integration, offering
          white-label solutions and custom automation to seamlessly fit into
          your existing systems.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="mt-6 px-6 py-3 w-[200px] bg-[#ff1495] text-white font-bold rounded-2xl">
            Enquire Today
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full hidden lg:flex justify-center lg:justify-end mt-12 lg:mt-0 z-10">
        <img
          src={techimg}
          alt="Technical Implementation"
          className="w-[300px] sm:w-[400px] lg:w-[500px] lg:mr-[100px] lg:mt-[350px] mt-4 rounded-full"
        />
      </div>
    </section>
  );
};

export default TechnicalImplementation;
