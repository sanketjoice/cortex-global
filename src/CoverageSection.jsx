import exterior from "./assets/Picture10.png";
import interior from "./assets/Picture11.png";
import mechanical from "./assets/Picture12.png";

export default function CoverageSection() {
  return (
    <section className="flex items-center justify-between lg:px-28 mb-[100px] py-20">
      {/* Left Content */}
      <div className="max-w-lg">
        <h2 className="text-7xl font-bold leading-tight">
          Ensuring Full <br /> Coverage
          <span className="text-yellow-500">.</span>
        </h2>
        <h3 className="text-2xl font-bold text-purple-700 mt-4">
          Advanced Damage Recognition
        </h3>
        <p className="text-gray-900 text-xl mt-4">
          Detect every scratch and dent with unparalleled precision. Our system
          thoroughly scans all vehicle surfaces to ensure comprehensive damage
          assessment.
        </p>
        {/* Call to Action Button */}
        <button className="bg-[#642ec7] w-[200px] h-[50px] text-white px-6 py-2 rounded-2xl text-xl font-medium mt-8">
          Try Our Demo
        </button>
      </div>

      {/* Right Content */}
      <div className="w-[45%] space-y-6">
        {damageTypes.map((item, index) => (
          <div key={index} className="flex items-center space-x-6">
            {/* Image with border */}
            <div
              className={`w-[200px] rounded-4xl overflow-hidden border-r-6 border-t-6 ${item.borderColor}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div>
              <h4 className="text-2xl font-semibold text-purple-700 mb-2">
                {item.title}
              </h4>
              <ul className="list-disc list-inside font-semibold text-gray-600 text-lg">
                {item.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a
                href="#"
                className="text-purple-600 font-bold text-lg mt-1 inline-block"
              >
                View full list
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const damageTypes = [
  {
    title: "Exterior Damage Detection",
    image: exterior,
    borderColor: "border-yellow-400",
    features: [
      "Door edge dings, dents",
      "Paint scratches, bumper scrapes",
      "Wheel rim and curb rash",
      "And more...",
    ],
  },
  {
    title: "Interior Damage Detection",
    image: interior,
    borderColor: "border-red-500",
    features: [
      "Stains on seats and carpets",
      "Torn upholstery, scratched dashboards",
      "Broken cupholders and consoles",
      "And more...",
    ],
  },
  {
    title: "Mechanical Damage Detection",
    image: mechanical,
    borderColor: "border-purple-600",
    features: [
      "Tire sidewall damage, broken wipers",
      "Cracked side windows, bent exhaust tips",
      "Dented fuel door, missing wheel covers",
      "And more...",
    ],
  },
];
