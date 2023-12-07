import React from "react";
import logo from "../assets/Team UP Logo.svg";
import features1 from "../assets/features1.png";
import features2 from "../assets/features2.png";
import features3 from "../assets/features3.png";

const scrollToPlatformFeatures = () => {
  const platformFeaturesElement = document.getElementById("platform-features");

  if (platformFeaturesElement) {
    const navbarHeight = 80; // Sesuaikan dengan tinggi navbar Anda
    const offsetTop = platformFeaturesElement.offsetTop - navbarHeight;

    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  }
};

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-cyan-300 to-blue-500 min-h-screen flex flex-col items-center justify-center p-20">
      {/* Header Section */}
      <div className="mt-20">
        <div className="max-w-6xl flex items-center justify-between">
          <div className="text-indigo-950 text-4xl font-bold font-Poppins leading-tight">
            Create the BEST TEAM <br /> For Your Project
            <div className="text-indigo-950 text-base font-normal font-Poppins leading-6 text-left mt-2 max-w-[450px]">
              The TeamUP platform will facilitate you in getting your dream team. Join the team you are interested in or create your own team and find members who suit your team's needs
            </div>
          </div>
          <img className="w-48 h-48" src={logo} alt="Team UP Logo" />
        </div>
        <div className="mt-5 mb-20">
          <a href="#platform-features" onClick={scrollToPlatformFeatures}>
            {" "}
            <button className="rounded-xl w-44 h-10 p-0 mb-5 text-white text-normal text-sm bg-indigo-950 -10 transition ease-in-out duration-150 hover:scale-105 active:scale-100">Know More</button>
          </a>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center p-20">
        {/* Platform Features Section */}
        <div id="platform-features" className="text-neutral-50 text-4xl font-semibold font-Poppins leading-tight mb-10">
          Platform Features
        </div>

        {/* Feature 1 */}
        <div className="max-w-6xl flex items-center justify-between mb-10">
          <div className="flex flex-col text-center mr-20">
            <div className="text-neutral-50 text-3xl font-semibold font-Poppins leading-8 mb-5">Create and Manage Teams</div>
            <div className="text-neutral-50 text-base font-regular font-Poppins leading-8 max-w-[400px]">
              Create a Team According to Your Preferences and Based on Positions Needed. Reject or Accept Join Requests From Applicants and Become a Manager
            </div>
          </div>
          <img className="w-96 h-64" src={features1} alt="Create and Manage Teams" />
        </div>

        {/* Feature 2 */}
        <div className="max-w-6xl flex items-center justify-between mb-10">
          <img className="w-80 h-70" src={features2} alt="Explore Another Teams" />
          <div className="flex flex-col text-center ml-20">
            <div className="text-neutral-50 text-3xl font-semibold font-Poppins leading-8 mb-5">Explore Another Teams</div>
            <div className="text-neutral-50 text-base font-regular font-Poppins leading-8 max-w-[400px]">
              Look for and join other teams according to the project you want to participate in, and work according to the specified time contract
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="max-w-6xl flex items-center justify-between mb-10">
          <div className="flex flex-col text-center mr-20">
            <div className="text-neutral-50 text-3xl font-semibold font-Poppins leading-8 mb-5">Customize Your Profile</div>
            <div className="text-neutral-50 text-base font-regular font-Poppins leading-8 max-w-[400px]">
              Show Your Personal Branding Through Your Profile to Increase the Probability of Being Accepted in the Team
            </div>
          </div>
          <img className="w-96= h-64" src={features3} alt="Customize Your Profile" />
        </div>

        {/* Sign Up Section */}
        <div className="max-w-6xl flex flex-col items-center mb-10">
          <button className="bg-white text-indigo-950 text-xl2 font-bold py-3 px-10 rounded-[15px] mb-10 transition ease-in-out duration-150 hover:scale-105 active:scale-100">Sign Up Now!</button>
          <div className="text-neutral-50 text-4xl font-bold font-Poppins leading-tight mb-4">Let’s Team UP!</div>
        </div>

        <div className="flex flex-col items-center mb-10">
          <img className="w-48 h-48 mb-2" src={logo} alt="Team UP" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
