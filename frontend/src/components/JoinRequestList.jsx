import React from 'react';
import { Link } from 'react-router-dom';
import JoinRequestItem from './JoinRequestItem';

function JoinRequestList({ requests, accept, reject }) {
  return (
    <div className="join-request__list flex flex-col">
      {requests.map((request) => (
        <JoinRequestItem key={request.id} request={request} accept={accept} reject={reject} />
      ))}
    </div>
  );
}

export default JoinRequestList;
