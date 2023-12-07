import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchTeam } from "../utils/fetch";
import { selectProvince, selectCity } from "../utils/location";
import TeamList from "../components/TeamList";
import Loading from "../components/Loading";

function ExploreTeamPage() {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  
    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("animate-on-scroll-left")) {
            entry.target.classList.add("slide-in-left");
          } else if (entry.target.classList.contains("animate-on-scroll-right")) {
            entry.target.classList.add("slide-in-right");
          } else if (entry.target.classList.contains("animate-on-scroll")) {
            entry.target.classList.add("fade-in");
          } else if (entry.target.classList.contains("animate-on-scroll-pop")) {
            entry.target.classList.add("pop");
          }
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(handleIntersect, options);
    const elements = document.querySelectorAll(".animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll, .animate-on-scroll-pop");
  
    elements.forEach((element) => observer.observe(element));
  
    return () => observer.disconnect();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const activeKeyword = searchParams.get("keyword") || "";
  const activeProvince = searchParams.get("province") || "";
  const activeCity = searchParams.get("city") || "";
  const [findTeam, setFindTeam] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const provinceList = ["--Select Province--", ...selectProvince()];
  const [cityList, setCityList] = React.useState(activeProvince ? ["--Select City--", ...selectCity(activeProvince)] : ["--Select City--"]);

  React.useEffect(() => {
    searchTeam(activeKeyword, activeProvince, activeCity)
      .then(({ data }) => {
        setFindTeam(data);
        setIsLoading(false);
      })
      .catch(({ error }) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [activeKeyword, activeProvince, activeCity]);

  function changeSearchParamas(event) {
    setSearchParams((prevState) => ({
      ...prevState,
      keyword: event.target.value,
    }));
  }

  function onProvinceChange(event) {
    if (event.target.value === "--Select Province--") {
      setCityList(["--Select City--"]);
      setSearchParams((prevState) => ({
        ...prevState,
        province: "",
      }));
    } else {
      setCityList(["--Select City--", ...selectCity(event.target.value)]);
      setSearchParams((prevState) => ({
        ...prevState,
        province: event.target.value,
      }));
    }
  }

  function onCityChange(event) {
    if (event.target.value === "--Select City--") {
      setSearchParams((prevState) => ({
        ...prevState,
        city: "",
      }));
    } else {
      setSearchParams((prevState) => ({
        ...prevState,
        city: event.target.value,
      }));
    }
  }

  return (
    <div className="exploreTeamPage bg-zinc-50 pt-[60px] pb-8 min-h-screen box-border">
      <div className="explore-team-page">
        <div className="mx-auto min-[1330px]:max-w-7xl min-[900px]:max-w-[840px] max-w-[400px]">
          <div className="explore-team">
            <div className="pt-16 mb-7 flex flex-row items-center justify-center">
              <h2 className="text-indigo-950 text-[45px] font-bold leading-[34px] animate-on-scroll-left">Explore Team</h2>
            </div>

            {/* Search Bar */}
            <div className="mb-3 xl:w-1/2 mx-auto animate-on-scroll-left">
              <input
                value={activeKeyword}
                onChange={changeSearchParamas}
                type="search"
                className="relative block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none placeholder-gray-400"
                id="exampleSearch"
                placeholder="Find by Name or Competition"
              />
            </div>

            {/* Set Location */}
            <div className="mb-10 flex xl:w-1/2 mx-auto animate-on-scroll-left">
              <div className="flex-1 mr-2">
                <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                  Province
                </label>
                <select onChange={onProvinceChange} id="province" name="province" className="mt-1 p-2 w-full border rounded-md" value={activeProvince}>
                  {provinceList.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 ml-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <select onChange={onCityChange} id="city" name="city" className="mt-1 p-2 w-full border rounded-md" value={activeCity}>
                  {cityList.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="animate-on-scroll">
              {isLoading ? <Loading /> : findTeam != null && findTeam.length ? <TeamList teams={findTeam} /> : <p>No Team</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreTeamPage;
