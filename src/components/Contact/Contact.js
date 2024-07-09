import React from 'react';
import './Contact.css';
import Social from './Social';
import UsefulLinks from './UsefulLinks';
import ContactUs from './ContactUs';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="contact-container">
                <div className="contact-flex">
                    <Social />
                    <UsefulLinks/>
                    <ContactUs />
                </div>
            </div>
        </div>
    )
}

export default Contact