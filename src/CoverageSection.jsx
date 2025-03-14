import exterior from "./assets/Picture10.png";
import interior from "./assets/Picture11.png";
import mechanical from "./assets/Picture12.png";
import React from "react";
import upload from "./assets/upload.svg";
import sampleImage1 from "./assets/rear-door-damage.jpeg";
import sampleImage2 from "./assets/wheel-damage.jpeg";
import sampleImage3 from "./assets/front-clean.webp";
import sampleImage4 from "./assets/bumper-scrape.jpeg";
import sampleImage5 from "./assets/bumper-corner.jpeg";
import sampleImage6 from "./assets/door-ding.png";
import sampleImage7 from "./assets/Picture25.png";
import sampleImage8 from "./assets/Picture26.png";
import sampleImage9 from "./assets/Picture27.png";
import sampleImage10 from "./assets/Picture28.png";
import sampleImage11 from "./assets/Picture29.png";
import sampleImage12 from "./assets/Picture30.png";
import mobile from "./assets/Picture1.png";
import { useState } from "react";

export default function CoverageSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const sampleImages = [
    sampleImage1,
    sampleImage2,
    sampleImage3,
    sampleImage4,
    sampleImage5,
    sampleImage6,
    sampleImage7,
    sampleImage8,
    sampleImage9,
    sampleImage10,
    sampleImage11,
    sampleImage12,
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-28 mb-[100px] py-10 lg:py-20 gap-12 lg:gap-0">
      {/* Left Content */}
      <div className="max-w-lg w-full">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-center lg:text-left">
          Ensuring Full <br className="hidden lg:block" /> Coverage
          <span className="text-yellow-500">.</span>
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-purple-700 mt-4 text-center lg:text-left">
          Advanced Damage Recognition
        </h3>
        <p className="text-gray-900 text-lg md:text-xl mt-4 text-center lg:text-left">
          Detect every scratch and dent with unparalleled precision. Our system
          thoroughly scans all vehicle surfaces to ensure comprehensive damage
          assessment.
        </p>
        {/* Call to Action Button */}
        <div className="flex justify-center lg:justify-start">
          <button
            className="bg-[#642ec7] hover:cursor-pointer w-[200px] h-[50px] text-white px-6 py-2 rounded-2xl text-xl font-medium mt-8"
            onClick={() => setModalOpen(true)}
          >
            Try Our Demo
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-[45%] space-y-6">
        {damageTypes.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
          >
            {/* Image with border */}
            <div
              className={`w-[200px] rounded-4xl overflow-hidden border-r-6 border-t-6 ${item.borderColor}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h4 className="text-xl md:text-2xl font-semibold text-purple-700 mb-2">
                {item.title}
              </h4>
              <ul className="list-disc list-inside font-semibold text-gray-600 text-base md:text-lg">
                {item.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a
                href="#"
                className="text-purple-600 font-bold text-base md:text-lg mt-1 inline-block"
              >
                View full list
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Requesting a Demo */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm z-50 px-4">
          <div className="bg-white border max-w-md border-gray-200 shadow-2xl rounded-xl p-6 w-full relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 hover:cursor-pointer text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center">Request a Demo</h2>
            <p className="text-center text-gray-600">
              See how our AI can transform your operations
            </p>

            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  Company Name *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Your Name *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Job Title *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Use Case *
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#3a3aea] text-white py-2 rounded-lg font-medium hover:bg-blue-600 hover:cursor-pointer"
              >
                Request Demo
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

const damageTypes = [
  {
    title: "Exterior Damage Detection",
    image: exterior,
    borderColor: "border-yellow-400",
    features: [
      "Door edge dings, dents",
      "Paint scratches, bumper scrapes",
      "Wheel rim and curb rash",
      "And more...",
    ],
  },
  {
    title: "Interior Damage Detection",
    image: interior,
    borderColor: "border-red-500",
    features: [
      "Stains on seats and carpets",
      "Torn upholstery, scratched dashboards",
      "Broken cupholders and consoles",
      "And more...",
    ],
  },
  {
    title: "Mechanical Damage Detection",
    image: mechanical,
    borderColor: "border-purple-600",
    features: [
      "Tire sidewall damage, broken wipers",
      "Cracked side windows, bent exhaust tips",
      "Dented fuel door, missing wheel covers",
      "And more...",
    ],
  },
];
