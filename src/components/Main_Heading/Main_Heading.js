
import React from 'react'
import Logo from "../../images/Logo.jpg";
import "./Main_Heading.css";

const Main_Heading = () => {
    return (
        <div className='container'>

            <div className='heading-1'>
                <h1> <b>Clov</b> </h1>
            </div>

            <div className='container-1' >

                <div className='flex-item-left'>
                    <p>We work with the government and partners in
                        Pakistan and across South Asia to provide
                        inclusive eye services and ensure everyone
                        can claim their human rights.</p>
                </div>

                <div className='flex-item-right'>
                    <img src={Logo} />
                </div>

            </div>
        </div>
    )
}

export default Main_Heading