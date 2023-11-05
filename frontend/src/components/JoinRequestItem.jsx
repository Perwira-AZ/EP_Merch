import React from 'react';
import { Link } from 'react-router-dom';
import { acceptMember, rejectMember } from '../utils/fetch';
import profilePict from '../assets/profile.png';

function JoinRequestItem({ request, reqId }) {
    return (
        <div className="join-request__item">
            <div className="join-request__detail">
                <div className="join-request__profile">
                    <img src={profilePict} alt="" />
                    <div className="join-request__user">
                        <p className="join-request__name">{request.name}</p>
                        <p className="join-request__user-name">@{request.userName}</p>
                        <p className="join-request__position">
                            {request.position} - {request.teamName}
                        </p>
                    </div>
                </div>
            </div>
            <div className="join-request__button">
                <button className="join-request__accept" onClick={() => acceptMember(reqId)}>
                    Accept
                </button>
                <button className="join-request__reject" onClick={() => rejectMember(reqId)}>
                    Reject
                </button>
            </div>
        </div>
    );
}

export default JoinRequestItem;
