import React from 'react';
import { Link } from 'react-router-dom';
import JoinRequestItem from './JoinRequestItem';

function JoinRequestList({ requests }) {
    return (
        <div className="join-request__list">
            {requests.map((request) => (
                <JoinRequestItem key={request.id} request={request} reqId={request.id} />
            ))}
        </div>
    );
}

export default JoinRequestList;
