import React, { useState, useEffect } from 'react';
import { getUserLoggedIn, getMyTeam } from '../utils/fetch';
import { Link } from 'react-router-dom';
import EditProfile from '../components/EditProfile'; // Import the EditProfile component
import TeamList from '../components/TeamList';
import TeamCard from '../components/TeamCard';

function ProfilePage(user) {
  const [myTeam, setMyTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMyTeam(user._id)
      .then((response) => {
        setMyTeam(response.data);
      })
      .catch((error) => {
        console.error('Error fetching team data:', error);
      });
  }, []);

  return (
    <div className="profilePage bg-zinc-50 pt-[60px] pb-8 min-h-screen box-border">
      <div className="profile">
        <div className="mx-auto min-[1330px]:max-w-7xl min-[900px]:max-w-[840px] max-w-[400px]">
        <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold text-blue-500 mb-4">Your Profile</h2>
        <div className="avatar-section mb-4">
          <img src="path_to_avatar_image" alt="User Avatar" className="rounded-full h-24 w-24 mb-4" />
          <div className="flex flex-col">
            {/* <button onClick={handleProfilePictChange} className="bg-blue-500 text-white rounded py-2 px-4 mb-2">Upload your avatar</button>
            <button onClick={handleProfilePictDelete} className="bg-white text-blue-500 border border-blue-500 rounded py-2 px-4">Delete avatar</button> */}
          </div>
          <div className="user-info w-full bg-white p-4 rounded-lg shadow-md">
          <div className="info-field mb-4">
            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="full-name"
              // value={fullName}
              // onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="info-field mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="info-field mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* <button onClick={handleSave} className="w-full bg-blue-500 text-white rounded py-2 px-4">Save</button> */}
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>);
}

export default ProfilePage;