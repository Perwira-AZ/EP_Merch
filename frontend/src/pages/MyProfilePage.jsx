import React, { useState, useEffect } from 'react';
import { getMyTeam } from '../utils/fetch';
import { formatDate } from '../utils/date';
import EditProfile from '../components/EditProfile';
import TeamList from '../components/TeamList';
import Loading from '../components/Loading';

function MyProfilePage({ user }) {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  
    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("animate-on-scroll-left")) {
            entry.target.classList.add("slide-in-left");
          } else if (entry.target.classList.contains("animate-on-scroll-right")) {
            entry.target.classList.add("slide-in-right");
          } else if (entry.target.classList.contains("animate-on-scroll")) {
            entry.target.classList.add("fade-in");
          } else if (entry.target.classList.contains("animate-on-scroll-pop")) {
            entry.target.classList.add("pop");
          }
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(handleIntersect, options);
    const elements = document.querySelectorAll(".animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll, .animate-on-scroll-pop");
  
    elements.forEach((element) => observer.observe(element));
  
    return () => observer.disconnect();
  }, []);

  const [myTeams, setMyTeams] = useState('waiting');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMyTeam();

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
    <div className="profilePage bg-zinc-50 pt-[60px] pb-8 min-h-screen box-border flex flex-row gap-4 align-center justify-center">
      <div className="profile  p-5 animate-on-scroll">
        <div className="max-w-[300px] mx-auto">
          <EditProfile user={user} />
        </div>
      </div>
      <div className="teams-section w-[1330px] p-5 animate-on-scroll">
        <h2 className="text-indigo-950 text-4xl font-bold font-['Poppins'] leading-1">Your Teams</h2>

        {isLoading ? <Loading /> : <div className="mb-4">{myTeams.length > 0 ? <TeamList teams={myTeams} /> : <p>No Created Teams</p>}</div>}
      </div>
    </div>
  );
}

export default MyProfilePage;
