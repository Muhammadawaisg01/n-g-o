import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import News from './components/news/News';
import Lectures from './components/Lectures/Lectures'
import Main_Heading from './components/Main_Heading/Main_Heading';
import Videos from './components/Vedios/Videos';
import React from 'react'


const Home = () => {
    return (
        <>
            <Header />
            <Main_Heading />
            <News />
            <Lectures />
            <Videos />
            <Footer />
        </>
    )
}

export default Home