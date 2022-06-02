import React from 'react';
import './HotPost.css';
import {Link} from "react-router-dom";

function HotPost({title, banaan, prefix, comments, ups}) {
    return (
                <li className="hot-post-container" key={banaan}>
                    <h3 className="postTitle">
                        <Link to={`/subreddit/${banaan}`}>
                            {title}
                        </Link>
                    </h3>
                    <div>
                        <p className="title">{prefix}</p>
                        <p className="comments-ups">Comments {comments} - Ups {ups}</p>
                    </div>
                </li>
    );
}

export default HotPost;