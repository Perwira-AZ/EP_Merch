import React from 'react';
import { acceptMember, addNotif } from '../utils/fetch';

function AcceptBox({ toWait, req }) {
  const [message, setMessage] = React.useState(
    `Congratulations ${req.name}, You are accepted to fill position "${req.position}" in our team "${req.teamName}".`
  );
  function onMessageChange(event) {
    setMessage(event.target.value);
  }

  async function onAccept(id, member) {
    await acceptMember(id);
    await addNotif({
      user: member,
      notifType: 'accepted',
      notifMessage: message,
    });
    toWait();
  }

  return (
    <div className="inset-x-0 mx-auto translate-y-2/4 fixed z-[10] accept-box w-[450px] h-[360px] bg-white shadow-lg rounded-3xl">
      <div className="w-[450px] h-16 bg-gradient-to-l from-blue-500 to-cyan-300 rounded-t-3xl text-center text-white text-3xl font-bold pt-4 justify-center">
        Confirm Acceptance
      </div>
      <div className="w-[357px] m-auto">
        <textarea
          onChange={onMessageChange}
          className="mt-7 border-2 border-zinc-400 rounded-xl resize-none py-1 px-2"
          name="message"
          id="message"
          cols="40"
          rows="7"
          defaultValue={`Congratulations ${req.name}, You are accepted to fill position "${req.position}" in our team "${req.teamName}".`}
        />

        <div className="flex gap-3 justify-between mt-3">
          <button
            onClick={() => onAccept(req.id, req.member)}
            className="rounded-xl w-44 h-10 p-0 text-white text-normal text-lg bg-gradient-to-l from-blue-500 to-cyan-300 transition ease-in-out duration-150 hover:scale-105 active:scale-100"
          >
            Accept
          </button>
          <button
            onClick={() => toWait()}
            className="rounded-xl w-44 h-10 p-0 text-white text-normal text-lg bg-gradient-to-l from-red-500 to-red-600 transition ease-in-out duration-150 hover:scale-105 active:scale-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AcceptBox;
