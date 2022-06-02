import React, {useEffect, useState} from 'react';
import './Home.css';
import axios from "axios";
import Nav from "../../components/PageNav/Nav";
import Top from "../../components/PageTop/Top";
import Header from "../../components/PageHeader/Header";
import Main from "../../components/PageMain/Main";
import HotPost from "../../components/Post/HotPost";
import Footer from "../../components/PageFooter/Footer";
import Logo from '../../assets/logo.png'


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
            <Nav />
            <Header>
                <img src={Logo} alt="Reddit logo"/>
                <h1 className="text-align-center font-size-50">Reddit</h1>
            </Header>
            <Top />
            <Main>
                <div className="inner-container">
                    <ul>
                        {posts.map((post) => {
                                return <HotPost
                                    title={post.data.title}
                                    banaan={post.data.subreddit}
                                    url={post.data.url}
                                    prefix={post.data.subreddit_name_prefixed}
                                    comments={post.data.num_comments}
                                    ups={post.data.ups}/>
                        })
                        }
                    </ul>
                </div>
            </Main>
            <Footer />
        </>
    );
}

export default Home;