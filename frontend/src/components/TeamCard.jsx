import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/date';
import teamImage from '../assets/Team.png';

function TeamCard({ team }) {
    const startDate = formatDate(team.teamStart);
    const endDate = formatDate(team.teamEnd);
    return (
        <div className="my-team__item">
            <div className="my-team__profile-wrap">
                <img src={teamImage} alt="" />
                <div className="my-team__detail-wrap">
                    <p className="my-team__name">{team.teamName}</p>
                    <p className="my-team__detail">{team.teamCompetition}</p>
                    <p className="my-team__detail">
                        {team.teamLocation.province}, {team.teamLocation.city}
                    </p>
                    <p className="my-team__detail">
                        {startDate} - {endDate}
                    </p>
                </div>
            </div>
            <Link>
                <button className="team__view-button">View</button>
            </Link>
        </div>
    );
}

export default TeamCard;
