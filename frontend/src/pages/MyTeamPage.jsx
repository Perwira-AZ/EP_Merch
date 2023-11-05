import React from 'react';
import { Link } from 'react-router-dom';
import { getMyTeam } from '../utils/fetch';
import TeamList from '../components/TeamList';

function MyTeamPage() {
    const [myTeam, setMyTeam] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        getMyTeam()
            .then(({ data }) => {
                setMyTeam(data);
                setIsLoading(false); // Set loading to false after data is fetched
            })
            .catch(({ error }) => {
                console.error('Error fetching data:', error);
                setIsLoading(false); // Set loading to false in case of an error
            });
    }, []);

    return (
        <div className="myTeamPage">
            <div className="my-team">
                <div className="created-team">
                    <div className="created-team__header">
                        <h2 className="my-team__title">Created Team</h2>
                        <Link>
                            <button className="my-team__join-request">Join Request</button>
                        </Link>
                    </div>
                    {isLoading ? <p>Loading...</p> : myTeam != null && myTeam.myTeamCreated.length ? <TeamList teams={myTeam.myTeamCreated} /> : <p>No Team</p>}
                    <Link>
                        <button className="my-team__create-button">+ Create New Team</button>
                    </Link>
                </div>
                <div className="joined-team">
                    <h2 className="my-team__title">Joined Team</h2>
                    {isLoading ? <p>Loading...</p> : myTeam != null && myTeam.myTeamJoined.length ? <TeamList teams={myTeam.myTeamJoined} /> : <p>No Team</p>}
                </div>
            </div>
        </div>
    );
}

export default MyTeamPage;
