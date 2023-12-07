import React from 'react';
import PositionCardDetail from '../components/PositionCardDetail';

function TeamDetailPage() {
  return (
    <div className="relative bg-white flex flex-row-reverse justify-center w-full px-[30px] gap-5 max-[760px]:flex-col z-0">
      <svg width="1920" height="256" viewBox="0 0 1920 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute z-[-1]">
        <path
          d="M0 0V205.024C0 205.024 344.437 319.72 960 205.024C1575.56 90.3293 1920 205.024 1920 205.024V7.53698e-05L0 0Z"
          fill="url(#paint0_linear_283_1413)"
        />
        <defs>
          <linearGradient id="paint0_linear_283_1413" x1="960" y1="0" x2="960" y2="449.688" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5AC7FA" />
            <stop offset="0.602559" stop-color="#2483F0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Team Information */}
      <div className="flex flex-col items-center mt-8">
        {/* Profile Picture */}
        <div className="bg-white rounded-full w-32 h-32 mt-[120px] flex items-center justify-center">
          <img src="https://picsum.photos/200/200" alt="Profile" className="rounded-full w-full h-full object-cover border-2 border-white" />
        </div>

        {/* Team Name */}
        <h1 className="text-3xl font-bold my-4">Team Name</h1>

        {/* Competition Name */}
        <h2 className="text-xl font-semibold mb-4">Competition Name</h2>

        {/* Team Details */}
        <p className="text-gray-600 mb-6 max-w-[1000px] text-center">
          {/* Isi dengan detail team (Lorem Ipsum) */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec justo vel ex blandit fringilla. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas nec justo vel ex blandit fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec justo vel ex
          blandit fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec justo vel ex blandit fringilla.
        </p>

        {/* Rounded Boxes */}
        <div className="flex justify-between mb-8">
          <div className="rounded-xl p-4 shadow-md w-[220px] bg-blue-500 mr-4">
            <h3 className="text-sm font-semibold text-white text-center">Location</h3>
            <p className="text-xs text-white text-center">Your Location</p>
          </div>
          <div className="rounded-xl p-4 shadow-md w-[220px] bg-blue-500 mr-4">
            <h3 className="text-sm font-semibold text-white text-center">Start Date</h3>
            <p className="text-xs text-white text-center">YYYY-MM-DD</p>
          </div>
          <div className="rounded-xl p-4 shadow-md w-[220px] bg-blue-500 mr-4">
            <h3 className="text-sm font-semibold text-white text-center">End Date</h3>
            <p className="text-xs text-white text-center">YYYY-MM-DD</p>
          </div>
          <div className="rounded-xl p-4 shadow-md w-[220px] bg-blue-500 mr-4">
            <h3 className="text-sm font-semibold text-white text-center">Leader Name</h3>
            <p className="text-xs text-white text-center">John Doe</p>
          </div>
        </div>
        {/* Member Section */}
        <h2 className="text-2xl font-bold mb-4">Members</h2>
        {/* <MemberList /> */}
        <div className="flex flex-col">
          <PositionCardDetail
            positionName="Developer"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            onJoinClick={() => console.log('Join Developer')}
          />
          <PositionCardDetail
            positionName="Designer"
            detail="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            onJoinClick={() => console.log('Join Designer')}
          />
          {/* Add more cards as needed */}
        </div>
        <button className="rounded-xl w-44 h-10 p-0 mb-5 text-white text-normal text-lg bg-gradient-to-l from-red-500 to-red-600 transition ease-in-out duration-150 hover:scale-105 active:scale-100">
          <p className="text-sm">Delete Team</p>
        </button>
      </div>
    </div>
  );
}

export default TeamDetailPage;
