
import React from 'react'
import "./NewsCard.css"

const NewsCard = ({ img, desc }) => {

    return (
        <div className='responsive'>
            <div className='gallery'>
                <img src={img} />
                <div className='desc'>{desc}</div>
            </div>
            <div className='clearafter'></div>
        </div>
    )

}

export default NewsCard;



