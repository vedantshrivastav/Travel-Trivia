import React from "react";
import { NavLink } from "react-router-dom";
import './Meghalaya.css';
import ef from './assets/elephant.jpg'
import seven from './assets/seven.jpg'
import lady from './assets/lady.jpg'
import mawsmai from './assets/mawsmai.jpg'
import nartiang from './assets/nartiang.JPG'
import Footer from './Footer';

const Meghalaya = () => {
    return (
        <div class="container-fluid">
            <div class="container-fluid content">
                <div class="row">
                    <h1>Travelling To Meghalaya? Know Some Things About It !</h1>
                    <p>Meghalaya (Abode of Clouds in Sanskrit) is one of the seven North-Eastern states of India. Famous for its high rainfall, subtropical forests and biodiversity, it is abutted by Assam in the north and east and by Bangladesh in the south</p>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning">
                        <img class="card-img-top" src={ef} alt="ef" />
                        <div class="card-body">
                            <h3 class="card-title">1. Elephant Falls, Shillong</h3>
                            <p class="card-text">Originally named after a rock that resembled an elephant, during the British era, this stunning waterfall is composed of three falls. While the first fall is a broad one and concealed by trees, the second one is weak. However, the third one catches the eye with milky white water happily cascading over rocks that are covered in fern. With thick vegetation on either side, Elephant Falls can be accessed by carefully descending along slippery and steep steps</p>
                            <p class="card-text"><strong>Best time to visit:</strong> September To June</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning">
                        <img class="card-img-top" src={seven} alt="seven" />
                        <div class="card-body">
                            <h3 class="card-title">2. Seven Sisters Falls, Cherrapunji</h3>
                            <p class="card-text">The rainy season is the best time to visit this dramatic waterfall that descends from a height of 315m and is among the tallest falls in the country. As the name suggests, it has seven segments that are fed by rainwater and gush powerfully over limestone cliffs in the East Khasi Hills. The verdant green surroundings and the play of sunlight on the cascading water (watch out for the rainbow effect), make for an enchanting view</p>
                            <p class="card-text"><strong>Best time to visit:</strong> April To June</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning">
                        <img class="card-img-top" src={lady} alt="lady" />
                        <div class="card-body">
                            <h3 class="card-title">3. Lady Hydari Park, Shillong</h3>
                            <p class="card-text">Lady Hydari Park, with its Japanese style garden and a smattering of ponds. You can spend some time watching vibrant fishes and cute ducks in the lake here. Artistically drooping willow trees, manicured hedges, neat walkways and clumps of orchids and rhododendrons draw photography enthusiasts to this sprawling park. There is a play area for little ones and a small zoo too</p>
                            <p class="card-text"><strong>Best time to visit:</strong> October To June</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning">
                        <img class="card-img-top" src={mawsmai} alt="mawsmai" />
                        <div class="card-body">
                            <h3 class="card-title">4. Mawsmai Caves, Cherrapunji</h3>
                            <p class="card-text">The Mawsmai Caves, formed from limestone, will especially make your jaw drop with their strange curves, swirls, grooves, and cragginess. They get ample natural light for you to get around without torches, during the day. While tourists can explore up to 150 metres, the rest of the caves are closed</p>
                            <p class="card-text"><strong>Best time to visit:</strong> August To September</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning mb-5">
                        <img class="card-img-top" src={nartiang} alt="nartiang" />
                        <div class="card-body">
                            <h3 class="card-title">5. Nartiang Monoliths</h3>
                            <p class="card-text">Large and tall monoliths pepper the garden as a sign of respect to past kings. Serpentine paths will take you through these unique monoliths so that you can take a good look around. It’s a heritage site, with flat monoliths or dolmens dedicated to women, and the upright ones or menhirs dedicated to men</p>
                            <p class="card-text"><strong>Best time to visit:</strong> March To June</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Meghalaya; 