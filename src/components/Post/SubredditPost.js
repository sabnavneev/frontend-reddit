import React from 'react';
import './SubredditPost.css';

function SubredditPost({title, description, subscribers}) {
    return (
        <>
            <div className="subreddit-post-container">
                <h3>Title</h3>
                <span>{title}</span>
                <h3>Description</h3>
                <span>{description}</span>
                <h3>Subscribers</h3>
                <span>{subscribers}</span>
            </div>
        </>
    );
}

export default SubredditPost;