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
        <div className="join-request">
            <h2 className="join-request__title">Team Join Request</h2>
            {isLoading ? <p>Loading...</p> : joinReq != null ? <JoinRequestList requests={joinReq} /> : <p>No Request</p>}
        </div>
    );
}

export default JoinRequestPage;
