import React, { useEffect } from 'react';
import { selectProvince, selectCity } from '../utils/location';
import { Link } from 'react-router-dom';
// import { get } from 'mongoose';
import { createTeam } from '../utils/fetch';
import PositionCard from '../components/PositionCard';

function CreateNewTeamPage() {
  const provinceList = selectProvince();
  const [cityList, setCityList] = React.useState(selectCity('Aceh'));
  const [teamDetail, setTeamDetail] = React.useState({ teamLocation: { province: provinceList[0] } });
  const [members, setMembers] = React.useState([{ role: '', description: '', idx: 0 }]);

  function onTeamNameChange(event) {
    setTeamDetail((prevState) => ({
      ...prevState,
      teamName: event.target.value,
    }));
  }

  function onTeamCompetitionChange(event) {
    setTeamDetail((prevState) => ({
      ...prevState,
      teamCompetition: event.target.value,
    }));
  }

  function onTeamDescriptionChange(event) {
    setTeamDetail((prevState) => ({
      ...prevState,
      teamDescription: event.target.value,
    }));
  }

  function onProvinceChange(event) {
    setTeamDetail((prevState) => ({
      ...prevState,
      teamLocation: {
        ...prevState.teamLocation,
        province: event.target.value,
      },
    }));
    setCityList(selectCity(event.target.value));
  }

  function onCityChange(event) {
    setTeamDetail((prevState) => ({
      ...prevState,
      teamLocation: {
        ...prevState.teamLocation,
        city: event.target.value,
      },
    }));
  }

  function onStartDateChange(event) {
    setTeamDetail((prevState) => ({
      ...prevState,
      teamStart: event.target.value,
    }));
  }

  function onEndDateChange(event) {
    setTeamDetail((prevState) => ({
      ...prevState,
      teamEnd: event.target.value,
    }));
  }

  function onMemberRoleChange(event) {
    const index = event.target.id.split('-')[1];
    setMembers((prevState) => {
      return prevState.map((member, i) => {
        if (i == index) {
          return { ...member, role: event.target.value };
        }
        return member;
      });
    });
  }

  function onMemberDescChange(event) {
    const index = event.target.id.split('-')[1];
    setMembers((prevState) => {
      return prevState.map((member, i) => {
        if (i == index) {
          return { ...member, description: event.target.value };
        }
        return member;
      });
    });
  }

  React.useEffect(() => {
    setTeamDetail((prevState) => ({
      ...prevState,
      teamMember: members.map((member) => ({ position: member.role, description: member.description })),
    }));
  }, [members]);

  function onAddMember() {
    setMembers((prevState) => {
      return [...prevState, { role: '', description: '', idx: prevState.length }];
    });
  }

  function onDeleteMember(event) {
    const index = parseInt(event.target.id.split('-')[1]);
    if (members.length > 1) {
      setMembers((prevState) => {
        const updatedMembers = prevState.filter((_, i) => i !== index);
        return updatedMembers.map((member, i) => ({ ...member, idx: i }));
      });
    }
  }

  async function onCreateTeam() {
    const response = await createTeam({ ...teamDetail });
    if (response.data) {
      console.log(response.data);
      setTeamDetail({ teamLocation: { province: provinceList[0] } });
    } else {
      console.log(response.error);
    }
  }

  return (
    <div className="createNewTeam bg-zinc-50 pt-[60px] pb-8 min-h-screen box-border">
      <div className="create-new-team-form">
        <div className="mx-auto min-[1330px]:max-w-7xl min-[900px]:max-w-[840px] max-w-[400px]">
          <div className="create-new-team mx-auto max-w-[600px]">
            <div className="pt-16 mb-7 flex flex-row items-center justify-center">
              <h2 className="text-indigo-950 text-[35px] font-bold leading-[34px]">Create New Team</h2>
            </div>

            {/* Team Name */}
            <div className="mb-4">
              <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">
                Team Name
              </label>
              <input onChange={onTeamNameChange} type="text" id="teamName" name="teamName" className="mt-1 p-2 w-full border rounded-md" />
            </div>

            {/* Competition Name */}
            <div className="mb-4">
              <label htmlFor="competitionName" className="block text-sm font-medium text-gray-700">
                Competition Name
              </label>
              <input onChange={onTeamCompetitionChange} type="text" id="competitionName" name="competitionName" className="mt-1 p-2 w-full border rounded-md" />
            </div>

            {/* Team Description */}
            <div className="mb-4">
              <label htmlFor="teamDescription" className="block text-sm font-medium text-gray-700">
                Team Description
              </label>
              <textarea
                onChange={onTeamDescriptionChange}
                id="teamDescription"
                name="teamDescription"
                rows="3"
                className="mt-1 p-2 w-full border rounded-md resize-none"
              ></textarea>
            </div>

            {/* Province and City */}
            <div className="mb-4 flex">
              <div className="flex-1 mr-2">
                <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                  Province
                </label>
                <select onChange={onProvinceChange} id="province" name="province" className="mt-1 p-2 w-full border rounded-md">
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
                <select onChange={onCityChange} id="city" name="city" className="mt-1 p-2 w-full border rounded-md">
                  {cityList.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>{' '}
              </div>
            </div>

            {/* Start Date and End Date */}
            <div className="mb-4 flex">
              <div className="flex-1 mr-2">
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                  Start Date
                </label>
                <input onChange={onStartDateChange} type="date" id="startDate" name="startDate" className="mt-1 p-2 w-full border rounded-md" />
              </div>
              <div className="flex-1 ml-2">
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                  End Date
                </label>
                <input onChange={onEndDateChange} type="date" id="endDate" name="endDate" className="mt-1 p-2 w-full border rounded-md" />
              </div>
            </div>

            {/* Team Logo */}
            <div className="mb-4">
              <label htmlFor="teamLogo" className="block text-sm font-medium text-gray-700">
                Team Logo
              </label>
              <input type="file" id="teamLogo" name="teamLogo" accept="image/*" className="mt-1 p-2 w-full border rounded-md" />
            </div>

            {/* Team Members */}
            <p className="text-indigo-950 text-2xl font-medium leading-3">Member</p>
            {members.map((member) => (
              <div className="mt-5" key={`wrap-${member.idx}`}>
                <p>Position {member.idx + 1}</p>
                <PositionCard
                  key={`card-${member.idx}`}
                  num={member.idx}
                  roleChange={onMemberRoleChange}
                  descChange={onMemberDescChange}
                  deleteMember={onDeleteMember}
                  role={member.role}
                  desc={member.description}
                />
              </div>
            ))}

            {members.length < 10 ? (
              <button onClick={onAddMember} className="w-56 h-10 bg-indigo-950 rounded-xl mb-8 hover:bg-indigo-900 active:bg-indigo-950">
                + Add New Position
              </button>
            ) : null}
          </div>
          <div className="create-button mx-auto max-w-[600px]">
            <button
              onClick={onCreateTeam}
              className="w-full h-12 transition ease-in-out duration-100 bg-blue-500 hover:scale-[1.02] active:scale-[1.005] rounded-xl text-white text-lg"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNewTeamPage;
