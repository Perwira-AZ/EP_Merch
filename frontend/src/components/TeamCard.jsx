import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/date';
import teamImage from '../assets/Team.png';

function TeamCard({ team }) {
  const startDate = formatDate(team.teamStart);
  const endDate = formatDate(team.teamEnd);
  return (
    <div className="flex flex-col rounded-3xl bg-white shadow-lg max-w-md items-center z-0">
      <svg width="400" height="135" viewBox="0 0 400 135" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute z-[-1]">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.4899 2.23469e-06C10.0681 0.00547898 0 10.077 0 22.5V108.118C0 108.118 31.881 134.99 91.12 135C91.141 135 91.1621 135 91.1831 135C120.807 134.995 157.268 128.272 200 108.118C328.242 47.6346 400 108.118 400 108.118V22.5C400 10.0874 389.949 0.0224532 377.542 3.75142e-05C377.528 1.25083e-05 377.514 0 377.5 0H22.5C22.4966 0 22.4932 7.44949e-07 22.4899 2.23469e-06Z"
          fill="url(#paint0_linear_294_138)"
        />
        <defs>
          <linearGradient id="paint0_linear_294_138" x1="200" y1="0" x2="200" y2="237.14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5AC7FA" />
            <stop offset="0.602559" stopColor="#2483F0" />
          </linearGradient>
        </defs>
      </svg>

      <img src={team.teamLogo ? team.teamLogo : teamImage} alt="" className="h-36 rounded-full  mt-7 mb-5" Style="clip-path: circle(72px)" />
      <p className="text-4xl font-semibold text-indigo-950">{team.teamName}</p>
      <p className="text-xl leading-8 text-indigo-950">{team.teamCompetition}</p>
      <p className="text-lg leading-8 text-indigo-950">
        {team.teamLocation.province}, {team.teamLocation.city}
      </p>
      <p className="text-lg leading-8 text-indigo-950">
        {startDate} - {endDate}
      </p>
      <Link to={`/team/${team._id}`} className="w-10/12 mt-4 mb-6">
        <button className="w-full h-12 transition ease-in-out duration-150 hover:scale-105 bg-blue-500 rounded-xl text-white hover:bg-blue-600 active:scale-100">
          View
        </button>
      </Link>
    </div>
  );
}

export default TeamCard;
