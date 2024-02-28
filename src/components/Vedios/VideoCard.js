

import React from 'react';
import YouTube from "react-youtube";


const VideoCard = ({ id }) => {

    function _onReady(e) {
        e.target.pauseVideo();
    }

    const options = {
        height: '290',
        width: '340',
        playerVars: {
            autoplay: 1,
            controls: 1,
        },
    };

    return (
        <iframe width="360" height="315" style={{ margin: "30px" }} src={id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>)
}

export default VideoCard;

