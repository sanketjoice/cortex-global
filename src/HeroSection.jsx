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
        className="bg-white border max-w-md border-gray-200 shadow-2xl rounded-xl p-6 w-full mx-4 relative"
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

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to scroll to the demo section
  const scrollToDemoSection = () => {
    const demoSection = document.getElementById("demo-section");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white h-auto relative flex flex-col items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      {/* Navbar */}
      <div className="w-full flex flex-wrap justify-between items-center py-4 px-2 sm:px-6 md:px-10">
        <div>
          <img
            src={logo}
            alt="Brand Logo"
            className="w-[180px] md:w-[250px]"
            loading="lazy"
          />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-9 text-black text-lg lg:text-[25px] font-medium">
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
          className="hidden md:block bg-[#3a3aea] hover:cursor-pointer w-[200px] h-[50px] text-white px-6 py-2 rounded-2xl text-xl font-medium"
        >
          Contact Us
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full px-4 py-2 bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-4 text-black text-xl font-medium">
            <a href="#" className="py-2 hover:text-gray-600">
              Our Story
            </a>
            <a href="#" className="py-2 hover:text-gray-600">
              Services
            </a>
            <a href="#" className="py-2 hover:text-gray-600">
              Partnerships
            </a>
            <a href="#" className="py-2 hover:text-gray-600">
              AI Demos
            </a>
            <button
              onClick={() => {
                setModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="bg-[#3a3aea] hover:cursor-pointer w-full text-white px-6 py-2 rounded-2xl text-xl font-medium"
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}

      {/* Hero Content */}
      <div className="text-center mt-8 md:mt-[100px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold relative opacity-100">
          <span className="relative inline-block">
            <span className="absolute left-0 opacity-80 bottom-0 w-full h-3 sm:h-4 md:h-6 bg-yellow-300"></span>
            AI-Powered
          </span>
          <span className="block sm:inline"> Vehicle Damage Inspection</span>
        </h1>

        <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-base sm:text-lg md:text-xl px-4">
          Our AI-Powered damage detection provides near-instant vehicle damage
          detection and assessment for insurance claims & car rental companies.
        </p>
        <button
          className="bg-[#3a3aea] hover:cursor-pointer w-[180px] sm:w-[200px] h-[45px] sm:h-[50px] text-white px-4 sm:px-6 py-2 rounded-2xl text-lg sm:text-xl font-medium mt-6 sm:mt-8"
          onClick={scrollToDemoSection}
        >
          Try Our Demo
        </button>

        <p className="font-semibold py-4 sm:py-5 text-[#3a3aea] text-xl sm:text-2xl px-4">
          The Most Advanced Solution For Insurance Reports & Claims
        </p>
      </div>

      {/* Image Grid */}
      <div className="mt-6 sm:mt-8 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 w-full">
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
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-xl"
              loading="lazy"
            />
            <span className="absolute top-2 left-2 bg-[#0d76bf] text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold px-2 py-1 rounded-md">
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
    </div>
  );
}
