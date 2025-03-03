import crashPic from "./assets/Picture15.png";
import purpleCard from "./assets/Picture16.png";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BenefitsForCarRentals() {
  const [modalOpen, setModalOpen] = useState(false);
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
        <button
          className="mt-10 w-[200px] bg-[#642ec7] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition"
          onClick={() => setModalOpen(true)}
        >
          Contact Us
        </button>
      </div>
      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
