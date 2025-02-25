import React from "react";
import "./App.css";
import HeroSection from "./HeroSection";
import DamageDetectionSection from "./DamageDetectionSection";
import TryDemoSection from "./TryDemoSection";
import LeadingPerformance from "./LeadingPerformance";
import FeaturesSection from "./FeaturesSection";

function App() {
  return (
    <div>
      <HeroSection />
      <DamageDetectionSection />
      <TryDemoSection />
      <LeadingPerformance />
      <FeaturesSection />
    </div>
  );
}

export default App;
