import React from 'react';
import './Main.css';

function Main( { children }) {
    return (
        <div className="main-outer-container">
            {children}
        </div>
    );
}

export default Main;