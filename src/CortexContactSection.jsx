import React from "react";
import img1 from "./assets/Picture19.png";
import img2 from "./assets/Picture20.png";
import img3 from "./assets/Picture21.png";
import img4 from "./assets/Picture22.png";
import quotes from "./assets/Picture23.png";
import yellowCard from "./assets/Picture24.png";

const CortexContactSection = () => {
  return (
    <div className="w-full bg-[#3a3aea] text-white py-12">
      <div className="max-w-[1660px] mx-auto">
        {/* Cortex Section - Keeping this exactly as it was */}
        <section className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 mb-12">
          {/* Left Side - Image Grid */}
          <div className="grid grid-cols-2 grid-rows-2 w-full lg:w-5/12 gap-4 lg:gap-0 mb-8 lg:mb-0">
            <div className="flex justify-center items-center">
              <img
                src={img1}
                alt="Person 1"
                className="w-[90%] h-auto object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-center items-center rounded-full overflow-hidden">
              <img
                src={img2}
                alt="Person 2"
                className="w-[90%] h-auto object-cover rounded-full"
              />
            </div>
            <div className="flex justify-center items-center rounded-full overflow-hidden">
              <img
                src={img3}
                alt="Person 3"
                className="w-[90%] h-auto object-cover rounded-full"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={img4}
                alt="Person 4"
                className="w-[90%] h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Middle - Text Content */}
          <div className="w-full lg:w-6/12 pl-0 lg:pl-4 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              <span className="text-yellow-400 inline-block">
                <img
                  src={quotes}
                  alt="quotes"
                  className="w-[40px] lg:w-[60px]"
                />
              </span>
              Cortex fast-tracks your AI <br className="hidden sm:block" />{" "}
              development.
            </h2>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
              <span className="text-red-500">Don't delay innovation</span>.
            </p>
          </div>
        </section>

        {/* Updated Contact Us Section with Form */}
        <section className="flex flex-col lg:flex-row items-start justify-between px-4 lg:px-20 pt-12 border-t border-blue-500">
          {/* Left Side with Yellow Card and Contact Info */}
          <div className="w-full lg:w-5/12 mb-10 lg:mb-0">
            {/* Yellow Card */}
            <div className="flex justify-start mb-8">
              <img
                src={yellowCard}
                alt="card"
                className="w-full max-w-[400px] h-auto object-contain"
              />
            </div>

            {/* Contact Information */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact Us</h2>
            <h3 className="text-xl font-medium mb-2">Office</h3>
            <address className="not-italic">
              <p>Suite C, Level 7, World Trust Tower</p>
              <p>50 Stanley Street</p>
              <p>Central, Hong Kong</p>
            </address>
          </div>

          {/* Right Side with Form */}
          <div className="w-full lg:w-6/12">
            {/* Radio buttons for contact type */}
            <div className="flex flex-wrap gap-4 mb-6">
              {["CLIENT", "PARTNER", "INVESTOR", "JOB APPLIER", "MEDIA"].map(
                (type) => (
                  <label
                    key={type}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="contactType"
                      value={type.toLowerCase()}
                      className="w-4 h-4"
                    />
                    <span>{type}</span>
                  </label>
                )
              )}
            </div>

            {/* Contact form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name*"
                className="w-3/4 p-4 rounded-xl bg-white text-gray-800"
                required
              />

              <input
                type="email"
                placeholder="Email Address*"
                className="w-3/4 p-4 rounded-xl bg-white text-gray-800"
                required
              />

              <input
                type="text"
                placeholder="Title of message*"
                className="w-3/4 p-4 rounded-xl bg-white text-gray-800"
                required
              />

              <input
                type="text"
                placeholder="Subject of message*"
                className="w-3/4 p-4 rounded-xl bg-white text-gray-800"
                required
              />

              <textarea
                placeholder="Message*"
                rows="5"
                className="w-3/4 p-4 rounded-xl bg-white text-gray-800"
                required
              ></textarea>
            </form>
            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold py-3 px-10 rounded-xl hover:bg-yellow-300 transition duration-300 mt-2 hover:cursor-pointer"
            >
              SUBMIT
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CortexContactSection;
