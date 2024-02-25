
import React from 'react';
import VideoCard from './VideoCard';

const Videos = () => {

    // const objs = [{
    const id = "https://www.youtube.com/embed/xNRJwmlRBNU?si=GoYJzBV0d9XExFWA";
    // }];

    return (

        <div>
            <h1>Videos  </h1>

            <VideoCard id={id} />
            <VideoCard id={id} />

            <h3> Description </h3>
        </div>
    )
}

export default Videos;




