import React from 'react';
import { Link } from 'react-router-dom';
import TeamCard from './TeamCard';

function TeamList({ teams }) {
    return (
        <div className="my-team__list">
            {teams.map((team) => (
                <TeamCard key={team._id} team={team} />
            ))}
        </div>
    );
}

export default TeamList;
