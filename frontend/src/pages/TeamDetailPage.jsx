import React from "react";

function TeamDetailPage() {
  return (
    <div className="relative bg-white flex flex-row-reverse justify-center pt-[100px] w-full px-[30px] gap-5 max-[760px]:flex-col">
      <svg viewBox="0 0 400 135" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute z-[-1]"></svg>

      {/* Team Information */}
      <div className="flex flex-col items-center mt-8">
        {/* Profile Picture */}
        <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center">
          <img src="https://picsum.photos/200/200" alt="Profile" className="rounded-full w-full h-full object-cover" />
        </div>

        {/* Team Name */}
        <h1 className="text-3xl font-bold my-4">Team Name</h1>

        {/* Competition Name */}
        <h2 className="text-xl font-semibold mb-4">Competition Name</h2>

        {/* Team Details */}
        <p className="text-gray-600 mb-6 max-w-[1000px] text-center">
          {/* Isi dengan detail team (Lorem Ipsum) */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec justo vel ex blandit fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec justo vel ex
          blandit fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec justo vel ex blandit fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          justo vel ex blandit fringilla.
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
      </div>
    </div>
  );
}

export default TeamDetailPage;
