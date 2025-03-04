import React from "react";
import img1 from "./assets/Picture19.png";
import img2 from "./assets/Picture20.png";
import img3 from "./assets/Picture21.png";
import img4 from "./assets/Picture22.png";
import quotes from "./assets/Picture23.png";
import yellowCard from "./assets/Picture24.png";

const CortexContactSection = () => {
  return (
    <div className="bg-[#3a3aea] text-white">
      {/* Cortex Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-4">
        {/* Left Side - Image Grid */}
        <div className="grid grid-cols-2 grid-rows-2 w-5/12">
          <div className="flex justify-center items-center">
            <img
              src={img1}
              alt="Person 1"
              className="w-[90%] h-auto object-cover rounded-lg"
            />
          </div>
          <div className="bg-yel flex justify-center items-center rounded-full overflow-hidden p-">
            <img
              src={img2}
              alt="Person 2"
              className="w-[90%] h-auto object-cover rounded-full"
            />
          </div>
          <div className="flex justify-center items-center rounded-full overflow-hidden p-">
            <img
              src={img3}
              alt="Person 3"
              className="w-[90%] h-auto object-cover rounded-full"
            />
          </div>
          <div className="flex justify-center items-center ">
            <img
              src={img4}
              alt="Person 4"
              className="w-[90%] h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Middle - Text Content */}
        <div className="lg:w-6/12 pl-4">
          <h2 className="text-5xl font-semibold leading-tight">
            <span className="text-yellow-400">
              <img src={quotes} alt="quotes" className="w-[60px]" />
            </span>
            Cortex fast-tracks your AI <br /> development.
          </h2>
          <p className="text-5xl font-bold mt-2">
            <span className="text-red-500">Don't delay innovation</span>.
          </p>
        </div>
      </section>

      {/* Yellow Card and Contact Information Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-4">
        {/* Yellow Card */}
        <div className="flex justify-center px-">
          <img
            src={yellowCard}
            alt="card"
            className="w-[600px] h-auto object-contain"
          />
        </div>

        {/* Contact Information */}
        <div className="lg:w-6/12 text-left pl-10">
          <h2 className="text-5xl font-semibold">Contact Us</h2>
          <h3 className="text-xl font-semibold mt-10">Office</h3>
          <ul className="text-base mt-2 leading-relaxed">
            <li>Suite C, Level 7, World Trust Tower</li>
            <li>50 Stanley Street</li>
            <li>Central, Hong Kong</li>
            <li className="mt-10 font-semibold text-xl">
              hello@cortexhire.com
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CortexContactSection;
