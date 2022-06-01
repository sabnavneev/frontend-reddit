import React from 'react';
import './Post.css';

function PostDetails({title, description, subscribers}) {
    return (
        <>
            <h3>Title</h3>
            <span>{title}</span>
            <h3>Description</h3>
            <span>{description}</span>
            <h3>Subscribers</h3>
            <span>{subscribers}</span>
        </>
    );
}

export default PostDetails;