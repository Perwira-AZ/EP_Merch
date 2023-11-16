import React from 'react';
import { viewRequests } from '../utils/fetch';
import JoinRequestList from '../components/JoinRequestList';
import Cover from '../components/Cover';
import AcceptBox from '../components/AcceptBox';
import RejectBox from '../components/RejectBox';

function JoinRequestPage() {
  const [joinReq, setJoinReq] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [idle, setIdle] = React.useState({ status: 'waiting', request: '' });

  React.useEffect(() => {
    viewRequests()
      .then(({ data }) => {
        setJoinReq(data);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch(({ error }) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading to false in case of an error
      });
  }, []);

  function changeAccept(req) {
    setIdle({
      status: 'accepting',
      req,
    });
  }

  function changeReject(req) {
    setIdle({
      status: 'rejecting',
      req,
    });
  }

  function changeWaiting() {
    setIdle({
      status: 'waiting',
      reqId: '',
    });
  }

  return (
    <div className="join-request bg-zinc-50 pt-[60px] pb-8 min-h-screen box-border">
      {idle.status === 'accepting' ? (
        <div>
          <Cover />
          <AcceptBox toWait={changeWaiting} req={idle.req} />
        </div>
      ) : idle.status === 'rejecting' ? (
        <div>
          <Cover />
          <RejectBox toWait={changeWaiting} req={idle.req} />
        </div>
      ) : null}

      <div className="pt-16 mx-auto min-[1330px]:max-w-7xl min-[900px]:max-w-[840px] max-w-[400px]">
        <h2 className="text-indigo-950 text-5xl font-bold leading-[34px] mb-20 text-center">Team Join Request</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : joinReq != null ? (
          <JoinRequestList requests={joinReq} accept={changeAccept} reject={changeReject} />
        ) : (
          <p>No Request</p>
        )}
      </div>
    </div>
  );
}

export default JoinRequestPage;
