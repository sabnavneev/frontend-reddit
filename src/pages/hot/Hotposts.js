import React, {useEffect, useState} from 'react';
import './Hot.css';
import axios from "axios";
import Header from "../../components/PageHeader/Header";
import Footer from "../../components/PageFooter/Footer";
import Main from "../../components/PageMain/Main";

function Hotposts() {
    const [posts, setHotPosts] = useState('');

    useEffect(() => {
        async function fetchHotPosts(){
            try {
                const response = await axios.get('https://www.reddit.com/hot.json?limit=15');
                console.log(response);
                /*setHotPosts(response.data.children.data.title);*/
            } catch (e) {
                console.error(e);
            }
        }
        fetchHotPosts();
    }, []); // mount



    return (
        <>
            <Header />
            <Main>
                <div>
                    <h1>Hottest posts</h1>
                    <p>{posts}</p>
                </div>
            </Main>

            <Footer />
        </>
    );
}

export default Hotposts;