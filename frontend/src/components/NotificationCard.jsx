import React from 'react';
import { formatDate } from '../utils/date';

function NotificationCard({ notif }) {
  const notifStyle = {
    header: notif.notifType === 'request' ? 'bg-stone-300' : notif.notifType === 'accepted' ? 'bg-blue-500' : 'bg-red-500',
    title: notif.notifType === 'request' ? 'Request to Join' : notif.notifType === 'accepted' ? 'Accepted' : 'Rejected',
  };
  const formattedDate = formatDate(notif.notifDate);

  return (
    <div className={`m-2 rounded-2xl shadow-[0_0_10px_0_rgba(0,0,0,0.25)] bg-white box-border`}>
      <div className={`box-border flex flex-row m-0 px-4 pt-2 w-[400px] h-[50px] rounded-t-2xl justify-between ${notifStyle.header}`}>
        <h3 className="text-black text-xl font-bold">{notifStyle.title}</h3>
        <p className="text-black text-xl font-normal">{formattedDate}</p>
      </div>
      <p className="px-4 pt-2 pb-4 text-black w-[400px] text-xl font-normal text-justify m-auto">{notif.notifMessage}</p>
    </div>
  );
}

export default NotificationCard;
