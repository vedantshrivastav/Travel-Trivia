import React from "react";
import { NavLink } from "react-router-dom";
import './Rajasthan.css';
import cp from './assets/city-p.jpg'
import sajjan from './assets/sajjan.jpg'
import saheli from './assets/saheli.jpg'
import ranthambore from './assets/ranthambore.jpg'
import nahargarh from './assets/nahargarh.jpg'
import Footer from './Footer';

const Rajasthan = () => {
    return (
        <div class="container-fluid">
            <div class="container-fluid content">
                <div class="row">
                    <h1>Travelling To Rajasthan? Know Some Things About It !</h1>
                    <p>Rajasthan’s history is the history of kings and dynasties. As you explore its top tourist attractions including its grand forts and palaces dot its skyline, you are reminded of its illustrious heritage. Tales of their valour, romance and wild spirit is still celebrated around bonfires in villages that seem as ancient as their people</p>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning">
                        <img class="card-img-top" src={cp} alt="cp" />
                        <div class="card-body">
                            <h3 class="card-title">1. City Palace, Udaipur</h3>
                            <p class="card-text">The spectacular City Palace holds great historical importance as it once served as the administrative complex of the Maharanas of Udaipur. The construction of this beautiful palace was commissioned by Maharana Udai Singh II, and it was built for over 400 years by his successors</p>
                            <p class="card-text"><strong>Best time to visit:</strong> March To June</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning">
                        <img class="card-img-top" src={sajjan} alt="sajjan" />
                        <div class="card-body">
                            <h3 class="card-title">2. Sajjangarh Palace, Udaipur</h3>
                            <p class="card-text">The 19th-century Sajjangarh Palace is one of the most prominent historical places in the city of Udaipur. Built by Maharana Sajjan Singh in 1884, this palace was initially used as an astronomical centre but later, it was also used as a hunting lodge and monsoon palace</p>
                            <p class="card-text"><strong>Best time to visit:</strong> March To June</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning">
                        <img class="card-img-top" src={saheli} alt="saheli" />
                        <div class="card-body">
                            <h3 class="card-title">3. Saheliyon ki Bari, Udaipur</h3>
                            <p class="card-text">Built in the 18th century by Maharana Sangram Singh, Saheliyon ki Bari (or the Garden of the Maidens) is well-known for its beautiful fountains, lush lawns and marble structures</p>
                            <p class="card-text"><strong>Best time to visit:</strong> October To June</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning">
                        <img class="card-img-top" src={ranthambore} alt="ranthambore" />
                        <div class="card-body">
                            <h3 class="card-title">4. Ranthambore National Park</h3>
                            <p class="card-text">India's best-known tiger sanctuary, Ranthambore National Park is also the best place to take a tiger safari, and while you may not see one of the elusive creatures during your visit, the chances are good</p>
                            <p class="card-text"><strong>Best time to visit:</strong> August To September</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning mb-5">
                        <img class="card-img-top" src={nahargarh} alt="nahargarh" />
                        <div class="card-body">
                            <h3 class="card-title">5. Nahargarh Fort</h3>
                            <p class="card-text">The rocky ridges of the Aravali Hills cradle Nahargarh Fort, a majestic monument that overlooks Jaipur and offers a stunning view of the city’s landscape. Built in 1734 by Jai Singh II, the then Maharaja of Jaipur, Nahargarh Fort was part of the city’s defense circle, along with Amer Fort and Jaigarh Fort</p>
                            <p class="card-text"><strong>Best time to visit:</strong> March To June</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Rajasthan;