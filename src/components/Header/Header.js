

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

            <Link to={"/"} className=''> Home </Link>
            <Link className=''> News </Link>
            <Link className=''> Contact Us </Link>
            <Link className=''> About </Link>
            <Link to={"/donation"} className='split'> Donate </Link>
        </div>
    );
};

export default Header