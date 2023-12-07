import React from 'react';
import features1 from '../assets/features1.png';
import features2 from '../assets/features2.png';
import features3 from '../assets/features3.png';
import logo from '../assets/Team UP Logo.svg';

function LandingPage() {

  return (
    <div className="w-full p-[60px] bg-gradient-to-b from-cyan-300 flex-col flex items-center to-blue-500 gap-10">
        <div className="w-[1306px] h-[472px] justify-between flex-row flex items-center relative">
            <div className="flex flex-col text-left align-center items-center gap-5">
                <div className="text-indigo-950 text-[74.89px] font-bold font-['Poppins'] leading-[106.58px]">Create the Best TEAM
                <br/>For Your Project</div>
                <div className="w-[806px] text-justify text-indigo-950 text-3xl font-normal font-['Poppins'] leading-[43.79px]">The TeamUP platform will facilitate you in getting your dream team. Join the team you are interested in or create your own team and find members who suit your team's needs</div>
            </div>
                <img className="w-[353px] h-[458px]" src={logo} />
        </div>
        <div className="text-neutral-50 text-[74.89px] font-bold font-['Poppins'] leading-[106.58px]">Platform Features</div>
        <div className="w-[1604px] h-[451px] justify-between flex-row flex items-center w-[1800px] relative">
            <div className="flex flex-col text-center align-center gap-5">
                <div className="text-neutral-50 text-[68.96px] font-semibold font-['Poppins'] leading-[98.14px]">Create and Manage Teams</div>
                <div className="w-full text-center text-neutral-50 text-3xl font-medium font-['Poppins'] leading-[42.96px]">Create a Team According to Your Preferences and Based on Positions Needed. Reject or Accept Join Requests From Applicants and Become a Manager</div>
            </div>
            <img className="w-[660px] h-[451px]" src={features1} />
        </div>
        <div className="w-[1439px] h-[534px] justify-between flex-row items-center flex relative">
            <img className="w-[546px] h-[534px]" src={features2} />
            <div className="flex flex-col text-center align-center gap-5">
                <div className="text-neutral-50 text-[68.96px] font-semibold font-['Poppins'] leading-[98.14px]">Explore Another Teams</div>
                <div className="w-[788px] text-center text-neutral-50 text-3xl font-medium font-['Poppins'] leading-[42.96px]">Look for and join other teams according to the project you want to participate in, and work according to the specified time contract</div>
            </div>
        </div>
        <div className="w-[1449px] h-[637px] justify-between flex-row flex items-center relative">
            <div className="flex flex-col text-center align-center gap-5">
                <div className="text-neutral-50 text-[68.96px] font-semibold font-['Poppins'] leading-[98.14px]">Customize Your Profile</div>
                <div className="w-[812px] text-center text-neutral-50 text-3xl font-medium font-['Poppins'] leading-[42.96px]">Show Your Personal Branding Through Your Profile to Increase the Probability of Being Accepted in the Team</div>
            </div>
            <img className="w-[568.75px] h-[564.20px]" src={features3} />
        </div>
        <div className="w-[556px] h-[339.41px] relative flex flex-col text-center align-center items-center">
            <div className="flex flex-col text-center align-center">
                <div className="text-center text-neutral-50 text-[76.63px] font-bold font-['Poppins'] leading-[109.05px]">Let’s Team UP!</div>
            </div>
            <img className="w-[150.14px] h-[194.80px]" src={logo} />
        </div>
    </div>)
}

export default LandingPage;
