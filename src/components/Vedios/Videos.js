
import React from 'react';
import VideoCard from './VideoCard';
import "./Video.css"

const Videos = () => {

    const objects = ["https://www.youtube.com/embed/xNRJwmlRBNU?si=GoYJzBV0d9XExFWA",
        "https://www.youtube.com/embed/WRiLBRR8sIA?si=CbmAqMaAek426BlV",
        "https://www.youtube.com/embed/YtB94vyp1bs?si=bPYS4GkPfHZN-g5v",
        "https://www.youtube.com/embed/UXj2K_nJlzY?si=6kk4Tqn1mTc3vq8T"
    ];

    return (

        <div>
            <h1>Videos  </h1>
            <div className='container'>
            </div>
            {
                objects.map((id) => {
                    return <VideoCard id={id} />
                })
            }
        </div>
    )
}

export default Videos;




