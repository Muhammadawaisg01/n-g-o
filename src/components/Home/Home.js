import News from '../news/News';
import Lectures from '../Lectures/Lectures'
import Main_Heading from '../Main_Heading/Main_Heading';
import Videos from '../Vedios/Videos';
import React from 'react'


const Home = () => {
    return (
        <>
            <Main_Heading />
            <News />
            <Lectures />
            <Videos />
        </>
    )
}

export default Home