import React from 'react';
import './ImageHeader.css';

function ImageHeader( { logo, alt }) {
    return (
        <div className="image-container">
            <img src={logo} alt={alt} className="center"/>
            <h1>Reddit</h1>
        </div>
    );
}

export default ImageHeader;