import React, { useState } from "react";
import mobileimg from "./assets/mobileimg.png";
import mobilescreen from "./assets/mobilescreen.png";
import yellowpoint from "./assets/yellowpoint.png";
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
import DemoDetailSlideOut from "./DemoDetailSlideOut";
import mobile from "./assets/Picture1.png";

export default function TryDemoSection() {
  const [isSlideoutOpen, setIsSlideoutOpen] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState(null);
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

  const handleDemoClick = () => {
    console.log("Button clicked"); // Debugging
    const demoData = {
      title: "Custom AI Demo",
      description:
        "Upload your own data and see how our AI can provide insights tailored to your needs.",
      apiEndpoint: "/api/demo/custom-analysis",
      sampleImages: [
        { id: "sample1", src: sampleImage1, alt: "Rear door panel damage" },
        { id: "sample2", src: sampleImage2, alt: "Wheel rim damage" },
        { id: "sample3", src: sampleImage3, alt: "Clean front view" },
        { id: "sample4", src: sampleImage4, alt: "Bumper scrape damage" },
        { id: "sample5", src: sampleImage5, alt: "Bumper corner damage" },
        { id: "sample6", src: sampleImage6, alt: "Door edge damage" },
      ],
      technologyShowcase: [
        {
          image: mobile,
          title: "Custom AI Processing",
          description:
            "Analyze your unique dataset using our AI-powered system with real-time insights and recommendations.",
          deviceType: "web",
        },
      ],
      analysisResults: null, // Customize as needed
    };

    setSelectedDemo(demoData);
    setIsSlideoutOpen(true);
    console.log("isSlideoutOpen set to:", true); // Debugging
    console.log("dsfsfsdf");
  };

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
          {sampleImages.map((image, index) => (
            <div key={index} className="w-40 h-14 rounded-sm overflow-hidden">
              <img
                src={image}
                alt={`Sample ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Custom Demo Request Box */}
        <div
          className="border border-gray-300 p-6 rounded-lg mt-6 flex flex-col items-center 
              hover:shadow-lg transition-shadow duration-300"
        >
          <img src={upload} alt="Upload image" className="w-10 h-10 mb-3" />
          <p className="text-gray-700 text-center font-medium">
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
          <button
            className="mt-[-80px] z-50 hover:cursor-pointer bg-[#3a3aea] text-white px-6 w-[200px] self-center rounded-lg h-[40px] font-medium"
            onClick={handleDemoClick}
          >
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

      {/* Render the DemoDetailSlideOut component conditionally */}
      {isSlideoutOpen && selectedDemo && (
        <DemoDetailSlideOut
          isOpen={isSlideoutOpen}
          onClose={() => {
            setIsSlideoutOpen(false);
            console.log("Slideout closed");
          }}
          activeDemo={selectedDemo}
          theme="cortex" // or "antei", depending on your theme
          onRequestDemo={() => setModalOpen(true)} // Now modalOpen is defined
        />
      )}

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center max-w-[1660px] bg-white/30 backdrop-blur-sm z-50">
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
