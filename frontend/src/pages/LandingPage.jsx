import React from "react";
import logo from "../assets/Team UP Logo.svg";
import features1 from "../assets/features1.png";
import features2 from "../assets/features2.png";
import features3 from "../assets/features3.png";
import { Link } from "react-router-dom";

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
    <div className="bg-gradient-to-b from-cyan-300 to-blue-500 min-h-screen flex flex-col items-center justify-center p-20 relative">
      <div className="absolute inset-0 z-0" style={{ top: "-300px" }}>
        <svg className="w-full" height="1037" viewBox="0 0 1920 1037" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H1920V936.66C1920 936.66 1575.56 710.895 960 936.66C344.438 1162.43 0 936.66 0 936.66V0Z" fill="#FAFAFA" />
        </svg>
      </div>
      {/* Header Section */}
      <div className="mt-20 z-10">
        <div className="max-w-6xl flex items-center justify-between">
          <p className="text-indigo-950 text-4xl font-bold font-Poppins leading-tight">
            Create the BEST TEAM <br /> For Your Project
            <p className="text-indigo-950 text-base font-normal font-Poppins leading-6 text-left mt-2 max-w-[500px]">
              The TeamUP platform will facilitate you in getting your dream team. Join the team you are interested in or create your own team and find members who suit your team's needs
            </p>
          </p>
          <img className="w-48 h-48" src={logo} alt="Team UP Logo" />
        </div>
        <div className="mt-5 mb-20">
          <a href="#platform-features" onClick={scrollToPlatformFeatures}>
            {" "}
            <button className="rounded-xl w-44 h-10 p-0 mb-5 text-white text-normal text-sm bg-indigo-950 -10 transition ease-in-out duration-150 hover:scale-105 active:scale-100">Know More</button>
          </a>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center p-20 z-10">
        {/* Platform Features Section */}
        <p id="platform-features" className="text-neutral-50 text-4xl font-semibold font-Poppins leading-tight mb-10">
          Platform Features
        </p>

        {/* Feature 1 */}
        <div className="max-w-6xl flex items-center justify-between mb-10">
          <div className="flex flex-col text-center mr-20">
            <p className="text-neutral-50 text-3xl font-semibold font-Poppins leading-8 mb-5">Create and Manage Teams</p>
            <p className="text-neutral-50 text-base font-regular font-Poppins leading-8 max-w-[400px]">
              Create a Team According to Your Preferences and Based on Positions Needed. Reject or Accept Join Requests From Applicants and Become a Manager
            </p>
          </div>
          <img className="w-96 h-64" src={features1} alt="Create and Manage Teams" />
        </div>

        {/* Feature 2 */}
        <div className="max-w-6xl flex items-center justify-between mb-10">
          <img className="w-80 h-70" src={features2} alt="Explore Another Teams" />
          <div className="flex flex-col text-center ml-20">
            <p className="text-neutral-50 text-3xl font-semibold font-Poppins leading-8 mb-5">Explore Another Teams</p>
            <p className="text-neutral-50 text-base font-regular font-Poppins leading-8 max-w-[400px]">
              Look for and join other teams according to the project you want to participate in, and work according to the specified time contract
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="max-w-6xl flex items-center justify-between mb-10">
          <div className="flex flex-col text-center mr-20">
            <p className="text-neutral-50 text-3xl font-semibold font-Poppins leading-8 mb-5">Customize Your Profile</p>
            <p className="text-neutral-50 text-base font-regular font-Poppins leading-8 max-w-[400px]">
              Show Your Personal Branding Through Your Profile to Increase the Probability of Being Accepted in the Team
            </p>
          </div>
          <img className="w-96= h-64" src={features3} alt="Customize Your Profile" />
        </div>

        <div className="max-w-6xl flex flex-col items-center mb-10">
          <Link to="/register">
            <button className="bg-white text-indigo-950 text-2x1 font-bold py-3 px-10 rounded-[15px] mb-10 transition ease-in-out duration-150 hover:scale-105 active:scale-100">Sign Up Now!</button>
          </Link>
          <p className="text-neutral-50 text-4xl font-bold font-Poppins leading-tight mb-4">Let’s Team UP!</p>
        </div>

        <div className="flex flex-col items-center mb-10">
          <img className="w-48 h-48 mb-2" src={logo} alt="Team UP" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
