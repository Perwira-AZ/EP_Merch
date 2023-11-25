import React from "react";

function RegisterPage() {
  return (
    <div className="bg-[#f1f8ff] flex flex-row justify-center w-full pt-[120px]">
      <div className="flex items-center justify-center w-[870px] h-[1002px] top-[146px] left-[525px] rounded-[30px] shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(36,131,240)_0%,rgb(112,229,255)_87.12%)] flex">
        <div className="w-[578px] h-[700px] top-[117px] left-[143px] bg-[#f1f8ff] rounded-[30px] shadow-[0px_2.46px_2.46px_#00000040]">
          {/* Register Form */}
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-indigo-950 text-xl font-bold font-['Poppins'] leading-[21.06px]">
              <h1 className="text-2xl font-bold mb-8">Register new account</h1>
            </div>
            <form>
              {/* Full Name */}
              <div className="mb-4">
                <label htmlFor="fullName" className="text-sm">
                  Full Name
                </label>
                <div className="w-[487px] h-[42px] bg-white rounded-[4.92px] shadow">
                  <input type="text" id="fullName" placeholder="Enter your full name" className="input-field" />
                </div>
              </div>

              {/* Username */}
              <div className="mb-4">
                <label htmlFor="username" className="text-sm">
                  Username
                </label>
                <div className="w-[487px] h-[42px] bg-white rounded-[4.92px] shadow">
                  <input type="text" id="username" placeholder="Choose a username" className="input-field" />
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <div className="w-[487px] h-[42px] bg-white rounded-[4.92px] shadow">
                  <input type="email" id="email" placeholder="Enter your email address" className="input-field" />
                </div>
              </div>

              {/* Password */}
              <div className="mb-4">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <div className="w-[487px] h-[42px] bg-white rounded-[4.92px] shadow">
                  <input type="password" id="password" placeholder="Enter your password" className="input-field" />
                </div>
              </div>

              {/* Password Confirmation */}
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="text-sm">
                  Password Confirmation
                </label>
                <div className="w-[487px] h-[42px] bg-white rounded-[4.92px] shadow">
                  <input type="password" id="confirmPassword" placeholder="Confirm your password" className="input-field" />
                </div>
              </div>

              <button className="btn-create w-[487px] h-[59px] bg-blue-500 rounded-[10px]">
                <div className="text-white text-xl font-medium font-['Poppins'] leading-[34.22px]">Create</div>
              </button>
            </form>
            <div className="mb-4 text-left">
              <p className="text-sm mt-4">
                Already have an account?
                <a className="text-blue-500" href="#">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
