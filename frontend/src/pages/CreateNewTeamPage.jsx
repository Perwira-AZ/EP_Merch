import React from "react";
import { Link } from "react-router-dom";

function CreateNewTeamPage() {
  return (
    <div className="createNewTeam bg-zinc-50 pt-[60px] pb-8 min-h-screen box-border">
      <div className="create-new-team-form">
        <div className="mx-auto min-[1330px]:max-w-7xl min-[900px]:max-w-[840px] max-w-[400px]">
          <div className="create-new-team mx-auto max-w-[600px]">
            <div className="pt-16 mb-7 flex flex-row items-center justify-center">
              <h2 className="text-indigo-950 text-[35px] font-bold leading-[34px]">Create New Team</h2>
            </div>

            {/* Team Name */}
            <div className="mb-4">
              <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">
                Team Name
              </label>
              <input type="text" id="teamName" name="teamName" className="mt-1 p-2 w-full border rounded-md" />
            </div>

            {/* Competition Name */}
            <div className="mb-4">
              <label htmlFor="competitionName" className="block text-sm font-medium text-gray-700">
                Competition Name
              </label>
              <input type="text" id="competitionName" name="competitionName" className="mt-1 p-2 w-full border rounded-md" />
            </div>

            {/* Team Description */}
            <div className="mb-4">
              <label htmlFor="teamDescription" className="block text-sm font-medium text-gray-700">
                Team Description
              </label>
              <textarea id="teamDescription" name="teamDescription" rows="3" className="mt-1 p-2 w-full border rounded-md"></textarea>
            </div>

            {/* Province and City */}
            <div className="mb-4 flex">
              <div className="flex-1 mr-2">
                <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                  Province
                </label>
                <input type="text" id="province" name="province" className="mt-1 p-2 w-full border rounded-md" />
              </div>
              <div className="flex-1 ml-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input type="text" id="city" name="city" className="mt-1 p-2 w-full border rounded-md" />
              </div>
            </div>

            {/* Start Date and End Date */}
            <div className="mb-4 flex">
              <div className="flex-1 mr-2">
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                  Start Date
                </label>
                <input type="date" id="startDate" name="startDate" className="mt-1 p-2 w-full border rounded-md" />
              </div>
              <div className="flex-1 ml-2">
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                  End Date
                </label>
                <input type="date" id="endDate" name="endDate" className="mt-1 p-2 w-full border rounded-md" />
              </div>
            </div>

            {/* Team Logo */}
            <div className="mb-4">
              <label htmlFor="teamLogo" className="block text-sm font-medium text-gray-700">
                Team Logo
              </label>
              <input type="file" id="teamLogo" name="teamLogo" accept="image/*" className="mt-1 p-2 w-full border rounded-md" />
            </div>
          </div>
          <div className="create-button mx-auto max-w-[600px]">
            <button className="w-full h-12 transition ease-in-out duration-100 bg-blue-500 hover:scale-[1.02] active:scale-[1.005] rounded-xl text-white text-lg">Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNewTeamPage;
