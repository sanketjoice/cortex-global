import mobile from "./assets/Picture1.png";

export default function FeaturesSection() {
  return (
    <section className="relative flex py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div>
          <div className="bg-[#cb6ce6] text-white px-5 text-center py-1 rounded-full w-[150px] h-[40px] text-xl font-semibold">
            AI-Powered
          </div>
          <br />
          <h2 className="text-6xl font-bold mt-0 relative inline-block">
            <span className="absolute left-0 top-1/2 -z-10 w-6 h-6 bg-green-500 -translate-x-2 -translate-y-1/2"></span>
            Features
          </h2>
          <h3 className="font-semibold text-xl mt-6">Technology Overview</h3>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>{" "}
              High-definition Image Capture
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>{" "}
              Fast Damage Recognition
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>{" "}
              Severity Assessment
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>{" "}
              Automated Report Generation
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>{" "}
              Historical Damage Comparison
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>{" "}
              Claim Processing Automation
            </li>
          </ul>
        </div>

        {/* Right Side Image */}
        <div>
          <img
            src={mobile}
            alt="Mobile Analysis"
            className="max-w-sm md:mx-0 drop-shadow-lg"
          />
        </div>
      </div>

      {/* Feature Descriptions */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols- gap-8">
        <div className="flex items-start">
          <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3 mt-1"></span>
          <div>
            <h4 className="font-semibold">Detailed Descriptions</h4>
            <p className="text-gray-600">
              Get detailed descriptions of the damage on areas of the vehicle.
              Highly accurate detection even in poor lighting.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <span className="w-3 h-3 bg-green-500 rounded-full mr-3 mt-1"></span>
          <div>
            <h4 className="font-semibold">Detected Damages</h4>
            <p className="text-gray-600">
              Estimations of costs of repair that is needed to fix the damaged
              vehicle area.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <span className="w-3 h-3 bg-red-500 rounded-full mr-3 mt-1"></span>
          <div>
            <h4 className="font-semibold">Total Estimates for Insurance</h4>
            <p className="text-gray-600">
              Total estimation of the costs, simple one-click sending reports
              for insurance claims.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
