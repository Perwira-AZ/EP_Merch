import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Team UP Logo.svg';
import features1 from '../assets/features1.png';
import features2 from '../assets/features2.png';
import features3 from '../assets/features3.png';

function LoginPage({ onLogin }) {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [features1, features2, features3];
  const texts = ['Create and Manage Teams', 'Explore Another Teams', 'Customize Your Profile'];

  const changeItem = (direction) => {
    const currentImage = document.querySelector('.current-image');
    const currentText = document.querySelector('.current-text');
    const nextIndex = direction === 'prev' ? (currentIndex === 0 ? images.length - 1 : currentIndex - 1) : (currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    
    if (direction === 'prev') {
      currentImage.classList.add('swipe-left');
      currentText.classList.add('swipe-left');
    } else {
      currentImage.classList.add('swipe-right');
      currentText.classList.add('swipe-right');
    }

    setTimeout(() => {
      setCurrentIndex(nextIndex);

      currentImage.classList.remove('swipe-left', 'swipe-right');
      currentText.classList.remove('swipe-left', 'swipe-right');
    }, 500);
  };
  
  const [user, setUser] = React.useState({
    userEmail: '',
    password: '',
  });

  function onEmailChange(event) {
    setUser((prevState) => ({
      ...prevState,
      userEmail: event.target.value.toLowerCase(),
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
    <div className="bg-white flex flex-row-reverse justify-center pt-[100px] w-full px-[30px] gap-5 max-[760px]:flex-col">
      <div className="bg-gradient-to-r from-blue-500 to-cyan-300 rounded-[20px] shadow rounded px-4 py-10 text-left rounded mb-4 shadow-2xl flex flex-col items-center gap-4 min-[460px]:min-w-[450px] justify-between">
        <form className="mb-6 mt-2 bg-sky-50 min-[420px]:w-[350px] rounded-[20px] p-4 flex flex-col items-center animate-on-scroll-pop" onSubmit={onSubmitHandler}>
          <h2 className="text-indigo-950 text-lg font-semibold mb-4 items-center text-center">Login To Your Account</h2>

          <div className="mb-2 w-full">
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

          <div className="mb-4 w-full">
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
          <div className="to-register">
            <p className="text-sm mt-4">
              Don't have an account?{'  '}
              <Link to="/register" className="text-blue-500">
                <button className="ml-1 bg-white rounded-md h-8 py-0 shadow text-indigo-950 font-semibold border-solid border-2 border-white hover:border-blue-500 px-3">
                  Create Account
                </button>
              </Link>
            </p>
          </div>
        </form>
        <div className="flex flex-row max-[550px]:flex-col items-center justify-center gap-4 animate-on-scroll-pop">
          <button onClick={() => changeItem('prev')} className="custom-button-prev">{'<'}</button>
          <img src={images[currentIndex]} alt="" className="w-full max-w-[300px] h-auto current-image" />
          <p className="w-[215px] text-white text-2xl font-semibold leading-[51.14px] mb-36 mt-36 current-text">{texts[currentIndex]}</p>
          <button onClick={() => changeItem('next')} className="custom-button-prev">{'>'}</button>
        </div>
      </div>

      <div className="max-w-[720px] flex flex-col justify-between">
        <div>
          <p className="text-indigo-950 text-4xl font-bold text-center mb-5 animate-on-scroll-left">Team UP</p>
          <div className="flex flex-row-reverse items-center max-w-[720px] max-[900px]:flex-col justify-center mr-6 animate-on-scroll-left">
            <img src={Logo} className="h-72 max-[1230px]:h-60" />
            <p className="text-indigo-950 text-6xl font-bold leading-[90px] max-[1230px]:text-4xl max-[760px]:text-6xl max-[1230px]:w-72 max-[760px]:w-full max-[760px]:w-full max-[900px]:text-center">
              Create the Best TEAM For Your Competition
            </p>
          </div>
        </div>
        <div className="left bg-gradient-to-r from-blue-500 to-cyan-300 rounded-[20px] mt-8 shadow rounded px-4 py-7 text-left rounded mb-4 shadow-2xl text-center text-white min-[960px]:h-[450px] flex flex-col justify-center min-[960px]:px-6">
          <p className="font-bold min-[960px]:text-3xl text-2xl mb-8 animate-on-scroll-pop">About Team UP</p>
          <p className="min-[960px]:text-2xl text-xl animate-on-scroll-pop">
            The TeamUP is a platform that will facilitate you in getting your dream team. Join the team you are interested in or create your own team and find
            members who suit your team's needs
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
