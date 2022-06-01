import React from 'react';
import './Subreddit.css';
import {useParams} from "react-router-dom";

function Subreddit() {
    const { id } = useParams();

    return (
        <div>
            <h1>Title</h1>
            <p>Het postnummer is: {id}</p>
            <h1>Description</h1>
            <p>...</p>
            <h1>Number of subscribers</h1>
            <p>...</p>
            <button type="button">Take me back</button>

        </div>
    );
}

export default Subreddit;