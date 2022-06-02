import React from 'react';
import './Subreddit.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Nav from "../../components/PageNav/Nav";
import Header from "../../components/PageHeader/Header";
import Main from "../../components/PageMain/Main";
import Footer from "../../components/PageFooter/Footer";
import SubredditPost from "../../components/Post/SubredditPost";
import {useParams} from "react-router-dom";


function Subreddit() {
    const [ posts, setPosts ] = useState('');

    const { banaan } = useParams();

    useEffect(() => {
        async function fetchData(){
            try {
                /*const response = await axios.get(`https://www.reddit.com/r/technology/about.json`);*/
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
            <Nav />
            <Header>
                <h1 className="text-align-center">{posts.title}</h1>
                <p className="text-align-center">Subreddit specifications</p>
            </Header>
            <Main>
                <SubredditPost
                    title={posts.title}
                    description={posts.public_description}
                    subscribers={posts.subscribers}
                />
            </Main>
            <Footer />
        </>
    );
}

export default Subreddit;