import React from 'react';
import PropTypes from 'prop-types';

const PositionCardDetail = ({ id, positionName, detail, empty, onJoinClick }) => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-cyan-300 p-4 rounded-xl shadow mb-4 w-[900px]  h-[90px] w-full">
      <div>
        <h3 className="text-white text-sm font-semibold">{positionName}</h3>
        <p className="text-white text-xs max-w-[800px]">{detail}</p>
      </div>
      {empty ? (
        <button
          onClick={() => onJoinClick(id)}
          className="w-[90px] bg-indigo-950 text-white text-sm px-4 py-2 rounded-lg hover:shadow-lg transition ease-in-out duration-150 hover:scale-105 active:scale-100"
        >
          Join
        </button>
      ) : (
        <button disabled className="w-[90px] bg-stone-300 text-white text-sm px-4 py-2 rounded-lg">
          Join
        </button>
      )}
    </div>
  );
};

// PropTypes validation
PositionCardDetail.propTypes = {
  positionName: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  onJoinClick: PropTypes.func.isRequired,
};

export default PositionCardDetail;
