import React from 'react';
import './Contact.css';
import Footer from './Footer';

const Contact = () => {
    return (
        <div className="contact-us">
            <form className="form body-contact">
                <h1 className="head">TRAVEL ENQUIRIES</h1>
                <div className="form-group">
                    <label for="name" className="text">Name</label>
                    <input type="text" className="form-control mr-sm-2 outline" placeholder="Enter your Name" required />
                </div>
                <div className="form-group">
                    <label for="email" className="text">Email</label>
                    <input type="email" className="form-control mr-sm-2 outline" placeholder="Enter your Email-id" required />
                </div>
                <div className="form-group">
                    <label for="contact" className="text">Contact Number</label>
                    <input type="number" className="form-control mr-sm-2 outline" placeholder="Enter your Contact number" required />
                </div>
                <button className="btn btn-outline-secondary submit" type="submit">Submit</button>
            </form>
            <br />
            < Footer />
        </div>
    )
};
export default Contact;
