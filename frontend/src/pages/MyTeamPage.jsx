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
        <div className="myTeamPage bg-zinc-50 px-15 pb-8">
            <div className="my-team">
                <div className="mx-auto min-[1330px]:max-w-7xl min-[900px]:max-w-[840px] max-w-[400px]">
                    <div className="created-team">
                        <div className="pt-16 mb-7 flex flex-row items-center justify-between">
                            <h2 className="text-indigo-950 text-[45px] font-bold leading-[34px]">Created Team</h2>
                            <Link to="/joinrequest" className="w-48">
                                <button className="w-full h-12 bg-indigo-950 rounded-xl text-white text-lg">Join Request</button>
                            </Link>
                        </div>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : myTeam != null && myTeam.myTeamCreated.length ? (
                            <TeamList teams={myTeam.myTeamCreated} />
                        ) : (
                            <p>No Team</p>
                        )}
                        <Link className="w-full">
                            <button className="w-full h-12 bg-indigo-950 rounded-xl text-white text-lg">+ Create New Team</button>
                        </Link>
                    </div>
                    <div className="joined-team">
                        <h2 className="pt-11 mb-7 text-indigo-950 text-[45px] font-bold leading-[34px]">Joined Team</h2>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : myTeam != null && myTeam.myTeamJoined.length ? (
                            <TeamList teams={myTeam.myTeamJoined} />
                        ) : (
                            <p>No Team</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyTeamPage;
