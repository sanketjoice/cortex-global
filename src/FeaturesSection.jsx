import mobile from "./assets/Picture1.png";
import React from "react";

export default function FeaturesSection() {
  return (
    <section className="relative flex py-16 px-6 lg:px-28 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div>
          <div className="bg-[#cb6ce6] text-white px-5 py-1 text-center rounded-full w-[150px] h-[40px] text-lg md:text-xl font-semibold">
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
            <li className="flex items-center">
              <span className="w-3 h-3 border border-black bg-green-500 rounded-full mr-2"></span>
              High-definition Image Capture
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 border border-black bg-yellow-400 rounded-full mr-2"></span>
              Fast Damage Recognition
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 border border-black bg-green-500 rounded-full mr-2"></span>
              Severity Assessment
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 border border-black bg-green-500 rounded-full mr-2"></span>
              Automated Report Generation
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 border border-black bg-red-500 rounded-full mr-2"></span>
              Historical Damage Comparison
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 border border-black bg-red-500 rounded-full mr-2"></span>
              Claim Processing Automation
            </li>
          </ul>
        </div>

        {/* Right Side Image */}
        <div className="relative mx-auto md:ml-[100px]">
          <img
            src={mobile}
            alt="Mobile Analysis"
            className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] drop-shadow-lg"
          />
        </div>
      </div>

      {/* Feature Descriptions */}
      <div className="max-w-sm mx-auto mt-12 grid grid-cols-1 gap-6 md:ml-[-30px]">
        <div className="flex items-start space-x-3">
          <span className="w-3 h-3 border border-black bg-yellow-400 rounded-full mt-1"></span>
          <div className="w-full">
            <h4 className="font-semibold text-lg">Detailed Descriptions</h4>
            <hr className="border-gray-900 my-2" />
            <p className="text-gray-600">
              Get detailed descriptions of the damage on areas of the vehicle.
              Highly accurate detection even in poor lighting.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <span className="w-3 h-3 border border-black bg-green-500 rounded-full mt-1"></span>
          <div className="w-full">
            <h4 className="font-semibold text-lg">Detected Damages</h4>
            <hr className="border-gray-900 my-2" />
            <p className="text-gray-600">
              Estimations of costs of repair that is needed to fix the damage
              vehicle area.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <span className="w-3 h-3 border border-black bg-red-500 rounded-full mt-1"></span>
          <div className="w-full">
            <h4 className="font-semibold text-lg">
              Total Estimates for Insurance
            </h4>
            <hr className="border-gray-900 my-2" />
            <p className="text-gray-600">
              Total estimation of the costs, simple one-click sending reports
              for insurance claims.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
