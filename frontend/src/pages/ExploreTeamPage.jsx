import React from "react";

function ExploreTeamPage() {
  return (
    <div className="myTeamPage bg-zinc-50 pt-[60px] pb-8 min-h-screen box-border">
      <div className="my-team">
        <div className="mx-auto min-[1330px]:max-w-7xl min-[900px]:max-w-[840px] max-w-[400px]">
          <div className="explore-team">
            <div className="pt-16 mb-7 flex flex-row items-center justify-center">
              <h2 className="text-indigo-950 text-[45px] font-bold leading-[34px]">Explore Team</h2>
            </div>
            <div className="mb-3 xl:w-1/2 mx-auto">
              <input
                type="search"
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                id="exampleSearch"
                placeholder="Find by Name or Competition"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreTeamPage;
