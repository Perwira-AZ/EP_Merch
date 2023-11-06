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
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/myteam">
                    <li>My Team</li>
                </Link>
                <Link>
                    <li>Explore Team</li>
                </Link>
                <Link>
                    <li>Profile</li>
                </Link>
            </ul>
            <div className="header__logout">
                <TbLogout />
            </div>
        </header>
    );
}

export default Header;
