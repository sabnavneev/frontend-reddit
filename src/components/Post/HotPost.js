import React from 'react';
import './HotPost.css';
import {Link} from "react-router-dom";

function HotPost({ title, banaan, url, prefix, comments, ups }) {
    return (
                <li className="hot-post-container" key={banaan}>
                    <h3>
                        <a href={url} target="_blank" rel="noreferrer">
                            {title}
                        </a>
                    </h3>
                    <div>
                        <p className="title">
                            <Link to={`/subreddit/${banaan}`} className="title">
                                {prefix}
                            </Link>
                        </p>
                        <p className="comments-ups">Comments {comments} - Ups {ups}</p>
                    </div>
                </li>
    );
}

export default HotPost;