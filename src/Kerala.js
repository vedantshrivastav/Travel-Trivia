import React from "react";
import { NavLink } from "react-router-dom";
import './Kerala.css';
import kannur from './assets/kannur.jpg'
import wayanad from './assets/wayanad.jpg'
import periyar from './assets/periyar.jpg'
import backwaters from './assets/kerala-backwaters.jpg'
import LH from './assets/thangassery-light.jpg'
import Footer from './Footer';

const Kerala = () => {
  return (
    <div class="container-fluid">
      <div class="container-fluid content">
        <div class="row">
          <h1>Travelling To Kerala? Know Some Things About It !</h1>
          <p>One of the better known states of India, there’s a lot to pack in to a trip to Kerala. Known as God’s Own Country, Kerala in South India has a lot to offer: from hill stations and tea plantations up in the Western Ghats (mountains), to national parks that are home to tigers and elephants, to palm fringed beaches</p>
        </div>
        <div class="row">
          <div class="card col-md-8 border-warning">
            <img class="card-img-top" src={kannur} alt="kannur" />
            <div class="card-body">
              <h3 class="card-title">1. Kannur Thottda Beach</h3>
              <p class="card-text">Thottada Beach is a beautiful beach in Kannur district of Kerala, south India. It is situated at Thottada 7 km from Kannur town. The Thottada river which passes by here submerge into the sea near this beach. The 800 meter long stretch of sand along the beach is an ideal place for sun bathing. There is a 30 year dam also built across the river to keep fresh water from Sea water</p>
              <p class="card-text"><strong>Best time to visit:</strong> September To June</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card col-md-8 border-warning">
            <img class="card-img-top" src={wayanad} alt="wayanad" />
            <div class="card-body">
              <h3 class="card-title">2. Wayanad</h3>
              <p class="card-text">Wayanad is a beautiful district in “God’s own Country”, the enchanting state of Kerala in southern India. Wayanad is literally in the lap of nature, surrounded by dense forest land on one side and hills and lakes on the other</p>
              <p class="card-text"><strong>Best time to visit:</strong> April To June</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card col-md-8 border-warning">
            <img class="card-img-top" src={periyar} alt="periyar" />
            <div class="card-body">
              <h3 class="card-title">3. Periyar Tiger Reserve</h3>
              <p class="card-text">Periyar Wildlife Sanctuary in Thekkady has been host to the most exquisite flora and fauna in the country and nature lovers throng to it in great numbers. Famous for its rustic and refreshing climate along with a bird's eye view of a multitude of life forms, it is among the best tourist spots in God's Own Country</p>
              <p class="card-text"><strong>Best time to visit:</strong> October To June</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card col-md-8 border-warning">
            <img class="card-img-top" src={backwaters} alt="backwaters" />
            <div class="card-body">
              <h3 class="card-title">4. Kerala Backwaters</h3>
              <p class="card-text">The scenic backwaters of Kerala comprise serene stretches of lakes, canals and lagoons located parallel to the coast of the Arabian Sea. The backwater regions of Kerala are one of the most popular tourist destinations in the world. The tranquil backwater cruises are a once in a lifetime experience. Alappuzha, known as the 'Venice of the East'</p>
              <p class="card-text"><strong>Best time to visit:</strong> April To June</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card col-md-8 border-warning mb-5">
            <img class="card-img-top" src={LH} alt="LH" />
            <div class="card-body">
              <h3 class="card-title">5. Thangassery Light House</h3>
              <p class="card-text">The Thangassery Lighthouse, also known as the Tangasseri Light House, boasts of being the second tallest on the entire coast of Kerala and is thus even one of the most visited lighthouses in the state on this account</p>
              <p class="card-text"><strong>Best time to visit:</strong> October To June</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Kerala;