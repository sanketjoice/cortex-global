import logo from "./assets/symbols and logos/logo.png";
import phone1 from "./assets/Picture13.png";
import phone2 from "./assets/Picture14.png";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BusinessApplications() {
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

  return (
    <section className="flex flex-col lg:flex-row items-center mb-[100px] justify-between px-8 lg:px-28 py-16">
      {/* Left Content */}
      <div className="max-w-lg text-left">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Business <br /> Applications.
        </h2>
        <p className="text-xl md:text-2xl font-semibold text-[#3a3aea] mt-4">
          Everything In The Palm of Your Hand.
        </p>

        <div className="mt-6">
          <h3 className="text-xl md:text-2xl font-semibold text-[#3a3aea]">
            Mobile Application Feature
          </h3>
          <ul className="list-disc list-inside text-gray-700 mt-2 text-lg md:text-xl space-y-1">
            <li>Guided photo capture for consistent image quality.</li>
            <li>Optional voice-annotated inspections for ease of use.</li>
            <li>Instant report generation and direct claim submissions.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl md:text-2xl font-semibold text-[#3a3aea]">
            Exterior Damage Detection
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-lg md:text-xl mt-2 space-y-1">
            <li>Monitor inspections in real-time.</li>
            <li>Track and analyze fleet-wide damage.</li>
            <li>Manage customer histories and perform cost trend analysis.</li>
          </ul>
        </div>

        <button
          className="mt-8 px-6 w-[200px] py-3 bg-[#642ec7] text-white font-semibold rounded-2xl hover:bg-blue-800"
          onClick={() => setModalOpen(true)}
        >
          Contact Us
        </button>
      </div>

      {/* Right Content - Images */}
      <div className="relative flex mt-12 mr-0 lg:mr-[100px] lg:mt-0 flex-col sm:flex-row">
        <div className="relative mx-auto sm:mx-0">
          <img
            src={logo}
            alt="logo"
            className="absolute ml-[120px] mt-[65px] w-[120px] sm:w-[170px]"
          />
          <img
            src={phone1}
            alt="Automated Reporting"
            className="w-[300px] sm:w-[350px] md:w-[400px]"
          />
          <p className="text-center text-blue-700 font-semibold mt-[-80px]">
            Automated Reporting
          </p>
        </div>
        <div className="ml-0 sm:ml-[-80px] mt-16 sm:mt-0 mx-auto sm:mx-0">
          <img
            src={phone2}
            alt="Damage Analysis"
            className="w-[300px] sm:w-[350px] md:w-[400px]"
          />
          <p className="text-center text-blue-700 font-semibold mt-[-80px]">
            Damage Analysis
          </p>
        </div>
      </div>
      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
