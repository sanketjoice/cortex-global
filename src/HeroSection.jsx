import React from "react";
import logo from "./assets/symbols and logos/logo.png";
import cars from "./assets/cars.png";
import bikes from "./assets/bikes.png";
import scooters from "./assets/scooters.png";
import Vans from "./assets/vans.png";
import motorbikes from "./assets/motorbikes.png";

export default function HeroSection() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center px-10 md:px-16 lg:px-24 py-">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center py-4 px-10">
        {/* Logo */}
        <div>
          {/* Replace with your logo import */}
          <img src={logo} alt="Brand Logo" className="w-[250px]" />
        </div>
        {/* Navigation Links */}
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
        {/* Contact Button */}
        <button className="bg-[#3a3aea] w-[200px] h-[50px] text-white px-6 py-2 rounded-2xl text-xl font-medium">
          Contact Us
        </button>
      </div>

      {/* Hero Content */}
      <div className="text-center mt-[100px]">
        <h1 className="text-4xl md:text-6xl font-semibold relative opacity-100">
          <span className="relative inline-block">
            {/* Background Highlight */}
            <span className="absolute left-0 opacity-80 bottom-0 w-full h-6 bg-yellow-300"></span>
            AI-Powered
          </span>{" "}
          Vehicle Damage Inspection
        </h1>

        <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-xl">
          Our AI-Powered damage detection provides near-instant vehicle damage
          detection and assessment for insurance claims & car rental companies.
        </p>
        {/* Call to Action Button */}
        <button className="bg-[#3a3aea] w-[200px] h-[50px] text-white px-6 py-2 rounded-2xl text-xl font-medium mt-8">
          Try Our Demo
        </button>
        <p className=" font-semibold py-5 text-[#3a3aea] text-2xl">
          The Most Advanced Solution For Insurance Reports & Claims
        </p>
      </div>

      {/* Image Grid */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-6 max-">
        {/* Replace with imported images */}
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
    </div>
  );
}
