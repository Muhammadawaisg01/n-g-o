
import React from 'react'
import NGOLogo from "../../images/ngo.jpg"
import image1 from "../../images/image-1.jpeg";
import image2 from "../../images/image-2.jpeg";
import image3 from "../../images/image-3.jpeg";
import image4 from "../../images/image-4.jpeg";

import NewsCard from './NewsCard';

const objects = [{
    desc: "A document with only text and noA document with only text and no images. The formatting codes embedded in a word processing file are not normally visible but may contain other than text characters. See ASCII text and alphanumeric",
    image: image1
}, {
    desc: "A document with only text and noA document with only text and no images. The formatting codes embedded in a word processing file are not normally visible but may contain other than text characters. See ASCII text and alphanumeric",
    image: image2

}, {
    desc: "A document with only text and noA document with only text and no images. The formatting codes embedded in a word processing file are not normally visible but may contain other than text characters. See ASCII text and alphanumeric",
    image: image3
}, {
    desc: "A document with only text and noA document with only text and no images. The formatting codes embedded in a word processing file are not normally visible but may contain other than text characters. See ASCII text and alphanumeric",
    image: image4
}];

const News = () => {
    return (

        <div className='  border-bottom: 1px solid rgba(21, 21, 21, 0.5);'>
            <h1> Latest News </h1>
            {objects.map((obj) => {
                return (
                    <NewsCard img={obj.image} desc={obj.desc} />
                )
            })}
            <br />
        </div>

    )
}

export default News