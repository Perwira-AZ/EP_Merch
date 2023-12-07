import React, { useState, useEffect } from 'react';
import defaultPict from '../assets/profile.png';

function DetailProfile({ user }) {
  // Assuming you pass the userId and token as props to this component
  // const [username, setUsername] = useState(user.userName);
  // const [email, setEmail] = useState(user.userEmail);
  // const [profilePict, setProfilePict] = useState(user.profilePict);

  return (
    <div className="p-4">
      <div className="flex flex-col align-center justify-center items-center">
        <h2 className="text-indigo-950 text-4xl font-bold font-['Poppins'] mb-4">{user.userName} Profile</h2>
        <div className="avatar-section mb-4 items-center flex flex-col">
          <img src={user.profilePict || defaultPict} alt="User Avatar" className="w-56 h-56 bg-zinc-300 rounded-full mb-2 border-2 border-blue-500" />
        </div>
        <div className="w-96 bg-gradient-to-br from-blue-500 to-cyan-300 rounded-3xl shadow flex flex-col items-center p-4 gap-4">
          <div className="info-field w-full flex flex-row gap-4">
            <label htmlFor="full-name" className="text-sky-50 text-2xl font-medium font-['Poppins'] leading-snug">
              Full Name:
            </label>
            <p id="full-name" className="text-2xl font-bold text-white">
              {user.name}
            </p>
          </div>
          <div className="info-field w-full flex flex-row gap-4">
            <label htmlFor="username" className="text-sky-50 text-2xl font-medium font-['Poppins'] leading-snug">
              Username:
            </label>
            <p id="username" className="text-2xl font-bold text-white">
              {user.userName}
            </p>
          </div>
          <div className="info-field w-full flex flex-row gap-4">
            <label htmlFor="email" className="text-sky-50 text-2xl font-medium font-['Poppins'] leading-snug">
              Email:
            </label>
            <p id="email" className="text-2xl font-bold text-white">
              {user.userEmail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProfile;
