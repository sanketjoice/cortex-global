import React from "react";
import techimg from "./assets/Picture17.png";
import pinkCard from "./assets/Picture18.png";

const TechnicalImplementation = () => {
  return (
    <section className="relative flex flex-col lg:flex-row mb-[100px] mt-[250px] items-center justify-between px-8 lg:px-28 py-16 bg-white">
      {/* Pink Card Background */}
      <div className="absolute right-0">
        <img
          src={pinkCard}
          alt="card"
          className="w-[900px] h-[900px] flex mt-[290px] object-cover"
        />
      </div>

      {/* Left Side - Text Content */}
      <div className="lg:w-1/2 mt-[300px] relative z-10">
        <h2 className="text-7xl font-bold text-black">
          <span className="relative">
            <span className="absolute -left-5 top-5 bg-[#ff1495] w-10 opacity-75 h-[65px]"></span>
            T
          </span>
          echnical <br /> Implementation.
        </h2>
        <h3 className="text-[#ff1495] text-2xl font-semibold mt-4">
          System Architecture
        </h3>
        <p className="text-gray-700 text-xl mt-4">
          Our robust architecture includes native mobile applications, a
          web-based admin interface, secure cloud processing, and comprehensive
          database integration.
        </p>
        <h4 className="font-semibold text-2xl mt-6">Integration Options:</h4>
        <p className="text-gray-700 text-xl mt-2">
          Flexible API services support RESTful integration, offering
          white-label solutions and custom automation to seamlessly fit into
          your existing systems.
        </p>
        <button className="mt-6 px-6 py-3 w-[200px] bg-[#ff1495] text-white font-bold rounded-2xl">
          Enquire Today
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="relative flex justify-end mt-12 lg:mt-0 z-10">
        <img
          src={techimg}
          alt="Technical Implementation"
          className="relative w-[500px] mr-[100px] mt-[350px] rounded-full"
        />
      </div>
    </section>
  );
};

export default TechnicalImplementation;
