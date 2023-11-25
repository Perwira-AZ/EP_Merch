import React from 'react';

function PositionCard({ num, roleChange, descChange, deleteMember, role, desc }) {
  const [val, setVal] = React.useState({ role, description: desc });

  React.useEffect(() => {
    setVal({ role, description: desc });
  }, [role, desc]);

  async function onRoleChange(event) {
    await setVal((prevState) => ({
      ...prevState,
      role: event.target.value,
    }));
    await roleChange(event);
  }

  async function onDescChange(event) {
    await setVal((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
    await descChange(event);
  }

  return (
    <div className="position-card w-full py-3 px-5 mt-1 mb-3 bg-white rounded-[15px] shadow-2xl bg-gradient-to-bl from-cyan-300 to-blue-500" id={num}>
      <form action="" className="w-full">
        <label htmlFor={'role ' + num} className="block text-sm font-medium text-white">
          Role
        </label>
        <input onChange={onRoleChange} type="text" id={'role-' + num} name={'role ' + num} className="mt-1 p-2 w-full border rounded-md" value={val.role} />

        <label htmlFor={'desc ' + num} className="block text-sm font-medium text-white">
          Role Description
        </label>
        <textarea
          onChange={onDescChange}
          id={'desc-' + num}
          name={'desc ' + num}
          rows="3"
          className="mt-1 p-2 w-full border rounded-md resize-none"
          value={val.description}
        ></textarea>
      </form>
      <button className="mt-3 w-full rounded-lg transition ease-in-out duration-150 bg-red-500 hover:bg-red-600" onClick={deleteMember} id={'del-' + num}>
        Delete
      </button>
    </div>
  );
}

export default PositionCard;
