import React from 'react';
import { viewRequests } from '../utils/fetch';
import JoinRequestList from '../components/JoinRequestList';

function JoinRequestPage() {
    const [joinReq, setJoinReq] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

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

    return (
        <div className="join-request bg-zinc-50 pt-[60px] pb-8 min-h-screen box-border">
            <div className="pt-16 mx-auto min-[1330px]:max-w-7xl min-[900px]:max-w-[840px] max-w-[400px]">
                <h2 className="text-indigo-950 text-5xl font-bold leading-[34px] mb-20 text-center">Team Join Request</h2>
                {isLoading ? <p>Loading...</p> : joinReq != null ? <JoinRequestList requests={joinReq} /> : <p>No Request</p>}
            </div>
        </div>
    );
}

export default JoinRequestPage;
