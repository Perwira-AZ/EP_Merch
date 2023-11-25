import React from 'react';
import { searchTeam } from '../utils/fetch';
import TeamList from '../components/TeamList';

function ExploreTeamPage() {
  const [myTeam, setMyTeam] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    searchTeam()
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
    <div className="exploreTeamPage bg-zinc-50 pt-[60px] pb-8 min-h-screen box-border">
      <div className="explore-team-page">
        <div className="mx-auto min-[1330px]:max-w-7xl min-[900px]:max-w-[840px] max-w-[400px]">
          <div className="explore-team">
            <div className="pt-16 mb-7 flex flex-row items-center justify-center">
              <h2 className="text-indigo-950 text-[45px] font-bold leading-[34px]">Explore Team</h2>
            </div>
            <div className="mb-3 xl:w-1/2 mx-auto">
              <input
                type="search"
                className="relative mb-10 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                id="exampleSearch"
                placeholder="Find by Name or Competition"
              />
            </div>
            {isLoading ? <p>Loading...</p> : myTeam != null && myTeam.length ? <TeamList teams={myTeam} /> : <p>No Team</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreTeamPage;
