import React from 'react';
import { Link } from 'react-router-dom';
import TeamCard from './TeamCard';

function TeamList({ teams }) {
  return (
    <div className="my-team__list grid min-[1330px]:grid-cols-3 min-[900px]:grid-cols-2 max-w-[400px]:grid-cols-1 gap-10 mb-8">
      {teams.map((team) => (
        <TeamCard key={team._id} team={team} />
      ))}
    </div>
  );
}

export default TeamList;
