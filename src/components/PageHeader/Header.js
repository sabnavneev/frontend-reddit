import React from 'react';
import './Header.css';

function Header({ children }) {
    return (
        <div className="header-outer-container">
            <div className="header-inner-container">
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Header;