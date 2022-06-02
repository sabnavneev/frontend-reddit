import React from 'react';
import './Top.css';

function Top({ children }) {
    return (
        <div className="top-outer-container">
            <div className="top-inner-container">
                <div>
                    <h1 className="text-align-center">Hottest posts</h1>
                    <p className="text-align-center">On reddit right now</p>

                </div>
            </div>
        </div>
    );
}

export default Top;