import React from 'react';
import './Subreddit.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "../../components/PageHeader/Header";
import Main from "../../components/PageMain/Main";
import Footer from "../../components/PageFooter/Footer";
import PostDetails from "../../components/Post/PostDetails";
import {useParams} from "react-router-dom";

function Subreddit() {
    const [ posts, setPosts ] = useState([]);

    const { banaan } = useParams();

    useEffect(() => {
        async function fetchData(){
            try {
                const response = await axios.get(`https://www.reddit.com/r/${banaan}/about.json`);
                setPosts(response.data.data)
                console.log(posts)
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, [banaan]); // mount

    return (
        <>
            <Header />
            <Main>
                <PostDetails
                    title={posts.title}
                />
                <p>test</p>
            </Main>
            <Footer />
        </>
    );
}

export default Subreddit;