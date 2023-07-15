import React from "react";
import './App.css';
import Home from './Home.js';
import Contact from './Contact.js';
import About from './About.js';
import Menu from './Menu.js';
import Navbar from './Navbar';
// import Footer from './Footer';
import Goa from './Goa.js';
import Himachal from './Himachal.js';
import Kashmir from './Kashmir.js';
import Kerala from './Kerala.js';
import Meghalaya from './Meghalaya.js';
import Ooty from './Ooty.js';
import Rajasthan from './Rajasthan.js';
import Booking from './Booking.js';
import India from './India.js';
import ScrollToTop from "./ScrollToTop";


import { Route , Routes } from 'react-router';

const App= () =>
{
  return(
    <div>
      <Navbar />
<Routes>
  <Route path="/" element={<Home/>} exact='true' />
        <Route path="/Contact.js" element={<Contact/>} exact='true' />
        <Route path="/About.js" element={<About/>} exact='true' />
        <Route path="/Menu.js" element={<Menu/>} exact='true' />
        <Route path="/Goa.js" element={<Goa/>} exact='true' />
        <Route path="/Himachal.js" element={<Himachal/>} exact='true' />
        <Route path="/Kashmir.js" element={<Kashmir/>} exact='true' />
        <Route path="/Kerala.js" element={<Kerala/>} exact='true' />
        <Route path="/Meghalaya.js" element={<Meghalaya/>} exact='true' />
        <Route path="/Ooty.js" element={<Ooty/>} exact='true' />
        <Route path="/Rajasthan.js" element={<Rajasthan/>} exact='true' />
        {/* <Route path="/Footer.js" element={<Footer/>} exact='true' /> */}
        <Route path="/Booking.js" element={<Booking/>} exact='true' />
        <Route path="/India.js" element={<India/>} exact='true' />
      </Routes>
    

    </div>
  );
};
export default App;
