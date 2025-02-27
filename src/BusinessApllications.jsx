import logo from "./assets/symbols and logos/logo.png";
import phone1 from "./assets/Picture13.png";
import phone2 from "./assets/Picture14.png";

export default function BusinessApplications() {
  return (
    <section className="flex flex-col lg:flex-row items-center mb-[100px] justify-between px-8 lg:px-28 py-16">
      {/* Left Content */}
      <div className="max-w-lg text-left">
        <h2 className="text-7xl font-bold leading-tight">
          Business <br /> Applications.
        </h2>
        <p className="text-2xl font-semibold text-[#3a3aea] mt-4">
          Everything In The Palm of Your Hand.
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-[#3a3aea]">
            Mobile Application Feature
          </h3>
          <ul className="list-disc list-inside text-gray-700 mt-2 text-xl space-y-1">
            <li>Guided photo capture for consistent image quality.</li>
            <li>Optional voice-annotated inspections for ease of use.</li>
            <li>Instant report generation and direct claim submissions.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-[#3a3aea]">
            Exterior Damage Detection
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-xl mt-2 space-y-1">
            <li>Monitor inspections in real-time.</li>
            <li>Track and analyze fleet-wide damage.</li>
            <li>Manage customer histories and perform cost trend analysis.</li>
          </ul>
        </div>

        <button className="mt-8 px-6 w-[200px] py-3 bg-[#642ec7] text-white font-semibold rounded-2xl hover:bg-blue-800">
          Contact Us
        </button>
      </div>

      {/* Right Content - Images */}
      <div className="relative flex mt-12 mr-[100px] lg:mt-0">
        <div className="">
          <img
            src={logo}
            alt="logo"
            className="absolute ml-[120px] mt-[65px] w-[170px]"
          />
          <img src={phone1} alt="Automated Reporting" className="w-[400px]" />
          <p className="text-center text-blue-700 font-semibold mt-[-80px]">
            Automated Reporting
          </p>
        </div>
        <div className="ml-[-80px]">
          <img src={phone2} alt="Damage Analysis" className="w-[400px]" />
          <p className="text-center text-blue-700 font-semibold mt-[-80px]">
            Damage Analysis
          </p>
        </div>
      </div>
    </section>
  );
}
