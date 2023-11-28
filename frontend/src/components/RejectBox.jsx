import React from 'react';
import { rejectMember, addNotif } from '../utils/fetch';

function RejectBox({ onReject, toWait, req }) {
  const [message, setMessage] = React.useState(
    `Sorry ${req.name}, we have to reject you for position "${req.position}" in "${req.teamName}". Good luck next time.`
  );
  function onMessageChange(event) {
    setMessage(event.target.value);
  }

  // async function onReject(id, member) {
  //   await rejectMember(id);
  //   await addNotif({
  //     user: member,
  //     notifType: 'rejected',
  //     notifMessage: message,
  //   });
  //   toWait();
  // }

  return (
    <div className="inset-x-0 mx-auto translate-y-2/4 fixed z-[10] accept-box w-[450px] h-[360px] bg-white shadow-lg rounded-3xl">
      <div className="w-[450px] h-16 bg-gradient-to-l from-red-600 to-red-500 rounded-t-3xl text-center text-white text-3xl font-bold pt-4 justify-center">
        Confirm Rejection
      </div>
      <div className="w-[357px] m-auto">
        <textarea
          onChange={onMessageChange}
          className="mt-7 border-2 border-zinc-400 rounded-xl resize-none py-1 px-2"
          name="message"
          id="message"
          cols="40"
          rows="7"
          defaultValue={`Sorry ${req.name}, we have to reject you for position "${req.position}" in "${req.teamName}". Good luck next time.`}
        />
        <div className="flex gap-3 justify-between mt-3">
          <button
            onClick={() => onReject(req.id, req.member, message)}
            className="rounded-xl w-44 h-10 p-0 text-white text-normal text-lg bg-gradient-to-l from-red-500 to-red-600 transition ease-in-out duration-150 hover:scale-105 active:scale-100"
          >
            Reject
          </button>
          <button
            onClick={() => toWait()}
            className="rounded-xl w-44 h-10 p-0 text-white text-normal text-lg bg-gradient-to-l from-blue-500 to-cyan-300 transition ease-in-out duration-150 hover:scale-105 active:scale-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default RejectBox;
