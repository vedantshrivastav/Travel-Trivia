// import React, {useState} from 'react';
import './Footer.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const Footer = () => {

    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://public.traveltrivia.com/public/img/logo-large-white.png" className="logo" />
                    </div>
                    <div className="col-md-4">
                        <h3>Quick Links</h3>
                        <h4><FaIcons.FaHome />    <NavLink exact='true' to='/' className="navitem">Home</NavLink></h4>
                        <h4><FaIcons.FaGlobe />    <NavLink to='/India.js' className="navitem">Adventures</NavLink></h4>
                        <h4><FaIcons.FaPlane />    <NavLink to='/Booking.js' className="navitem">Travel Now</NavLink></h4>
                        <h4><FaIcons.FaInfoCircle />    <NavLink to='/About.js' className="navitem">About us</NavLink></h4>
                        <h4><FaIcons.FaAddressBook />    <NavLink to='/Contact.js' className="navitem">Contact us</NavLink></h4>
                    </div>
                    <div className="col-md-4">
                        <h3>Reach Out To Us</h3>
                        <h4>Kanishka Patil<p><FaIcons.FaInbox />  kspatil_mc22@mc.vjti.ac.in</p></h4>
                        <h4>Vedant Shrivastav<p><FaIcons.FaInbox />  vnshrivastav_mc22.vjti.ac.in</p></h4>
                        <h4>Rohan Rao<p><FaIcons.FaInbox />  rsrao_mc22@mc.vjti.ac.in</p></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;