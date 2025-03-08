import React, { Suspense, lazy } from "react";
import "./App.css";

const HeroSection = lazy(() => import("./HeroSection"));
const DamageDetectionSection = lazy(() => import("./DamageDetectionSection"));
const TryDemoSection = lazy(() => import("./TryDemoSection"));
const LeadingPerformance = lazy(() => import("./LeadingPerformance"));
const FeaturesSection = lazy(() => import("./FeaturesSection"));
const CoverageSection = lazy(() => import("./CoverageSection"));
const BusinessApplications = lazy(() => import("./BusinessApllications"));
const BenefitsForCarRentals = lazy(() => import("./BenefitsForCarRentals"));
const TechnicalImplementation = lazy(() => import("./TechnicalImplementation"));
const CortexContactSection = lazy(() => import("./CortexContactSection"));

function App() {
  return (
    <div className="w-full">
      <Suspense fallback={<div>Loading...</div>}>
        {/* Sections that don't need full width can use a container */}
        <div className="max-w-[1660px] mx-auto">
          <HeroSection />
          <DamageDetectionSection />
          <TryDemoSection />
          <LeadingPerformance />
          <FeaturesSection />
          <CoverageSection />
          <BusinessApplications />
          <BenefitsForCarRentals />
          <TechnicalImplementation />
        </div>

        {/* Contact section with blue background */}
        <CortexContactSection />
      </Suspense>
    </div>
  );
}

export default App;
