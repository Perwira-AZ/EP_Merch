import React, { useState, useEffect } from 'react';
import { updateUser, uploadProfilePict, deleteProfilePict } from '../utils/fetch'; // Import the functions from fetch.js

function EditProfile({ userId }) { // Assuming you pass the userId and token as props to this component
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [profilePict, setProfilePict] = useState(null);

    // You would also need to define fileInputRef to reference the hidden file input
    const fileInputRef = React.useRef();

    // Triggers when the "Upload your avatar" button is clicked
    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const handleProfilePictChange = async (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        if (file.size / 1024 < 500) {
          reader.readAsDataURL(file);
          reader.onloadend = async () => {
            // Set base64 string to local state before uploading
            setProfilePict(reader.result);
          return;
        }} else {
            alert('File size must be less than 500kb');
          }
      };

    const handleProfilePictDelete = async () => {
      await deleteProfilePict(userId);
      setProfilePict(null); // Update the state to reflect the profile picture was deleted
      // Handle any errors or update the UI accordingly
    };

    const handleSave = async () => {
        await updateUser(userId, {
            name: fullName,
            userName: username,
            userEmail: email,
            profilePict
          });

      // Handle the result, update the state or show a message to the user
    };

  return (
    <div className="p-4">
      <div className="flex flex-col items-left">
        <h2 className="text-indigo-950 text-4xl font-bold font-['Poppins'] leading-7">Your Profile</h2>
        <div className="avatar-section mb-4">
          <img src={profilePict || "path_to_default_avatar_image"} alt="User Avatar" className="w-56 h-56 bg-zinc-300 rounded-full" />
          <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleProfilePictChange}
          />
          <div className="flex flex-col relative">
            <button onClick={triggerFileInput} className="w-96 h-14 bg-blue-500 rounded-lg">Upload your avatar</button>
            <button onClick={handleProfilePictDelete} className="w-96 h-14 rounded-lg bg-transparent border-2 border-blue-500 text-blue-500 ">Delete avatar</button>
          </div>
        </div>
        <div className="w-96 h-80 bg-gradient-to-br from-blue-500 to-cyan-300 rounded-3xl shadow">
          <div className="info-field mb-4">
            <label htmlFor="full-name" className="text-sky-50 text-xl font-medium font-['Poppins'] leading-snug">Full Name</label>
            <input
              type="text"
              id="full-name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="w-64 h-10 bg-white rounded shadow"
            />
          </div>
          <div className="info-field mb-4">
            <label htmlFor="username" className="text-sky-50 text-xl font-medium font-['Poppins'] leading-snug">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-64 h-10 bg-white rounded shadow"
            />
          </div>
          <div className="info-field mb-4">
            <label htmlFor="email" className="text-sky-50 text-xl font-medium font-['Poppins'] leading-snug">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-64 h-10 bg-white rounded shadow"
            />
          </div>
          <button onClick={handleSave} className="w-64 h-14 bg-blue-500 rounded-lg">Save</button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;