import React, { useState, useEffect } from 'react';
import { getProfile, getPeopleTeam } from '../utils/fetch';
import { useParams } from 'react-router-dom';
import { formatDate } from '../utils/date';
import DetailProfile from '../components/DetailProfile';
import TeamList from '../components/TeamList';
import Loading from '../components/Loading';

function ProfilePage() {
  const { id } = useParams();
  const [user, setUser] = useState('waiting');
  const [myTeams, setMyTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    getProfile(id)
      .then((response) => {
        setUser(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getPeopleTeam(id);

        // Sort and format the dates for created and joined teams
        const sortedCreatedTeams = [...data.myTeamCreated].sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
        const sortedJoinedTeams = [...data.myTeamJoined].sort((a, b) => new Date(b.joinedDate) - new Date(a.joinedDate));

        const updatedTeams = [
          ...sortedCreatedTeams.map((team) => ({ ...team, createdDate: formatDate(team.createdDate) })),
          ...sortedJoinedTeams.map((team) => ({ ...team, joinedDate: formatDate(team.joinedDate) })),
        ];

        await setMyTeams(updatedTeams);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching team data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="profilePage bg-zinc-50 pt-[60px] pe-8 min-h-screen box-border flex flex-row gap-4 align-center justify-center">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="profile pe-16">
            <div className="mx-auto min-[330px]:max-w-7xl min-[900px]:max-w-[840px] max-w-[360px]">
              <DetailProfile user={user} />
            </div>
          </div>
          <div className="teams-section w-[1330px] p-5">
            <h2 className="text-indigo-950 text-4xl font-bold font-['Poppins'] leading-1">{user.userName} Teams</h2>

            {isLoading || user === 'waiting' ? (
              <Loading />
            ) : (
              <div className="mb-4">{myTeams.length > 0 ? <TeamList teams={myTeams} /> : <p>No Created Teams</p>}</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
