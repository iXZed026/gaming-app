import React from 'react';
import './Contact.css';
import Social from './Social';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="contact-container">
                <div className="contact-flex">
                    <Social />
                </div>
            </div>
        </div>
    )
}

export default Contact