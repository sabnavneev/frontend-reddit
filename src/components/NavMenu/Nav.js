import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/hotposts">Hottest posts</NavLink>
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

