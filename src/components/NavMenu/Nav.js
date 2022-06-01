import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Hottest posts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Reddit</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Memes</NavLink>
                    </li>
                </ul>
            </nav>
    );
}

export default Nav;

