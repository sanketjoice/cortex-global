import React from "react";
import yellowCard from "./assets/Picture24.png";

const ContactUs = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between bg-[#3a3aea] text-white">
      {/* Left Side - Large Yellow Shape */}

      <img
        src={yellowCard}
        alt="card"
        className="w-[700px] h-screen bg-[#3a3aea]"
      />

      {/* Right Side - Contact Information */}
      <div className="relative z-10 lg:w-1/2 text-left pl-[150px]">
        <h2 className="text-7xl font-semibold">Contact Us</h2>
        <h3 className="text-2xl font-semibold mt-18">Office</h3>
        <p className="text-xl mt-2">
          Suite C, Level 7, World Trust Tower <br /> 50 Stanley Street <br />
          Central, Hong Kong
        </p>
        <p className="text-xl font-bold mt-4 text-white">
          hello@cortexhire.com
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
