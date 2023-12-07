import React from "react";

function ConfirmDelete({ onAccept, toWait, req }) {
  return (
    <div className="inset-x-0 mx-auto translate-y-2/4 fixed z-[10] accept-box w-[450px] h-[240px] bg-white shadow-lg rounded-3xl">
      <div className="w-[450px] h-16 bg-gradient-to-l from-red-500 to-red-600 rounded-t-3xl text-center text-white text-3xl font-bold pt-4 justify-center">Confirm Deletion</div>
      <div className="w-[357px] m-auto">
        <p className="text-gray-700 text-lg mt-4 mb-6 text-center">Are you sure you want to delete this team?</p>
        <div className="flex gap-3 justify-between">
          <button className="rounded-xl w-44 h-10 p-0 text-white text-normal text-lg bg-gradient-to-l from-red-500 to-red-600 transition ease-in-out duration-150 hover:scale-105 active:scale-100">
            Yes
          </button>
          <button
            onClick={() => toWait()}
            className="rounded-xl w-44 h-10 p-0 text-white text-normal text-lg bg-gradient-to-l from-blue-500 to-cyan-300 transition ease-in-out duration-150 hover:scale-105 active:scale-100"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
