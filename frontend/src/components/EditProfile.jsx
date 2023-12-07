import React, { useState, useEffect } from 'react';
import { updateUser } from '../utils/fetch'; // Import the functions from fetch.js

function EditProfile({ user }) {
  // Assuming you pass the userId and token as props to this component
  const [fullName, setFullName] = useState(user.name);
  const [username, setUsername] = useState(user.userName);
  const [email, setEmail] = useState(user.userEmail);
  const [profilePict, setProfilePict] = useState(user.profilePict);

  // You would also need to define fileInputRef to reference the hidden file input
  const fileInputRef = React.useRef();

  // Triggers when the "Upload your avatar" button is clicked
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleProfilePictChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file.size / 1024 < 100) {
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        // Set base64 string to local state before uploading
        setProfilePict(reader.result);
        return;
      };
    } else {
      alert('File size must be less than 100kb');
    }
  };

  const handleSave = async () => {
    const response = await updateUser({
      name: fullName,
      userName: username,
      userEmail: email,
      profilePict,
    });

    if (!response.error) {
      alert('Profil berhasil diupdate');
    } else {
      alert(response.error);
    }
  };

  return (
    <div className="flex flex-col align-center justify-center items-center">
      <h2 className="text-indigo-950 text-4xl font-bold font-['Poppins'] mb-4">Your Profile</h2>
      <div className="avatar-section mb-4 items-center flex flex-col">
        <img
          src={profilePict || 'path_to_default_avatar_image'}
          alt="User Avatar"
          className="w-56 h-56 bg-zinc-300 rounded-full mb-2 border-2 border-blue-500"
        />
        <input type="file" ref={fileInputRef} className="hidden" onChange={handleProfilePictChange} />
        <div className="flex flex-col gap-2">
          <button onClick={triggerFileInput} className="w-96 h-14 bg-blue-500 rounded-lg font-medium">
            Upload your avatar
          </button>
          <button className="w-96 h-14 rounded-lg bg-white border-2 border-blue-500 text-blue-500 font-medium">Delete avatar</button>
        </div>
      </div>
      <div className="w-96 h-80 bg-gradient-to-br from-blue-500 to-cyan-300 rounded-3xl shadow flex flex-col items-center p-4">
        <div className="info-field w-full">
          <label htmlFor="full-name" className="text-sky-50 text-xl font-medium font-['Poppins'] leading-snug">
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="h-10 bg-white rounded shadow"
          />
        </div>
        <div className="info-field w-full">
          <label htmlFor="username" className="text-sky-50 text-xl font-medium font-['Poppins'] leading-snug">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="h-10 bg-white rounded shadow"
          />
        </div>
        <div className="info-field w-full">
          <label htmlFor="email" className="text-sky-50 text-xl font-medium font-['Poppins'] leading-snug">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="h-10 bg-white rounded shadow"
          />
        </div>
        <button onClick={handleSave} className="w-full h-10 bg-blue-500 rounded-lg">
          Save
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
