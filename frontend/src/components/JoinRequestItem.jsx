import React from 'react';
import { Link } from 'react-router-dom';
import defaultPict from '../assets/profile.png';

function JoinRequestItem({ request, member, accept, reject }) {
  return (
    <div className="join-request__item w-full p-5 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-300 shadow-lg flex flex-row items-center justify-between mb-4">
      <div className="join-request__detail">
        <div className="join-request__profile flex flex-row gap-6 items-center">
          <Link to={`/profile/${member}`} className="transition ease-in-out duration-150 hover:scale-[1.03] active:scale-100">
            <img src={request.prodilePict || defaultPict} alt="" className="w-[126px] h-[126px] rounded-full" />
          </Link>
          <div className="join-request__user">
            <Link to={`/profile/${member}`}>
              <p className="text-white text-5xl font-semibold leading-[56px] transition ease-in-out duration-150 hover:scale-[1.05] active:scale-100">
                {request.name}
              </p>
            </Link>
            <Link to={`/profile/${member}`}>
              <p className="text-white text-md font-normal mb-4 transition ease-in-out duration-150 hover:scale-[1.05] active:scale-100">@{request.userName}</p>
            </Link>
            <p className="text-white text-4xl font-semibold">
              {request.position} - {request.teamName}
            </p>
          </div>
        </div>
      </div>
      <div className="join-request__button flex flex-col gap-3">
        <button
          className="w-40 h-12 text-white rounded-xl transition ease-in-out duration-150 bg-blue-500 hover:scale-105 hover:bg-blue-600 active:scale-100"
          onClick={() => accept(request)}
        >
          Accept
        </button>
        <button
          className="w-40 h-12 text-white rounded-xl transition ease-in-out duration-150 bg-red-500 hover:scale-105 hover:bg-red-600 active:scale-100"
          onClick={() => reject(request)}
        >
          Reject
        </button>
      </div>
    </div>
  );
}

export default JoinRequestItem;
