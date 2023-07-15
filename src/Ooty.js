import React from "react";
import { NavLink } from "react-router-dom";
import './Ooty.css';
import ol from './assets/ooty-lake.jpg'
import dt from './assets/doddabetta-tea.jpg'
import grg from './assets/government-rose-garden.jpg'
import gbg from './assets/government-botanical-gardens.jpg'
import tribal from './assets/tribal.jpg'
import Footer from './Footer';

const Ooty = () => {
    return (
        <div class="container-fluid">
            <div class="container-fluid content">
                <div class="row">
                    <h1>Travelling To Ooty? Know Some Things About It !</h1>
                    <p>The summer capital of the Madras Presidency during the Raj, Ooty is a nature lover’s paradise. Located in the state of Tamil Nadu, Ooty (also known as Udhagamandalam) is a perfect destination for those looking for a break from the one-dimensional city life. From picturesque valleys to mystic waterfalls, and from fascinating grasslands to lush green tea estates</p>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning">
                        <img class="card-img-top" src={ol} alt="ol" />
                        <div class="card-body">
                            <h3 class="card-title">1. Ooty Lake</h3>
                            <p class="card-text">If you are looking for places to visit in Ooty in 1 day, you must include Ooty Lake in your itinerary. Formed during the British Raj in 1824, this artificial lake is spread across 65 acres. Surrounded by lush mountains, the landscape is magical, especially with the mist lingering around the green cover</p>
                            <p class="card-text"><strong>Best time to visit:</strong> March To June</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning">
                        <img class="card-img-top" src={dt} alt="dt" />
                        <div class="card-body">
                            <h3 class="card-title">2. Doddabetta Tea Factory</h3>
                            <p class="card-text">Tea estates are synonymous with the landscape of Ooty; therefore, the Doddabetta Tea Factory and Museum automatically features in the list of Ooty tourist places. At the tea museum, you can see several artefacts and other things related to tea. You can gain an insight into the different stages of tea production and also read about the popularity of tea not just in India but globally as well</p>
                            <p class="card-text"><strong>Best time to visit:</strong> March To June</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning">
                        <img class="card-img-top" src={grg} alt="grg" />
                        <div class="card-body">
                            <h3 class="card-title">3. Government Rose Garden</h3>
                            <p class="card-text">Your trip to Ooty would be incomplete if you do not incorporate the largest rose garden in the country in your sightseeing plans. Located on the beautiful slopes of Elk Hill, Government Rose Garden is a place that will give you the best of pictures and most amazing memories. Home to almost 20000 varieties of roses, it has been one of the most popular tourist spots in the state since 1995</p>
                            <p class="card-text"><strong>Best time to visit:</strong> October To June</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning">
                        <img class="card-img-top" src={gbg} alt="gbg" />
                        <div class="card-body">
                            <h3 class="card-title">4. Government Botanical Garden</h3>
                            <p class="card-text">This place is a heaven for those who love trees and flowers. Even if you aren’t particularly interested in these, the aesthetic appeal of this attraction is sure to warm your heart. The popular tourist attraction was laid out in 1848 by Graham Mclvor. It is divided into six sections: New Garden, Conservatory, Lower Garden, Nurseries, Italian Garden and Fountain Terrace</p>
                            <p class="card-text"><strong>Best time to visit:</strong> August To September</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning mb-5">
                        <img class="card-img-top" src={tribal} alt="tribal" />
                        <div class="card-body">
                            <h3 class="card-title">5. Tribal Museum</h3>
                            <p class="card-text">If you are someone who is interested in history and cultures, plan a visit to the Tribal Museum. The museum, also known as Tribal Research Centre, displays several relics related to regional tribal people. You can see here the expositions of various tribal movements that took place in the state over centuries. There are also some rare photographs of tribal population in the Andaman and Nicobar Islands</p>
                            <p class="card-text"><strong>Best time to visit:</strong> March To June</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Ooty;