import React, { useState } from 'react';
import { updateUser, uploadProfilePict, deleteProfilePict } from '../utils/fetch'; // Import the functions from fetch.js

function EditProfile({ userId, token }) { // Assuming you pass the userId and token as props to this component
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [profilePict, setProfilePict] = useState(null);

    const handleProfilePictChange = async (event) => {
      const file = event.target.files[0];
      if (file) {
        const result = await uploadProfilePict(userId, file, token);
        if (result.profilePict) {
          setProfilePict(result.profilePict); // Update the state if the profile picture was successfully uploaded
        }
        // Handle any errors or update the UI accordingly
      }
    };

    const handleProfilePictDelete = async () => {
      await deleteProfilePict(userId, token);
      setProfilePict(null); // Update the state to reflect the profile picture was deleted
      // Handle any errors or update the UI accordingly
    };

    const handleSave = async () => {
      const result = await updateUser(userId, { name: fullName, userName: username, userEmail: email, profilePict }, token);
      // Handle the result, update the state or show a message to the user
    };

  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold text-blue-500 mb-4">Your Profile</h2>
        <div className="avatar-section mb-4">
          <img src="path_to_avatar_image" alt="User Avatar" className="rounded-full h-24 w-24 mb-4" />
          <div className="flex flex-col">
            <button onClick={handleProfilePictChange} className="bg-blue-500 text-white rounded py-2 px-4 mb-2">Upload your avatar</button>
            <button onClick={handleProfilePictDelete} className="bg-white text-blue-500 border border-blue-500 rounded py-2 px-4">Delete avatar</button>
          </div>
        </div>
        <div className="user-info w-full bg-white p-4 rounded-lg shadow-md">
          <div className="info-field mb-4">
            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="full-name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="info-field mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="info-field mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button onClick={handleSave} className="w-full bg-blue-500 text-white rounded py-2 px-4">Save</button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;