import React from 'react';
import { getNotif } from '../utils/fetch';
import NotificationCard from './NotificationCard';

function NotificationBar({ viewNotif }) {
  const [notifs, setNotifs] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getNotif()
      .then(({ data }) => {
        setNotifs(data);
        setIsLoading(false);
      })
      .catch(({ error }) => {
        console.log('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div
      className={`z-[4] w-[475px] h-screen fixed right-0 pt-[100px] px-9 bg-white shadow-[0_4px_30px_0_rgba(0,0,0,0.25)] flex flex-col items-center gap-1 transition-transform transform ${
        !isLoading ? `translate-x-0` : `translate-x-full`
      }`}
    >
      <h2 className="text-indigo-950 text-5xl font-bold ">Notification</h2>
      {isLoading ? <p>Loading...</p> : notifs != null ? notifs.map((notif) => <NotificationCard key={notif._id} notif={notif} />) : <p>No Notification</p>}
    </div>
  );
}

export default NotificationBar;
