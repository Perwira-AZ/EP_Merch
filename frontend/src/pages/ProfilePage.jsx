import React, { useState, useEffect } from 'react';
import { getUserLoggedIn, getMyTeam } from '../utils/fetch';
import { Link } from 'react-router-dom';
import EditProfile from '../components/EditProfile'; // Import the EditProfile component
import TeamList from '../components/TeamList';
import TeamCard from '../components/TeamCard';

function ProfilePage({ user }) {
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
    <div className="profilePage bg-zinc-50 pt-[60px] pe-8 min-h-screen box-border">
      <div className="profile pe-16">
        <div className="mx-auto min-[330px]:max-w-7xl min-[900px]:max-w-[840px] max-w-[360px]">
          <EditProfile user={user} />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
