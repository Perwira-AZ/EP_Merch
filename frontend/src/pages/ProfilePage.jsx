import React, { useState, useEffect } from 'react';
import { getUserLoggedIn, getMyTeam } from '../utils/fetch';
import { formatDate } from '../utils/date';
import EditProfile from '../components/EditProfile';
import TeamList from '../components/TeamList';
import Loading from '../components/Loading';

function ProfilePage({ user }) {
  const [myTeams, setMyTeams] = useState({
    myTeamCreated: [],
    myTeamJoined: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMyTeam()
      .then(({ data }) => {
        // Sort and format the dates for created and joined teams
        const sortedCreatedTeams = [...data.myTeamCreated].sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
        const sortedJoinedTeams = [...data.myTeamJoined].sort((a, b) => new Date(b.joinedDate) - new Date(a.joinedDate));

        setMyTeams({
          myTeamCreated: sortedCreatedTeams.map(team => ({ ...team, createdDate: formatDate(team.createdDate) })),
          myTeamJoined: sortedJoinedTeams.map(team => ({ ...team, joinedDate: formatDate(team.joinedDate) })),
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching team data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="profilePage bg-zinc-50 pt-[60px] pb-8 min-h-screen box-border flex">
    <div className="profile w-1/3 p-5">
      <div className="max-w-[360px] mx-auto">
        <EditProfile user={user} />
      </div>
    </div>
    <div className="teams-section w-2/3 p-5">
      <h2 className="text-indigo-950 text-4xl font-bold font-['Poppins'] leading-1">Your Teams</h2>

      {isLoading ? <Loading /> : (
        <>
          <div className="mb-4">
            {myTeams.myTeamCreated.length > 0 ? <TeamList teams={myTeams.myTeamCreated} /> : <p>No Created Teams</p>}
          </div>

          <div className="mb-4">
            {myTeams.myTeamJoined.length > 0 ? <TeamList teams={myTeams.myTeamJoined} /> : <p>No Joined Teams</p>}
          </div>
        </>
      )}
    </div>
  </div>
  );
}

export default ProfilePage;
