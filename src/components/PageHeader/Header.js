import React from 'react';
import './Header.css';
import Nav from "../NavMenu/Nav";
import ImageHeader from "../ImageHeader/ImageHeader";
import logo from "../../assets/logo.png";

function Header() {
    return (
        <header className="header-container">
            <Nav />
            <ImageHeader
                logo={logo}
                alt="reddit-logo"
                text="Reddit"
            />
        </header>
    );
}

export default Header;