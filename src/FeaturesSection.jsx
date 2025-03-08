import mobile from "./assets/Picture1.png";
import React from "react";

export default function FeaturesSection() {
  return (
    <section className="relative py-16 px-6 lg:px-28 bg-white">
      {/* Main content container */}
      <div className="max-w-7xl mx-auto">
        {/* Top section with image and features list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div className="text-center md:text-left">
            <div className="bg-[#cb6ce6] text-white px-5 py-1 text-center rounded-full w-[150px] h-[40px] text-lg md:text-xl font-semibold mx-auto md:mx-0">
              AI-Powered
            </div>
            <br />
            <h2 className="text-4xl md:text-7xl font-semibold relative inline-block">
              Features
            </h2>
            <h3 className="font-semibold text-xl md:text-2xl mt-6 md:mt-9">
              Technology Overview
            </h3>
            <ul className="mt-4 text-lg md:text-2xl space-y-2 text-gray-700">
              <li className="flex items-center justify-center md:justify-start">
                <span className="w-3 h-3 border border-black bg-green-500 rounded-full mr-2"></span>
                High-definition Image Capture
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="w-3 h-3 border border-black bg-yellow-400 rounded-full mr-2"></span>
                Fast Damage Recognition
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="w-3 h-3 border border-black bg-green-500 rounded-full mr-2"></span>
                Severity Assessment
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="w-3 h-3 border border-black bg-green-500 rounded-full mr-2"></span>
                Automated Report Generation
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="w-3 h-3 border border-black bg-red-500 rounded-full mr-2"></span>
                Historical Damage Comparison
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="w-3 h-3 border border-black bg-red-500 rounded-full mr-2"></span>
                Claim Processing Automation
              </li>
            </ul>
          </div>

          {/* Right Side Image - Exactly as original for desktop */}
          <div className="relative mx-auto md:ml-[100px]">
            <img
              src={mobile}
              alt="Mobile Analysis"
              className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] drop-shadow-lg"
            />
          </div>
        </div>

        {/* Feature Descriptions Section - Responsive for mobile, exactly as original for desktop */}
        <div className="mt-12 md:flex md:flex-row">
          {/* This div only exists in desktop view and preserves the original positioning */}
          <div className="hidden md:block md:ml-[-30px] md:w-full">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-row space-x-3 items-start text-left">
                <span className="w-3 h-3 border border-black bg-yellow-400 rounded-full mt-1"></span>
                <div className="w-full">
                  <h4 className="font-semibold text-lg">
                    Detailed Descriptions
                  </h4>
                  <hr className="border-gray-900 my-2" />
                  <p className="text-gray-600">
                    Get detailed descriptions of the damage on areas of the
                    vehicle. Highly accurate detection even in poor lighting.
                  </p>
                </div>
              </div>

              <div className="flex flex-row space-x-3 items-start text-left">
                <span className="w-3 h-3 border border-black bg-green-500 rounded-full mt-1"></span>
                <div className="w-full">
                  <h4 className="font-semibold text-lg">Detected Damages</h4>
                  <hr className="border-gray-900 my-2" />
                  <p className="text-gray-600">
                    Estimations of costs of repair that is needed to fix the
                    damage vehicle area.
                  </p>
                </div>
              </div>

              <div className="flex flex-row space-x-3 items-start text-left">
                <span className="w-3 h-3 border border-black bg-red-500 rounded-full mt-1"></span>
                <div className="w-full">
                  <h4 className="font-semibold text-lg">
                    Total Estimates for Insurance
                  </h4>
                  <hr className="border-gray-900 my-2" />
                  <p className="text-gray-600">
                    Total estimation of the costs, simple one-click sending
                    reports for insurance claims.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-only features section with improved styling */}
          <div className="md:hidden w-full max-w-sm mx-auto">
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-3">
                  <span className="w-4 h-4 border border-black bg-yellow-400 rounded-full mr-3"></span>
                  <h4 className="font-semibold text-lg">
                    Detailed Descriptions
                  </h4>
                </div>
                <hr className="border-gray-300 mb-3" />
                <p className="text-gray-600">
                  Get detailed descriptions of the damage on areas of the
                  vehicle. Highly accurate detection even in poor lighting.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-3">
                  <span className="w-4 h-4 border border-black bg-green-500 rounded-full mr-3"></span>
                  <h4 className="font-semibold text-lg">Detected Damages</h4>
                </div>
                <hr className="border-gray-300 mb-3" />
                <p className="text-gray-600">
                  Estimations of costs of repair that is needed to fix the
                  damage vehicle area.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-3">
                  <span className="w-4 h-4 border border-black bg-red-500 rounded-full mr-3"></span>
                  <h4 className="font-semibold text-lg">
                    Total Estimates for Insurance
                  </h4>
                </div>
                <hr className="border-gray-300 mb-3" />
                <p className="text-gray-600">
                  Total estimation of the costs, simple one-click sending
                  reports for insurance claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
