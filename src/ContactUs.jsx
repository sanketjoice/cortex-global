import React from "react";
import yellowCard from "./assets/Picture24.png";

const ContactUs = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between bg-[#3a3aea] text-white py-16">
      {/* Left Side - Large Yellow Shape */}
      <div className="flex justify-center lg:w-5/12 px-8">
        <img
          src={yellowCard}
          alt="card"
          className="w-[500px] h-auto object-contain"
        />
      </div>

      {/* Right Side - Contact Information */}
      <div className="relative z-10 lg:w-6/12 text-left pl-12">
        <h2 className="text-5xl font-semibold">Contact Us</h2>
        <h3 className="text-2xl font-semibold mt-6">Office</h3>
        <p className="text-lg mt-2 leading-relaxed">
          Suite C, Level 7, World Trust Tower <br /> 50 Stanley Street <br />
          Central, Hong Kong
        </p>
        <p className="text-lg font-bold mt-4 text-white">
          hello@cortexhire.com
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
