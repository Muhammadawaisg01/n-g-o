import React from 'react'

const Donation = () => {
    return (
        <React.Fragment>
            <div>First Name</div>
            <div>
                <input
                    type='text'
                />
            </div>
            <div>Last Name</div>
            <div>
                <input
                    type='text' />
            </div>
            <div>Email Address</div>
            <div>
                <input
                    type='email'
                    name='email'
                />
            </div>
            <div>Choose Donation Amount:</div>
            <div>
                <input
                    type='number' />
            </div>
            <div>Phone Number:</div>
            <div>
                <input
                    type='number'
                    name='ph-no'
                />
            </div>

        </React.Fragment>
    )
}

export default Donation

