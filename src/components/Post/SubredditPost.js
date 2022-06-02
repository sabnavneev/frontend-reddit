import React from 'react';
import './SubredditPost.css';
import { useNavigate} from "react-router-dom";


function SubredditPost({title, url, description, subscribers}) {
   const history = useNavigate ();

   function handleClick() {
        history("/");
    }

    return (
        <>
            <div className="subreddit-post-container">
                <h2 className="padding-bottom-10px">Title</h2>
                <span className="padding-bottom-20px">{title}</span>
                <h2 className="padding-bottom-10px">Description</h2>
                <span className="padding-bottom-20px">{description}</span>
                <h2 className="padding-bottom-10px">Number of subscribers</h2>
                <span className="padding-bottom-20px">{subscribers}</span>
                <button type="button" onClick={handleClick}>Take me back</button>
            </div>
        </>
    );
}

export default SubredditPost;