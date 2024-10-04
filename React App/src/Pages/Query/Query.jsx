import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
import './Query.css';

const Query = () => {
    // const [success, setSuccess] = useState(false);
    // const [error, setError] = useState(false);
    const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     setError(false);
    //     setSuccess(false);

    //     emailjs
    //         .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_KEY)
    //         .then(
    //             (result) => {
    //                 setSuccess(true);
    //                 form.current.reset();
    //             },
    //             (error) => {
    //                 setError(true);
    //                 form.current.reset();
    //             },
    //         );
    // };

    return (
        <div className="container">
            <div className="inner-container">
                <div className="text-container">
                    <h1>Query</h1>
                    <span>Fill the form to share your query</span>
                    <div className="icon-container">
                    </div>
                </div>
                <form
                    ref={form} className="form-container"
                >
                    <label htmlFor="name">Name</label>
                    <input id="name" name="user_name" type="text" required />

                    <label htmlFor="email">Email</label>
                    <input id="email" name="user_email" type="email" required />

                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="user_phone" required />                    

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="user_message" rows={6} required />

                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Query;
