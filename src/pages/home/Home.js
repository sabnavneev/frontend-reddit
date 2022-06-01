import React, {useEffect, useState} from 'react';
import './Home.css';
import axios from "axios";
import Header from "../../components/PageHeader/Header";
import Footer from "../../components/PageFooter/Footer";
import Main from "../../components/PageMain/Main";
import Post from "../../components/Post/Post";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts(){
            try {
                const response = await axios.get(`https://www.reddit.com/hot.json?limit=15`);
                setPosts(response.data.data.children);
            } catch (e) {
                console.error(e);
            }
        }
        fetchPosts();
    }, []); // mount

    return (
        <>
            <Header />
            <Main>
                    <h1>Hottest posts</h1>
                    {posts.map((post) => {
                            return <Post
                                title={post.data.title}
                                id={post.data.subreddit}
                                prefix={post.data.subreddit_name_prefixed}
                                comments={post.data.num_comments}
                                ups={post.data.ups}/>
                    })
                    }
            </Main>
            <Footer />
        </>
    );
}

export default Home;