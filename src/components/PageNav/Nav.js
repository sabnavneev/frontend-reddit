import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
            <div className="nav-outer-container">
                <div className="nav-inner-container">
                    <ul className="nav-bar">
                        <li>
                            <NavLink to="/" className="color-white">Hottest posts</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="color-white">Reddit</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="color-white">Memes</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
    );
}

export default Nav;

