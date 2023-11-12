import React from 'react';
import { TbLogout } from 'react-icons/tb';
import TeamUP from '../assets/Team.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="z-[100] bg-blue-500 shadow fixed top-0 left-0 h-[60px] w-full box-border flex flex-row justify-between items-center px-6">
            <div className="header__logo">
                <img src={TeamUP} alt="" className="h-9" />
            </div>
            <ul className="header__menu flex flex-row justify-center gap-x-5 font-medium list-none">
                <Link to="/" className="text-white">
                    <li>Home</li>
                </Link>
                <Link to="/myteam" className="text-white">
                    <li>My Team</li>
                </Link>
                <Link className="text-white">
                    <li>Explore Team</li>
                </Link>
                <Link className="text-white">
                    <li>Profile</li>
                </Link>
            </ul>
            <div className="text-white text-3xl">
                <TbLogout />
            </div>
        </header>
    );
}

export default Header;
