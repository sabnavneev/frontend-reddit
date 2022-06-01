import React from 'react';
import './Home.css';
import Header from "../../components/PageHeader/Header";
import Footer from "../../components/PageFooter/Footer";
import Main from "../../components/PageMain/Main";

function Home() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default Home;