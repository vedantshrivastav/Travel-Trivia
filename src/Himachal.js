import React from "react";
import { NavLink } from "react-router-dom";
import './Himachal.css';
import shimla from './assets/shimla.jpg'
import kullu from './assets/kullu.jpg'
import dharamshala from './assets/dharamshala.jpg'
import dalhousie from './assets/dalhousie.jpg'
import kangra from './assets/kangra.jpeg'
import Footer from './Footer';

const Himachal = () => {
    return (
        <div class="container-fluid">
            <div class="container-fluid content">
                <div class="row">
                    <h1>Travelling To Himachal Pradesh? Know Some Things About It !</h1>
                    <p>One of the better known states of India, it is home to scenic mountain towns and resorts such as Dalhousie. Host to the Dalai Lama, Himachal Pradesh has a strong Tibetan presence. This is reflected in its Buddhist temples and monasteries, as well as its vibrant Tibetan New Year celebrations</p>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning">
                        <img class="card-img-top" src={shimla} alt="shimla" />
                        <div class="card-body">
                            <h3 class="card-title">1. Shimla</h3>
                            <p class="card-text">Shimla, the ‘Queen of Hills’ and the capital city of Himachal Pradesh, is one of the most popular hill stations in India and among the top tourist places to visit in Himachal. Situated at an altitude of 2,200 metres, Shimla derives its name from Goddess Shyamala, an incarnation of Goddess Kali. The city’s location at the foothills of the Himalayas, amid greenery and snow-covered mountains, makes it ideal for trekking. In winter the entire city gets covered in snow and tourists can enjoy ice skating and skiing. Churches, temples and the natural beauty of the city attract tourists</p>
                            <p class="card-text"><strong>Best time to visit:</strong> All year</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning">
                        <img class="card-img-top" src={kullu} alt="kullu" />
                        <div class="card-body">
                            <h3 class="card-title">2. Kullu Manali</h3>
                            <p class="card-text">Kullu and Manali, due to their proximity, are often considered a single place. Located at the banks of the Beas River, the Kullu valley has the picturesque towns of Kullu and Manali. Kullu-Manali is one of the topmost tourist places in Himachal Pradesh and is visited by a large number of tourists and pilgrims. It is known for snow-covered mountains, scenic beauty, history and culture. A tourist must visit the Great Himalayan National Park, Sultanpur Palace, Bijli Mahadev Temple, Bhrigu Valley and Parvati Valley in Kullu. Manali is famous for its Tibetan monasteries, the Rohtang Pass, Solang Valley and Hadimba Devi Temple</p>
                            <p class="card-text"><strong>Best time to visit:</strong> All year</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning">
                        <img class="card-img-top" src={dharamshala} alt="dharamshala" />
                        <div class="card-body">
                            <h3 class="card-title">3. Dharamshala</h3>
                            <p class="card-text">The most popular tourist places in Himachal Pradesh are Dharamshala and upper Dharamshala or McLeodganj, which are about 5 km from each other. One can also reach McLeod Ganj from Dharamshala through the skyway in ten minutes. The skyway has a mono cable, detachable gondola (cabin) system with 18 gondolas and the capacity of ferrying 1,000 persons per hour. Largely home to Tibetan Buddhists, Dharamshala and McLeodganj are places of peace and bliss.</p>
                            <p class="card-text"><strong>Best time to visit:</strong> All year</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning">
                        <img class="card-img-top" src={dalhousie} alt="dalhousie" />
                        <div class="card-body">
                            <h3 class="card-title">4. Dalhousie</h3>
                            <p class="card-text">Dalhousie is one of the best places to visit in Himachal Pradesh. Known for its pleasant climate and scenic beauty, it has a variety of vegetation that includes pine, deodar, oak and rhododendrons. It is spread across the five hills (Bhangora, Bakrota, Terah, Potreyn and Kathlog) close to the Dhauladhar mountain range. Dalhousie is named after The Earl of Dalhousie who established this place as a summer retreat in 1854</p>
                            <p class="card-text"><strong>Best time to visit:</strong> All year</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card col-md-8 border-warning mb-5">
                        <img class="card-img-top" src={kangra} alt="kangra" />
                        <div class="card-body">
                            <h3 class="card-title">5. Kangra</h3>
                            <p class="card-text">There are several places to visit in Kangra, which lies at the foothills of the Dhauladhar range. Kangra is 13 km from the Gaggal airport. This ‘Land of the Gods’ has managed to protect its beauty and serenity. Masroor temples in Kangra are 15 rock-cut temples believed to have been made by the Pandavas during exile. Each temple is carved and decorated with sculptures. Kangra is home to the Kangra Fort that is mentioned in the war records of Alexander</p>
                            <p class="card-text"><strong>Best time to visit:</strong> All year</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Himachal;