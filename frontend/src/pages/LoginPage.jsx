import React from 'react';
import Logo from '../assets/Team UP Logo.svg';

function LoginPage({ onLogin }) {
  const [user, setUser] = React.useState({
    userEmail: '',
    password: '',
  });

  function onEmailChange(event) {
    console.log(user);
    setUser((prevState) => ({
      ...prevState,
      userEmail: event.target.value.toLowerCase(),
    }));
  }

  function onPasswordChange(event) {
    console.log(user);
    setUser((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    onLogin(user);
  }

  return (
    <div className="h-screen bg-white flex-row justify-center items-center w-full pt-[120px] pt-[120px]">
      <div className="flex justify-between p-8">
        <div className="flex flex-col items-center flex-1">
          <div className="mb-4">
            <p className="w-[162px] h-[88px] text-indigo-950 text-[32px] font-medium font-['Poppins'] leading-[100.08px]">Team Up</p>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-indigo-950 text-[40px] font-bold font-['Poppins'] leading-[100.08px]">
                Create <br /> the Best TEAM <br /> For Your Project
              </p>
            </div>
            <img src={Logo} alt="" className="h-9" style={{ width: '233px', height: '233px' }} />
          </div>
          <p className="text-stone-300 text-sm mt-2">Don't Have an Account?</p>
          <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:shadow-lg flex items-center">
            <p>
              Create Account <span className="ml-1">&#8594;</span>
            </p>
          </button>

          <div className="mt-4 flex items-center">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-300 rounded-[20px] shadow rounded p-4 text-left flex-1">
              <div className="flex items-center">
                <div className="w-1/2 pr-4 flex flex-col items-center">
                  <h2 className="text-white text-xl mb-1">About Us</h2>
                </div>
                <div className="w-1/2 pl-4">
                  <p className="text-white text-sm">
                    The TeamUP Platform is a collaborative space dedicated to helping individuals and teams achieve success in their projects. We provide
                    seamless tools and resources to make collaboration easy and effective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center flex-1">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-300 rounded-[20px] shadow rounded p-4 text-left flex-1 rounded p-4 mb-4 shadow">
            <div className="bg-white rounded-[20px] p-4 flex flex-col items-center">
              <form className="mb-4" onSubmit={onSubmitHandler}>
                <h2 className="text-indigo-950 text-lg font-semibold mb-4 items-center text-center">Login To Your Account</h2>

                <div className="mb-2">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    onChange={onEmailChange}
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="input-field w-full h-[42px] bg-white rounded-[4.92px] shadow"
                  />
                </div>

                <div className="mb-4 min-[350px]:w-[300px]">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <input
                    onChange={onPasswordChange}
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="input-field w-full h-[42px] bg-white rounded-[4.92px] shadow"
                  />
                </div>

                <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:shadow-lg flex justify-center w-full" type="submit">
                  Login
                </button>
              </form>
            </div>
            <div>
              <p className="text-sm">Konten</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
