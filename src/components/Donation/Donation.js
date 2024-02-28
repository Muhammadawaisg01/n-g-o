
import React from 'react'
import "./Donation.css"

const Donation = () => {

    function submitFn(e) {
        e.preventDefault();
    }

    return (
        <div className='mainContainer'>
            <form className='formContainer'>
                <div className='heading-1'>
                    <h1> <b>Donate Us!</b> </h1>
                </div>
                <label>First Name:</label>
                <div>
                    <input
                        type='text'
                    />
                </div>
                <label>Last Name:</label>
                <div>
                    <input
                        type='text' />
                </div>
                <label>Email Address:</label>
                <div>
                    <input
                        type='email'
                        name='email'
                    />
                </div>
                <label>Phone Number:</label>
                <div>
                    <input
                        type='number'
                        name='ph-no'
                    />
                </div>
                <label>Comments:</label>
                <div>
                    <textarea rows={8} cols={22} />
                </div>
                <div>Choose Donation Amount:</div>
                <div>
                    <input
                        type='number' />
                </div>
                <label>Choose Payment Method</label>
                <div>
                    <input
                        type='radio'
                        name='payment'
                    />
                    <label>Debit or Credit Card </label>
                    <br />
                    <input
                        type='radio'
                        name='payment' />
                    <label>PayPal </label>
                    <br />
                    <input
                        type='radio'
                        name='payment'
                    />
                    <label>Direct Bank Transfer</label>
                    <br />
                </div>
                <button type='submit' className='submitBtn' onClick={submitFn} >Submit</button>
            </form>
        </div>
    )
}

export default Donation

