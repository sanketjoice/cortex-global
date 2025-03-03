import React from "react";
import "./App.css";
import HeroSection from "./HeroSection";
import DamageDetectionSection from "./DamageDetectionSection";
import TryDemoSection from "./TryDemoSection";
import LeadingPerformance from "./LeadingPerformance";
import FeaturesSection from "./FeaturesSection";
import CoverageSection from "./CoverageSection";
import BusinessApplications from "./BusinessApllications";
import BenefitsForCarRentals from "./BenefitsForCarRentals";
import TechnicalImplementation from "./TechnicalImplementation";
import CortexSection from "./CortexSection";
import ContactUs from "./ContactUs";

function App() {
  return (
    <div className="max-w-[1660px] m-auto">
      <HeroSection />
      <DamageDetectionSection />
      <TryDemoSection />
      <LeadingPerformance />
      <FeaturesSection />
      <CoverageSection />
      <BusinessApplications />
      <BenefitsForCarRentals />
      <TechnicalImplementation />
      <CortexSection />
      <ContactUs />
    </div>
  );
}

export default App;
