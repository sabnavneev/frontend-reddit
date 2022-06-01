import React from 'react';
import './Post.css';
import {Link} from "react-router-dom";

function Post({title, id, prefix, comments, ups}) {
    return (
        <li className="post" key={id}>
            <h3 className="postTitle">
                <Link to={`/subreddit/${id}`}>
                    {title}
                </Link>
            </h3>
            <span className="preFixed">{prefix}</span>
            <span className="postFootNote">Comments {comments} - Ups {ups}</span>
        </li>
    );
}

export default Post;