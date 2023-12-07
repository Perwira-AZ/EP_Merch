import React from 'react';
import { viewRequests, acceptMember, rejectMember, addNotif } from '../utils/fetch';
import JoinRequestList from '../components/JoinRequestList';
import Cover from '../components/Cover';
import AcceptBox from '../components/AcceptBox';
import RejectBox from '../components/RejectBox';
import Loading from '../components/Loading';

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

  async function onAccept(id, member, message) {
    await acceptMember(id);
    await addNotif({
      user: member,
      notifType: 'accepted',
      notifMessage: message,
    });
    await viewRequests()
      .then(({ data }) => {
        setJoinReq(data);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch(({ error }) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading to false in case of an error
      });
    changeWaiting();
  }

  async function onReject(id, member, message) {
    await rejectMember(id);
    await addNotif({
      user: member,
      notifType: 'rejected',
      notifMessage: message,
    });
    await viewRequests()
      .then(({ data }) => {
        setJoinReq(data);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch(({ error }) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading to false in case of an error
      });
    changeWaiting();
  }

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
          <AcceptBox onAccept={onAccept} req={idle.req} toWait={changeWaiting} />
        </div>
      ) : idle.status === 'rejecting' ? (
        <div>
          <Cover />
          <RejectBox onReject={onReject} req={idle.req} toWait={changeWaiting} />
        </div>
      ) : null}

      <div className="pt-16 mx-auto min-[1330px]:max-w-7xl min-[900px]:max-w-[840px] max-w-[400px]">
        <h2 className="text-indigo-950 text-5xl font-bold leading-[34px] mb-20 text-center">Team Join Request</h2>
        {isLoading ? <Loading /> : joinReq != null ? <JoinRequestList requests={joinReq} accept={changeAccept} reject={changeReject} /> : <p>No Request</p>}
      </div>
    </div>
  );
}

export default JoinRequestPage;
