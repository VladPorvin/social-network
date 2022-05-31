import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import n from './Navbar.module.css';
const Navbar = () => {
    return (
        <nav className={n.navbar}>
            <ul className={n.navigation}>
                <li className={n.navigation__item}><NavLink to="/profile">Profile</NavLink></li>
                <li className={n.navigation__item}><NavLink to="/dialogs">Messages</NavLink></li>
                <li className={n.navigation__item}><a href="#">News</a></li>
                <li className={n.navigation__item}><a href="#">Music</a></li>
                <li className={n.navigation__item}><a href="#">Settings</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;