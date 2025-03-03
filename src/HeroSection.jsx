import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "./assets/symbols and logos/logo.png";
import cars from "./assets/cars.png";
import bikes from "./assets/bikes.png";
import scooters from "./assets/scooters.png";
import Vans from "./assets/vans.png";
import motorbikes from "./assets/motorbikes.png";
import sampleImage1 from "./assets/rear-door-damage.jpeg";
import sampleImage2 from "./assets/wheel-damage.jpeg";
import sampleImage3 from "./assets/front-clean.webp";
import sampleImage4 from "./assets/bumper-scrape.jpeg";
import sampleImage5 from "./assets/bumper-corner.jpeg";
import sampleImage6 from "./assets/door-ding.png";
import analysisResult from "./assets/bumper-corner.jpeg";
import DemoDetailSlideOut from "./DemoDetailSlideOut";
import mobile from "./assets/Picture1.png";

// Contact Form Modal Component
const ContactFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center max-w-[1660px] bg-white/30 backdrop-blur-sm z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white border max-w-md border-gray-200 shadow-2xl rounded-xl p-6 w-full relative"
      >
        <button
          onClick={onClose}
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
      </motion.div>
    </div>
  );
};

// Hero Section Component
const demoData = {
  "vd-001": {
    vehicle_area: "Rear Door Panel and Wheel Arch",
    damages: [
      {
        type: "Paint scratches",
        severity: "Moderate to Severe",
        confidence: 0.95,
        estimated_cost: 600.0,
      },
      {
        type: "Paint transfer",
        severity: "Moderate",
        confidence: 0.9,
        estimated_cost: 100.0,
      },
      {
        type: "Dented body panel",
        severity: "Minor",
        confidence: 0.9,
        estimated_cost: 150.0,
      },
    ],
    total_estimated_cost: 850.0,
    recommendation:
      "Recommended for professional repair. Moderate to severe paint scratches and minor dent.",
  },
};

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSlideoutOpen, setIsSlideoutOpen] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState(null);

  return (
    <div className="bg-white min-h-screen relative flex flex-col items-center px-10 md:px-16 lg:px-24 py-">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center py-4 px-10">
        <div>
          <img src={logo} alt="Brand Logo" className="w-[250px]" />
        </div>
        <nav className="hidden md:flex space-x-9 text-black text-[25px] font-medium">
          <a href="#" className="hover:text-gray-600">
            Our Story
          </a>
          <a href="#" className="hover:text-gray-600">
            Services
          </a>
          <a href="#" className="hover:text-gray-600">
            Partnerships
          </a>
          <a href="#" className="hover:text-gray-600">
            AI Demos
          </a>
        </nav>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-[#3a3aea] hover:cursor-pointer w-[200px] h-[50px] text-white px-6 py-2 rounded-2xl text-xl font-medium"
        >
          Contact Us
        </button>
      </div>

      {/* Hero Content */}
      <div className="text-center mt-[100px]">
        <h1 className="text-4xl md:text-6xl font-semibold relative opacity-100">
          <span className="relative inline-block">
            <span className="absolute left-0 opacity-80 bottom-0 w-full h-6 bg-yellow-300"></span>
            AI-Powered
          </span>
          Vehicle Damage Inspection
        </h1>

        <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-xl">
          Our AI-Powered damage detection provides near-instant vehicle damage
          detection and assessment for insurance claims & car rental companies.
        </p>
        <button
          className="bg-[#3a3aea] hover:cursor-pointer w-[200px] h-[50px] text-white px-6 py-2 rounded-2xl text-xl font-medium mt-8"
          onClick={() => {
            setSelectedDemo({
              title: "Vehicle Damage Assessment",
              description:
                "Near-instant vehicle damage detection and assessment for insurance claims & car rental companies.",
              apiEndpoint: "/api/demo/vehicle-damage/analyze",
              sampleImages: [
                {
                  id: "vd-001",
                  src: sampleImage1,
                  alt: "Rear door panel damage",
                },
                { id: "vd-002", src: sampleImage2, alt: "Wheel rim damage" },
                { id: "vd-003", src: sampleImage3, alt: "Clean front view" },
                {
                  id: "vd-004",
                  src: sampleImage4,
                  alt: "Bumper scrape damage",
                },
                {
                  id: "vd-005",
                  src: sampleImage5,
                  alt: "Bumper corner damage",
                },
                { id: "vd-006", src: sampleImage6, alt: "Door edge damage" },
              ],
              technologyShowcase: [
                {
                  image: mobile,
                  title: "Mobile Inspection App",
                  description:
                    "Near-instantly assess vehicle damage with our AI-powered mobile application. Features real-time damage detection and guided inspection workflow.",
                  deviceType: "phone",
                },
                // Add more showcase items
              ],
              analysisResults: demoData["vd-001"], // Select a specific entry
            });
            setIsSlideoutOpen(true); // Open the slide-out
          }}
        >
          Try Our Demo
        </button>

        <p className=" font-semibold py-5 text-[#3a3aea] text-2xl">
          The Most Advanced Solution For Insurance Reports & Claims
        </p>
      </div>

      {/* Image Grid */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-6">
        {[
          { label: "Cars", img: cars },
          { label: "Scooters", img: scooters },
          { label: "Bikes", img: bikes },
          { label: "Vans & Trucks", img: Vans },
          { label: "Motorbikes", img: motorbikes },
        ].map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.img}
              alt={item.label}
              className="w-[800px] h-[400px] object-cover rounded-xl"
            />
            <span className="absolute top-2 left-2 bg-[#0d76bf] text-white text-xl font-semibold px-2 py-1 rounded-md">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      {/* Demo Detail Slide-out */}
      {isSlideoutOpen && selectedDemo && (
        <DemoDetailSlideOut
          isOpen={isSlideoutOpen}
          onClose={() => setIsSlideoutOpen(false)}
          activeDemo={selectedDemo}
          theme="cortex"
          onRequestDemo={() => setModalOpen(true)}
        />
      )}
    </div>
  );
}
