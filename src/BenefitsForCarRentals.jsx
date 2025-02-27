import crashPic from "./assets/Picture15.png";
import purpleCard from "./assets/Picture16.png";
import React from "react";

export default function BenefitsForCarRentals() {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start px-6 lg:pr-28 py-12 mb-[100px]">
      {/* Left Side Image with Purple Shape */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <img src={purpleCard} alt="" className="w-[400px] absolute" />
        <img
          src={crashPic}
          alt="Car Collision"
          className="relative z-10 w-[400px] max-w-md lg:max-w-lg"
        />
      </div>

      {/* Right Side Content */}
      <div className="w-full lg:w-1/2 lg:pl-12 mt-30">
        <h2 className="text-7xl font-bold text-black">
          Benefits for Car <br /> Rentals
          <span className="text-[#642ec7]">.</span>
        </h2>
        <p className="text-[#642ec7] text-2xl font-semibold mt-2">
          Stay Ahead with Continuous Innovation
        </p>

        <div className="mt-6 flex flex-col lg:flex-row gap-8">
          {/* Operational Improvements */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold text-[#3a3aea]">
              Operational Improvements
            </h3>
            <ul className="list-disc text-xl list-inside text-gray-700 mt-2">
              <li>Standardized, error-reduced inspection processes.</li>
              <li>Comprehensive digital records for better decision-making.</li>
              <li>
                Automated triggers to streamline workflow and reduce manual
                tasks.
              </li>
            </ul>
          </div>

          {/* Future Development Roadmap */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-lg font-semibold text-[#3a3aea]">
              Future Development Roadmap
            </h3>
            <ul className="list-disc text-xl list-inside text-gray-700 mt-2">
              <li>Advanced 3D damage mapping for better visualization.</li>
              <li>Predictive maintenance alerts to prevent future issues.</li>
              <li>
                Enhanced fraud detection and cross-location standardization.
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Us Button */}
        <button className="mt-10 w-[200px] bg-[#642ec7] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
}
