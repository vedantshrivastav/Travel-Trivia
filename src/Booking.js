import React from "react";
import { NavLink } from "react-router-dom";
import './Booking.css';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Booking = () => {
    function formSubmit()
    {
        alert("Thank You For Submitting Your Details ! We will reach out to you shortly");
    }
    return (
        <div className="body-booking">
            <div className="form">
                <h1 className="head">TRAVEL ENQUIRIES</h1>
                <form className="needs-validation" onSubmit={formSubmit}>
                    <div className="form-group">
                        <label for="name" className="text">Name</label>
                        <input type="text" className="form-control mr-sm-2 outline" placeholder="Enter your Name" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="form-group">
                        <label for="email" className="text">Email</label>
                        <input type="email" className="form-control mr-sm-2 outline" placeholder="Enter your Email-id" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="form-group">
                        <label for="Tourist" className="text">Number of Travellers</label>
                        <input type="number" className="form-control mr-sm-2 outline" placeholder="Total Travellers" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="form-group">
                        <label for="contact" className="text">Contact Number</label>
                        <input type="text" className="form-control mr-sm-2 outline" placeholder="Enter your Contact number" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="form-group">
                        <label for="Place" className="text">Place to Visit</label>
                        <input type="text" className="form-control mr-sm-2 outline" placeholder="Enter the Place You Want To Visit" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <button className="btn btn-outline-secondary submit" type="submit">Submit</button>
                </form>
            </div>
            < Footer />
            {/*<script>
                (function () {
                    window.addEventListener('load', function () {
                        // var forms = document.getElementsByclassNameName('needs-validation');
                        // var validation = Array.prototype.filter.call(forms,function(form){
                        //     form.addEventListener('submit',function(event){
                        //         if (form.checkValidity() === false){
                        //             event.preventDefault();
                        //             event.stopPropagation();
                        //         }
                        //         form.classNameList.add('was-validated');
                        //         },false);
                        //     });
                    }, false)
                })();
            </script>*/}
        </div>
    );
}
export default Booking;