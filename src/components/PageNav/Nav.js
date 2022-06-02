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
                            <a href="https://www.reddit.com" className="color-white" target="_blank" rel="noreferrer">Reddit</a>
                        </li>
                        <li>
                            <a href="https://www.reddit.com/t/memes/" className="color-white" target="_blank" rel="noreferrer">Memes</a>
                        </li>
                    </ul>
                </div>
            </div>
    );
}

export default Nav;

