

import React from 'react'
import '../Header/Header.css'
import { Link } from "react-router-dom";

import NGOLogo from "../../images/Logo.jpg";
// import { IoClose, IoMenu } from "react-icons/io5";

const Header = () => {

    return (
        <div class="topnav">
            <Link className='' >
                <img src={NGOLogo} style={{ width: "50px", height: "30px" }} />
            </Link>

            <Link className=''> Home </Link>
            <Link className=''> News </Link>
            <Link className=''> Contact Us </Link>
            <Link className=''> About </Link>
            <Link to={"/donation"} className='split'> Donate </Link>
            {/* <a class="active" href="#home">Home</a> */}
            {/* <a href="#news">News</a>
            <a href="#contact" class="split">Contact</a>
            <a href="#about" class="split">Help</a> */}
        </div>
    );
};

export default Header