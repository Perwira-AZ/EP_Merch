import React from 'react';

function LoginPage({ onLogin }) {
  const [user, setUser] = React.useState({
    userEmail: '',
    password: '',
  });

  function onEmailChange(event) {
    setUser((prevState) => ({
      ...prevState,
      userEmail: event.target.value,
    }));
  }

  function onPasswordChange(event) {
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
    <div className="bg-[#f1f8ff] flex flex-row justify-center w-full">
    <div className="bg-[#f1f8ff] w-[1920px] h-[1195px] relative">
      <div className="absolute w-[870px] h-[1002px] top-[146px] left-[990px] rounded-[30px] shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(36,131,240)_0%,rgb(112,229,255)_87.12%)]">
        <div className="absolute w-[578px] h-[457px] top-[123px] left-[146px] bg-[#f1f8ff] rounded-[30px] shadow-[0px_2.46px_2.46px_#00000040]">
          <div className="absolute top-[304px] left-[72px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#2a1d56] text-[16px] tracking-[-0.30px] leading-[21.1px] whitespace-nowrap">
            Remember me
          </div>
          <div className="absolute top-[304px] left-[354px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#bebebe] text-[16px] tracking-[-0.30px] leading-[21.1px] whitespace-nowrap">
            Forgot your password?
          </div>
          <div className="absolute top-[88px] left-[45px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#2a1d56] text-[20px] tracking-[-0.38px] leading-[21.1px] whitespace-nowrap">
            Username
          </div>
          <div className="absolute top-[28px] left-[182px] [font-family:'Poppins-Bold',Helvetica] font-bold text-[#2a1d56] text-[20px] tracking-[-0.38px] leading-[21.1px] whitespace-nowrap">
            Login to your account
          </div>
          <div className="absolute w-[487px] h-[42px] top-[118px] left-[45px] bg-white rounded-[4.92px] shadow-[0px_2.46px_2.46px_#00000040]">
            <div className="absolute top-[9px] left-[15px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#dbdbdb] text-[20px] tracking-[-0.38px] leading-[21.1px] whitespace-nowrap">
              Username
            </div>
          </div>
          <div className="absolute top-[188px] left-[45px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#2a1d56] text-[20px] tracking-[-0.38px] leading-[21.1px] whitespace-nowrap">
            Password
          </div>
          <div className="absolute w-[487px] h-[42px] top-[218px] left-[45px] bg-white rounded-[4.92px] shadow-[0px_2.46px_2.46px_#00000040]">
            <div className="absolute top-[9px] left-[15px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#dbdbdb] text-[20px] tracking-[-0.38px] leading-[21.1px] whitespace-nowrap">
              Password
            </div>
          </div>
          <div className="w-[20px] h-[20px] top-[306px] left-[45px] border-[3px] border-solid border-black absolute rounded-[5px]" />
          <div className="absolute w-[489px] h-[59px] top-[349px] left-[45px]">
            <div className="relative w-[487px] h-[59px] bg-[#2483f0] rounded-[10px]">
              <div className="absolute top-[12px] left-[218px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[20px] tracking-[-0.38px] leading-[34.2px] whitespace-nowrap">
                Login
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[901px] left-[77px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#f1f8ff] text-[20px] tracking-[-0.38px] leading-[21.1px] whitespace-nowrap">
          01/03
        </div>
        <div className="absolute w-[50px] h-[50px] top-[884px] left-[674px]">
          <div className="relative h-[50px] rounded-[5px]">
            <img className="absolute w-[9px] h-[9px] top-[17px] left-[20px]" alt="Vector" src="vector-9.svg" />
            <img className="absolute w-[9px] h-[9px] top-[24px] left-[20px]" alt="Vector" src="vector-10.svg" />
            <div className="w-[50px] h-[50px] top-0 left-0 border-2 border-solid border-[#f1f8ff] rotate-180 absolute rounded-[5px]" />
          </div>
        </div>
        <div className="absolute w-[50px] h-[50px] top-[884px] left-[746px]">
          <div className="relative h-[50px] rounded-[5px]">
            <img className="absolute w-[9px] h-[9px] top-[24px] left-[20px]" alt="Vector" src="vector-7.svg" />
            <img className="absolute w-[9px] h-[9px] top-[17px] left-[20px]" alt="Vector" src="vector-8.svg" />
            <div className="w-[50px] h-[50px] top-0 left-0 border-2 border-solid border-[#f1f8ff] rotate-180 absolute rounded-[5px]" />
          </div>
        </div>
        <img className="absolute w-[278px] h-[190px] top-[674px] left-[183px]" alt="Design" src="design.png" />
        <div className="absolute w-[215px] top-[716px] left-[487px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#f9f9f9] text-[24px] tracking-[0] leading-[51.1px]">
          Create and Manage Teams
        </div>
      </div>
      <div className="absolute w-[870px] h-[352px] top-[796px] left-[60px] rounded-[30px] shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(36,131,240)_0%,rgb(112,229,255)_87.12%)]">
        <div className="relative w-[637px] h-[204px] top-[60px] left-[118px]">
          <p className="absolute w-[504px] top-[28px] left-[129px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#f1f8ff] text-[20px] text-justify tracking-[-0.38px] leading-[43.8px]">
            The TeamUP platform will facilitate you in getting your dream team. Join the team you are interested in or
            create your own team and find members who suit your team&#39;s needs
          </p>
          <img className="absolute w-[3px] h-[152px] top-[40px] left-[109px]" alt="Vector" src="vector-6.svg" />
          <div className="absolute w-[101px] top-0 left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-[#f1f8ff] text-[20px] tracking-[-0.38px] leading-[100.1px] whitespace-nowrap">
            About us
          </div>
        </div>
      </div>
      <div className="absolute w-[1920px] h-[95px] top-0 left-0 bg-[#2a80f0] shadow-[0px_4px_3px_#00000040]">
        <div className="absolute top-[29px] left-[668px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#d7fff7] text-[25.7px] tracking-[-0.49px] leading-[34.2px] whitespace-nowrap">
          Home
        </div>
        <div className="absolute top-[30px] left-[804px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#d7fff7] text-[25.7px] tracking-[-0.49px] leading-[34.2px] whitespace-nowrap">
          My Team
        </div>
        <div className="absolute top-[30px] left-[962px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#d7fff7] text-[25.7px] tracking-[-0.49px] leading-[34.2px] whitespace-nowrap">
          Explore Team
        </div>
        <div className="absolute top-[30px] left-[1174px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#d7fff7] text-[25.7px] tracking-[-0.49px] leading-[34.2px] whitespace-nowrap">
          Profile
        </div>
        <img className="absolute w-[79px] h-[2px] top-[70px] left-[667px]" alt="Vector" src="vector-1.svg" />
        <img className="absolute w-[36px] h-[44px] top-[26px] left-[25px]" alt="Vector" src="vector.svg" />
        <img className="absolute w-[34px] h-[31px] top-[32px] left-[1865px]" alt="Vector" src="image.svg" />
      </div>
      <div className="absolute top-[635px] left-[396px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#bebebe] text-[20px] tracking-[-0.38px] leading-[21.1px] whitespace-nowrap">
        Dont have account?
      </div>
      <div className="absolute w-[235px] h-[45px] top-[681px] left-[378px]">
        <div className="relative w-[233px] h-[45px] bg-[#f1f8ff] rounded-[10px] shadow-[0px_4px_4px_#00000040]">
          <div className="absolute w-[20px] h-[16px] top-[15px] left-[192px]">
            <img className="absolute w-[20px] h-[2px] top-[7px] left-0" alt="Vector" src="vector-3.svg" />
            <img className="absolute w-[9px] h-[9px] top-[7px] left-[11px]" alt="Vector" src="vector-4.svg" />
            <img className="absolute w-[9px] h-[9px] top-0 left-[11px]" alt="Vector" src="vector-5.svg" />
          </div>
          <div className="absolute top-[5px] left-[23px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#2a1d56] text-[20px] tracking-[-0.38px] leading-[34.2px] whitespace-nowrap">
            Create account
          </div>
        </div>
      </div>
      <p className="absolute top-[249px] left-[96px] [background:linear-gradient(180deg,rgb(36,29,64)_0%,rgb(36,29,64)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins-Bold',Helvetica] font-bold text-transparent text-[64px] tracking-[-1.22px] leading-[100.1px]">
        Create <br />
        the Best TEAM <br />
        For Your Project
      </p>
      <div className="absolute w-[162px] top-[161px] left-[424px] [background:linear-gradient(180deg,rgb(36,29,64)_0%,rgb(36,29,64)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins-Medium',Helvetica] font-medium text-transparent text-[32px] tracking-[-0.61px] leading-[100.1px] whitespace-nowrap">
        Team UP
      </div>
      <img className="absolute w-[233px] h-[301px] top-[250px] left-[628px]" alt="Team UP" src="team-UP-1-1.png" />
    </div>
  </div>
);
};

export default LoginPage;
