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
import mobile from "./assets/Picture1.png";

export default function TryDemoSection() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const sampleImagesData = [
    {
      src: sampleImage1,
      scope: "Rear Door Panel",
      damages: [
        {
          name: "Door edge dings/dents",
          severity: "Minor",
          confidence: "80.0%",
          cost: "$100.00",
        },
      ],
      totalCost: "$100.00",
      recommendation: "Very minor damage detected. Could be easily ignored.",
    },
    {
      src: sampleImage2,
      scope: "Wheel Assembly",
      damages: [
        {
          name: "Wheel rim scratches",
          severity: "Moderate",
          confidence: "92.5%",
          cost: "$200.00",
        },
      ],
      totalCost: "$200.00",
      recommendation:
        "Cosmetic damage only. Repair recommended for aesthetic purposes.",
    },
    {
      src: sampleImage3,
      scope: "Front Panel",
      damages: [
        {
          name: "No damage detected",
          severity: "None",
          confidence: "98.0%",
          cost: "$0.00",
        },
      ],
      totalCost: "$0.00",
      recommendation: "No damage detected. No action required.",
    },
    {
      src: sampleImage4,
      scope: "Front Bumper",
      damages: [
        {
          name: "Surface scratches",
          severity: "Minor",
          confidence: "87.3%",
          cost: "$150.00",
        },
        {
          name: "Paint transfer",
          severity: "Minor",
          confidence: "75.8%",
          cost: "$100.00",
        },
      ],
      totalCost: "$250.00",
      recommendation:
        "Minor cosmetic damage. Touch-up paint may resolve most issues.",
    },
    {
      src: sampleImage5,
      scope: "Rear Bumper Corner",
      damages: [
        {
          name: "Cracked bumper",
          severity: "Severe",
          confidence: "94.7%",
          cost: "$450.00",
        },
        {
          name: "Mounting damage",
          severity: "Moderate",
          confidence: "82.1%",
          cost: "$150.00",
        },
      ],
      totalCost: "$600.00",
      recommendation:
        "Bumper replacement recommended due to structural damage.",
    },
    {
      src: sampleImage6,
      scope: "Driver Door Panel",
      damages: [
        {
          name: "Door ding",
          severity: "Minor",
          confidence: "89.5%",
          cost: "$120.00",
        },
      ],
      totalCost: "$120.00",
      recommendation:
        "Paintless dent repair possible. Quick and cost-effective solution.",
    },
    {
      src: sampleImage7,
      scope: "Side Mirror Assembly",
      damages: [
        {
          name: "Broken casing",
          severity: "Moderate",
          confidence: "96.3%",
          cost: "$180.00",
        },
      ],
      totalCost: "$180.00",
      recommendation: "Casing replacement recommended. Mirror glass intact.",
    },
    {
      src: sampleImage8,
      scope: "Headlight Assembly",
      damages: [
        {
          name: "Cracked lens",
          severity: "Severe",
          confidence: "97.8%",
          cost: "$320.00",
        },
      ],
      totalCost: "$320.00",
      recommendation:
        "Full headlight assembly replacement required for safety.",
    },
    {
      src: sampleImage9,
      scope: "Vehicle Roof",
      damages: [
        {
          name: "Multiple hail dents",
          severity: "Moderate",
          confidence: "88.4%",
          cost: "$800.00",
        },
      ],
      totalCost: "$800.00",
      recommendation:
        "Paintless dent repair recommended for multiple small impacts.",
    },
    {
      src: sampleImage10,
      scope: "Hood Panel",
      damages: [
        {
          name: "Large central dent",
          severity: "Moderate",
          confidence: "92.1%",
          cost: "$350.00",
        },
        {
          name: "Paint cracking",
          severity: "Minor",
          confidence: "78.6%",
          cost: "$150.00",
        },
      ],
      totalCost: "$500.00",
      recommendation:
        "Panel repair and repaint required. Check for underlying damage.",
    },
    {
      src: sampleImage11,
      scope: "Taillight Assembly",
      damages: [
        {
          name: "Broken lens",
          severity: "Severe",
          confidence: "99.1%",
          cost: "$240.00",
        },
      ],
      totalCost: "$240.00",
      recommendation:
        "Complete replacement required. Safety and legal compliance issue.",
    },
    {
      src: sampleImage12,
      scope: "Front Fender",
      damages: [
        {
          name: "Dent with rust",
          severity: "Severe",
          confidence: "91.4%",
          cost: "$400.00",
        },
        {
          name: "Previous poor repair",
          severity: "Moderate",
          confidence: "84.2%",
          cost: "$200.00",
        },
      ],
      totalCost: "$600.00",
      recommendation:
        "Complete panel replacement recommended due to rust formation.",
    },
  ];

  const handleImageClick = (imageData) => {
    setSelectedImage(imageData);
    setImageModalOpen(true);
  };

  return (
    <section
      id="demo-section"
      className="flex flex-col lg:flex-row items-center justify-between py-16 px-8 lg:px-28"
    >
      {/* Left Content */}
      <div className="ml-[0px]">
        <h2 className="text-7xl text-center font-semibold">
          Try Our <span className="relative">Demo</span>
          <span className="text-[#063edb]">.</span>
        </h2>
        <p className="text-[#063edb] mb-[100px] text-2xl text-center font-medium my-5">
          The Most Advanced Vehicle Damage Detection
        </p>

        {/* Sample Images Grid - KEPT ORIGINAL */}
        <p className="text-lg font-semibold">Test With Sample Image</p>
        <div className="grid grid-cols-3 gap-3 mt-6">
          {sampleImagesData.map((imageData, index) => (
            <div
              key={index}
              className="w-40 h-14 rounded-sm overflow-hidden cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg hover:z-10 relative"
              onClick={() => handleImageClick(imageData)}
            >
              <img
                src={imageData.src}
                alt={`Sample ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Custom Demo Request Box */}
        <div
          className="border border-gray-300 p-6 rounded-lg mt-6 flex flex-col items-center 
          hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          onClick={() => setContactModalOpen(true)}
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
            onClick={() => setContactModalOpen(true)}
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
      {/* Contact Form Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm z-50">
          <div className="bg-white border w-full max-w-md mx-auto border-gray-200 shadow-2xl rounded-xl p-6 relative">
            <button
              onClick={() => setContactModalOpen(false)}
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
      {/* Image Detail Modal - ONLY ENLARGED THE POPUP IMAGE */}
      {imageModalOpen && selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm z-50">
          <div className="bg-white border w-full max-w-5xl mx-auto border-gray-200 shadow-2xl rounded-xl overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex space-x-6">
                <div>
                  <p className="text-gray-500 font-medium">Analysis</p>
                  <p className="font-semibold text-xl">{selectedImage.scope}</p>
                </div>
              </div>
              <button
                onClick={() => setImageModalOpen(false)}
                className="hover:cursor-pointer text-gray-600 hover:text-gray-900 text-2xl"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Image Column - ENLARGED */}
              <div className="md:w-3/5 p-6">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.scope}
                    className="w-full h-auto object-contain max-h-[600px]"
                  />
                </div>
              </div>

              {/* Damage Details Column */}
              <div className="md:w-2/5 p-4 overflow-y-auto max-h-[600px]">
                <h3 className="font-semibold text-lg pb-2">Detected Damages</h3>

                {selectedImage.damages.map((damage, index) => (
                  <div key={index} className="py-4 border-b">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">{damage.name}</p>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          damage.severity === "Minor"
                            ? "bg-yellow-100 text-yellow-800"
                            : damage.severity === "Moderate"
                            ? "bg-orange-100 text-orange-800"
                            : damage.severity === "Severe"
                            ? "bg-red-100 text-red-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {damage.severity}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-500">Confidence</p>
                        <p className="font-medium">{damage.confidence}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Est. Cost</p>
                        <p className="font-medium">{damage.cost}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="border-t py-4 flex justify-between items-center">
                  <p className="font-semibold text-lg">Total Estimated Cost</p>
                  <p className="font-bold text-xl text-blue-600">
                    {selectedImage.totalCost}
                  </p>
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-800">Recommendation</p>
                  <p className="text-blue-800 mt-1">
                    {selectedImage.recommendation}
                  </p>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    className="bg-[#3a3aea] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                    onClick={() => {
                      setImageModalOpen(false);
                      setContactModalOpen(true);
                    }}
                  >
                    Request Full Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
