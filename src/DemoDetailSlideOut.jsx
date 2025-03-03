import React, { useState, useEffect } from "react";
import { marked } from "marked";
import closeIcon from "./assets/close.svg";
import upload from "./assets/upload.svg";
import leftarrow from "./assets/chevron-left.svg";
import rightarrow from "./assets/rightarrow.svg";

const DemoDetailSlideOut = ({
  isOpen,
  onClose,
  activeDemo,
  theme,
  onRequestDemo, // New prop for handling demo request
}) => {
  const [activeImage, setActiveImage] = useState(null);
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const [markdownContent, setMarkdownContent] = useState("");
  const [demoResult, setDemoResult] = useState(null);

  // Debugging logs
  useEffect(() => {
    console.log("Showcase Index:", showcaseIndex);
    console.log("Technology Showcase:", activeDemo?.technologyShowcase);
  }, [showcaseIndex, activeDemo]);

  // Load markdown content when activeDemo changes
  useEffect(() => {
    if (activeDemo?.contentPath) {
      fetch(activeDemo.contentPath)
        .then((response) => response.text())
        .then((text) => {
          setMarkdownContent(marked.parse(text)); // Use marked.parse()
        })
        .catch((error) => {
          console.error("Failed to load markdown content:", error);
          setMarkdownContent("Failed to load content. Please try again.");
        });
    }
  }, [activeDemo]);

  // Analyze image
  const analyzeImage = async (imageName) => {
    if (!activeDemo?.apiEndpoint) {
      console.error("Cannot analyze image: apiEndpoint is undefined");
      return;
    }

    try {
      const response = await fetch(activeDemo.apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageName }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setDemoResult(result);
    } catch (error) {
      console.error("Analysis failed:", error);
      setDemoResult({ error: "Analysis failed: " + error.message });
    }
  };

  // Handle image click
  const handleImageClick = (image) => {
    setActiveImage(image);
    analyzeImage(image.id);
  };

  // Handle showcase navigation
  const nextShowcase = () => {
    setShowcaseIndex((prevIndex) => {
      const nextIndex =
        (prevIndex + 1) % (activeDemo.technologyShowcase?.length || 1);
      console.log("Next Index:", nextIndex); // Debugging
      return nextIndex;
    });
  };

  const prevShowcase = () => {
    setShowcaseIndex((prevIndex) => {
      const prevIndexNew =
        (prevIndex - 1 + (activeDemo.technologyShowcase?.length || 1)) %
        (activeDemo.technologyShowcase?.length || 1);
      console.log("Previous Index:", prevIndexNew); // Debugging
      return prevIndexNew;
    });
  };

  if (!isOpen || !activeDemo) return null;

  return (
    <div className="fixed inset-0 max-w-[1660px] m-auto z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      {/* Content */}
      <div
        className={`absolute inset-y-0 right-0 w-full md:w-2/3 lg:w-3/4 overflow-y-auto ${
          theme === "cortex" ? "bg-white" : "bg-antei-base-100"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-10 p-2 rounded-full ${
            theme === "cortex"
              ? "text-gray-600 hover:bg-gray-100"
              : "text-gray-400 hover:bg-gray-800"
          }`}
        >
          <img
            src={closeIcon}
            alt="Close panel"
            className="w-6 h-6 hover:cursor-pointer"
            style={
              theme === "cortex" ? {} : { filter: "brightness(0) invert(1)" }
            }
          />
        </button>

        <div className="p-8">
          <div className="space-y-12">
            {/* Header */}
            <div>
              <h2
                className={`text-3xl font-semibold ${
                  theme === "cortex" ? "text-cortex-neutral" : "text-white"
                }`}
              >
                {activeDemo.title}
              </h2>
              <p
                className={`mt-2 text-lg ${
                  theme === "cortex" ? "text-gray-600" : "text-gray-300"
                }`}
              >
                {activeDemo.description}
              </p>
            </div>

            {/* Demo Interface */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <h3
                  className={`text-xl font-semibold ${
                    theme === "cortex" ? "text-cortex-neutral" : "text-white"
                  }`}
                >
                  Test with Sample Images
                </h3>

                {/* Sample Images Grid */}
                <div className="grid grid-cols-3 gap-2">
                  {activeDemo.sampleImages?.map((image) => (
                    <img
                      key={image.id}
                      src={image.src}
                      alt={image.alt}
                      onClick={() => handleImageClick(image)}
                      className={`w-full h-20 object-cover rounded cursor-pointer transition-transform hover:scale-105 ${
                        activeImage?.id === image.id
                          ? theme === "cortex"
                            ? "ring-2 ring-cortex-primary"
                            : "ring-2 ring-antei-primary"
                          : ""
                      }`}
                    />
                  ))}
                </div>

                {/* Custom Demo Request Section */}
                <div
                  className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer ${
                    theme === "cortex"
                      ? "border-gray-300 hover:border-cortex-primary"
                      : "border-gray-700 hover:border-antei-primary"
                  }`}
                  onClick={() => {
                    onClose(); // Close the slide-out
                    onRequestDemo(); // Open the contact form
                  }}
                >
                  <img
                    src={upload}
                    alt="Upload image"
                    className={`w-[60px] mb-2 mx-auto ${
                      theme === "cortex"
                        ? "opacity-40"
                        : "brightness-0 invert opacity-60"
                    }`}
                  />
                  <p
                    className={`${
                      theme === "cortex" ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    Request a custom demo with your data
                  </p>
                </div>
              </div>

              {/* Output Section */}
              <div className="space-y-4">
                <h3
                  className={`text-xl font-semibold ${
                    theme === "cortex" ? "text-cortex-neutral" : "text-white"
                  }`}
                >
                  Analysis Results
                </h3>

                {activeImage && (
                  <div className="space-y-6">
                    {/* Image with Overlay */}
                    <div className="relative">
                      <img
                        src={activeImage.src}
                        alt={activeImage.alt}
                        className="w-full rounded-lg"
                      />
                      {/* Overlay Markers */}
                      {demoResult?.findings?.map((finding) => (
                        <div
                          key={finding.type}
                          className="absolute border-2 rounded-md flex items-center justify-center"
                          style={{
                            left: `${finding.location.x * 100}%`,
                            top: `${finding.location.y * 100}%`,
                            width: `${finding.location.width * 100}%`,
                            height: `${finding.location.height * 100}%`,
                          }}
                        >
                          <span
                            className={`px-2 py-1 text-xs rounded-md text-white ${
                              finding.severity === "Critical"
                                ? "bg-red-500"
                                : theme === "cortex"
                                ? "bg-cortex-primary"
                                : "bg-antei-primary"
                            }`}
                          >
                            {finding.type}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Analysis Results */}
                    {demoResult && (
                      <div
                        className={`rounded-lg p-6 space-y-4 ${
                          theme === "cortex" ? "bg-gray-50" : "bg-gray-900"
                        }`}
                      >
                        {/* Findings Section */}
                        <div className="space-y-3">
                          <h4 className="font-semibold">
                            Detected{" "}
                            {activeDemo.resultType === "damage"
                              ? "Damages"
                              : "Issues"}
                          </h4>
                          {demoResult.findings?.map((finding) => (
                            <div
                              key={finding.type}
                              className={`rounded-lg p-4 ${
                                theme === "cortex" ? "bg-white" : "bg-gray-800"
                              }`}
                            >
                              <div className="flex justify-between items-center mb-2">
                                <span className="font-medium">
                                  {finding.type}
                                </span>
                                {finding.severity && (
                                  <span
                                    className={`text-sm px-2 py-1 rounded ${
                                      finding.severity.includes("Minor")
                                        ? "bg-yellow-100 text-yellow-800"
                                        : finding.severity.includes("Moderate")
                                        ? "bg-orange-100 text-orange-800"
                                        : finding.severity.includes(
                                            "Critical"
                                          ) ||
                                          finding.severity.includes("Major")
                                        ? "bg-red-100 text-red-800"
                                        : "bg-blue-100 text-blue-800"
                                    }`}
                                  >
                                    {finding.severity}
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Technology Showcase */}
            <div className="relative overflow-hidden py-12">
              <h3
                className={`text-2xl font-semibold mb-8 ${
                  theme === "cortex" ? "text-cortex-neutral" : "text-white"
                }`}
              >
                Technology Overview
              </h3>

              {/* Main Showcase */}
              <div className="relative">
                {/* Navigation Arrows */}
                <button
                  onClick={prevShowcase}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-lg shadow-lg transition-all hover:bg-white/20"
                >
                  <img
                    src={leftarrow}
                    alt="Previous"
                    className="w-6 h-6"
                    style={
                      theme === "cortex"
                        ? {}
                        : { filter: "brightness(0) invert(1)" }
                    }
                  />
                </button>

                <button
                  onClick={nextShowcase}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-lg shadow-lg transition-all hover:bg-white/20"
                >
                  <img
                    src={rightarrow}
                    alt="Next"
                    className="w-6 h-6"
                    style={
                      theme === "cortex"
                        ? {}
                        : { filter: "brightness(0) invert(1)" }
                    }
                  />
                </button>

                {/* Main Content */}
                <div className="overflow-hidden mx-4 md:mx-8 lg:mx-12 xl:mx-16">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                      transform: `translateX(-${showcaseIndex * 100}%)`,
                    }}
                  >
                    {activeDemo.technologyShowcase?.map((item, index) => (
                      <div
                        key={index}
                        className="w-full flex-shrink-0 px-2 md:px-4 lg:px-8"
                      >
                        <div className="grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
                          {/* Device Mockup */}
                          <div className="relative w-full">
                            <div
                              className={`${
                                item.deviceType === "phone"
                                  ? "phone-mockup w-3/4 md:w-full mx-auto"
                                  : "laptop-mockup w-full h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] min-h-[300px]"
                              } relative overflow-hidden rounded-xl bg-transparent`}
                            >
                              <img
                                src={item.image}
                                alt={item.title}
                                className={`w-full h-full ${
                                  item.deviceType === "phone"
                                    ? "aspect-[9/16] object-contain"
                                    : "aspect-[1/1] object-cover"
                                } transition-transform duration-300 hover:scale-105`}
                              />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="space-y-4 md:space-y-6 lg:space-y-8 max-w-xl">
                            <h4
                              className={`text-xl md:text-2xl lg:text-3xl font-semibold ${
                                theme === "cortex"
                                  ? "text-cortex-neutral"
                                  : "text-white"
                              }`}
                            >
                              {item.title}
                            </h4>
                            <p
                              className={`text-base md:text-lg lg:text-xl leading-relaxed ${
                                theme === "cortex"
                                  ? "text-gray-600"
                                  : "text-gray-300"
                              }`}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Markdown Content */}
            <div
              className="prose max-w-[800px] mx-auto"
              dangerouslySetInnerHTML={{ __html: markdownContent }}
            ></div>
            {/* AI-Powered Vehicle Damage Detection System */}
            <div className=" text-center prose max-w-[800px] mx-auto mt-12">
              <h2 className="text-4xl ft-semibold mb-4">
                AI-Powered Vehicle Damage Detection System
              </h2>
              <p className="mb-7">
                Transform your vehicle inspection process with our cutting-edge
                AI damage detection platform. Our system delivers near-instant,
                accurate damage assessment for insurance claims, rental returns,
                and fleet management through advanced computer vision and deep
                learning technologies.
              </p>

              {/* Core Technology Overview */}
              <h3 className="text-3xl ft-semibold mb-4">
                Core Technology Overview
              </h3>
              <p className="mb-7">
                Our AI system employs sophisticated multi-stage analysis:
              </p>
              <ul className="list-none flex flex-col gap-3 pl-8 mb-4">
                <li>High-definition image capture through mobile devices</li>
                <li>Fast damage recognition and classification</li>
                <li>Severity assessment and cost estimation</li>
                <li>Automated report generation</li>
                <li>Historical damage comparison</li>
                <li>Claim processing automation</li>
              </ul>

              {/* Key Features and Capabilities */}
              <h3 className="text-3xl nt-semibold mb-4">
                Key Features and Capabilities
              </h3>
              <p className="mb-7">
                Our system provides comprehensive detection across all vehicle
                surfaces:
              </p>

              {/* Exterior Damage Detection */}
              <h4 className="text-2xl ft-semibold mb-2">
                Exterior Damage Detection:
              </h4>
              <ul className="list-none flex flex-col gap-3 pl-8 mb-7">
                <li>Door edge dings/dents</li>
                <li>Point scratches</li>
                <li>Bumper scrapes/scuffs</li>
                <li>Wheel rim/curb rash</li>
                <li>Windshield chips/cracks</li>
                <li>Side mirror cracks/scratches</li>
                <li>Hail dents</li>
                <li>Point transfer</li>
                <li>Grille damage</li>
                <li>Scuffed headlights/taillights</li>
                <li>Dented trunk/hatch</li>
                <li>License plate bending</li>
                <li>Roof dents</li>
                <li>Undercarriage scrapes</li>
                <li>Broken antenna/mast</li>
              </ul>

              {/* Interior Damage Detection */}
              <h4 className="text-2xl ft-semibold mb-2">
                Interior Damage Detection:
              </h4>
              <ul className="list-none flex flex-col gap-3 pl-8 mb-4">
                <li>Stains on seats/carpets</li>
                <li>Cigarette burns</li>
                <li>Torn upholstery</li>
                <li>Scratched dashboard</li>
                <li>Broken cupholders/console</li>
                <li>Cracked infotainment screens</li>
                <li>Missing floor mats/cargo covers</li>
                <li>Broken interior door handles</li>
              </ul>

              {/* Functional/Mechanical Visual Detection */}
              <h4 className="text-lg font-semibold mb-2">
                Functional/Mechanical Visual Detection:
              </h4>
              <ul className="list-none flex flex-col gap-3 pl-8 mb-4">
                <li>Tire sidewall damage</li>
                <li>Dented fuel door</li>
                <li>Broken windshield wipers</li>
                <li>Missing hubcaps/wheel covers</li>
                <li>Cracked side windows</li>
                <li>Damaged exterior trim/moldings</li>
                <li>Bent exhaust tip</li>
              </ul>

              {/* Performance Metrics */}
              <h4 className="text-lg font-semibold mb-2">
                Performance Metrics:
              </h4>
              <p className="mb-4">
                Our system delivers industry-leading results:
              </p>
              <ul className="list-none flex flex-col gap-3 pl-8 mb-4">
                <li>95% damage detection accuracy</li>
                <li>Under 30-second processing time</li>
                <li>Comprehensive digital reports</li>
                <li>Automated severity classification</li>
                <li>Cost estimation</li>
              </ul>

              {/* Business Applications */}
              <h3 className="text-xl font-semibold mb-4">
                Business Applications
              </h3>

              {/* Mobile Application Features */}
              <h4 className="text-lg font-semibold mb-2">
                Mobile Application Features:
              </h4>
              <ul className="list-none flex flex-col gap-3 pl-8 mb-4">
                <li>Guided photo capture process</li>
                <li>Voice-annotated inspections (optional)</li>
                <li>Instant report generation</li>
                <li>Direct claim submission</li>
              </ul>

              {/* Admin Dashboard Capabilities */}
              <h4 className="text-lg font-semibold mb-2">
                Admin Dashboard Capabilities:
              </h4>
              <ul className="list-none flex flex-col gap-3 pl-8 mb-4">
                <li>Real-time inspection monitoring</li>
                <li>Fleet-wide damage tracking</li>
                <li>Cost analysis and trending</li>
                <li>Customer history management</li>
                <li>API integration options</li>
                <li>Custom workflow automation</li>
              </ul>

              {/* Technical Implementation */}
              <h3 className="text-xl font-semibold mb-4">
                Technical Implementation
              </h3>

              {/* System Architecture */}
              <h4 className="text-lg font-semibold mb-2">
                System Architecture:
              </h4>
              <p className="mb-4">Core Components:</p>
              <ul className="list-none flex flex-col gap-3 pl-8 mb-4">
                <li>Native mobile applications (iOS/Android)</li>
                <li>Web-based admin interface</li>
                <li>Secure cloud processing</li>
                <li>Database integration layer</li>
                <li>API gateway services</li>
                <li>Analytics engine</li>
              </ul>

              {/* Integration Options */}
              <h4 className="text-2xl foemibold mb-2">Integration Options:</h4>
              <ul className="list-none flex flex-col gap-3 pl-8 mb-4">
                <li>REST API integration</li>
                <li>White-label solutions</li>
                <li>Custom workflow automation</li>
                <li>Database synchronization</li>
                <li>Legacy system compatibility</li>
              </ul>

              {/* Operational Improvements */}
              <h3 className="text-3xl foemibold mb-4">
                Operational Improvements
              </h3>
              <p className="mb-4 text-3xl">Key operational benefits:</p>
              <ul className="list-none flex flex-col gap-3 pl-8 mb-4">
                <li>Standardized inspection process</li>
                <li>Reduced human error</li>
                <li>Comprehensive digital records</li>
                <li>Automated workflow triggers</li>
                <li>Damage cost estimation</li>
              </ul>

              {/* Industry Solutions */}
              <h3 className="text-3xl fonsemibold mb-4">Industry Solutions</h3>

              {/* Insurance Providers */}
              <h4 className="text-2xl fonsemibold mb-2">
                Insurance Providers:
              </h4>
              <ul className="list-none flex flex-col gap-3 pl-8 mb-4">
                <li>Automated claim processing</li>
                <li>Fraud detection algorithms</li>
                <li>Policy integration</li>
                <li>Multi-vehicle management</li>
                <li>Risk assessment tools</li>
              </ul>

              {/* Rental Agencies */}
              <h4 className="text-2xl font-semold mb-2">Rental Agencies:</h4>
              <ul className="list-none flex flex-col gap-3 pl-8 mb-4">
                <li>Quick vehicle check-in/out</li>
                <li>Fleet damage tracking</li>
                <li>Customer self-service options</li>
                <li>Maintenance scheduling</li>
                <li>Revenue recovery automation</li>
              </ul>

              {/* Fleet Management */}
              <h4 className="text-2xl mb-2">Fleet Management:</h4>
              <ul className="list-none flex flex-col gap-3 pl-8 mb-4">
                <li>Regular inspection automation</li>
                <li>Preventive maintenance alerts</li>
                <li>Driver accountability tracking</li>
                <li>Cost center allocation</li>
                <li>Fleet health monitoring</li>
              </ul>

              {/* Future Development Roadmap */}
              <h3 className="text-4xl mb-4">Future Development Roadmap</h3>
              <p className="mb-4">Upcoming enhancements:</p>
              <ul className="list-none flex flex-col gap-3 pl-8 mb-4">
                <li>Advanced 3D damage mapping</li>
                <li>Predictive maintenance alerts</li>
                <li>AI-driven repair cost optimization</li>
                <li>Enhanced fraud detection</li>
                <li>Cross-location standardization</li>
              </ul>

              {/* Call to Action */}
              <p className="mt-8 text-lg ">
                Contact our team to revolutionize your vehicle inspection
                process with our AI-powered damage detection system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoDetailSlideOut;
