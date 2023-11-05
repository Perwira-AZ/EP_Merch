import React from 'react';
import { TbLogout } from 'react-icons/tb';
import TeamUP from '../assets/Team.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="header__logo">
                <img src={TeamUP} alt="" />
            </div>
            <ul className="header__menu">
                <li>Home</li>
                <li>My Team</li>
                <li>Explore Team</li>
                <li>Profile</li>
            </ul>
            <div className="header__logout">
                <TbLogout />
            </div>
        </header>
    );
}

export default Header;
