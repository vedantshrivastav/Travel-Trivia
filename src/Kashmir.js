import React from "react";
import { NavLink } from "react-router-dom";
import './Kashmir.css';
import srinagar from './assets/srinagar.jpg';
import sonmarg from './assets/sonmarg.jpg';
import gulmarg from './assets/gulmarg.jpg';
import pahalgam from './assets/pahalgam.jpg';
import betaab from './assets/betaab-valley.jpg';
import Footer from './Footer';

const Kashmir = () => {
  return (
    <div class="container-fluid">
      <div class="container-fluid content">
        <div class="row">
          <h1>Travelling To Kashmir? Know Some Things About It !</h1>
          <p>Kashmir’s blissful aura can never be expressed in words. Snowy glaciers, pristine lakes, expansive grassland and stunning orchards await visitors in this paradise. The unbelievably beautiful places to visit in Kashmir have fascinated tourists from worldwide, and now it is your turn to discover this ‘Paradise on Earth’. If you are planning a trip here,we have compiled a list of top 3 tourist places in Kashmir to include in your itinerary for a memorable vacation</p>
        </div>
        <div class="row">
          <div class="card col-md-8 border-warning">
            <img class="card-img-top" src={srinagar} alt="srinagar" />
            <div class="card-body">
              <h3 class="card-title">1. Srinagar</h3>
              <p class="card-text">Srinagar, the summer capital of Jammu & Kashmir (J&K), is split into two by the river Jhelum. The star attraction here is the idyllic Dal Lake. You can take a shikara ride in the daytime or a midnight cruise for a romantic evening. You will also spot Asia’s most extensive Tulip Garden and India’s only floating market here</p>
              <p class="card-text"><strong>Best time to visit:</strong> September To June</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card col-md-8 border-warning">
            <img class="card-img-top" src={sonmarg} alt="sonmarg" />
            <div class="card-body">
              <h3 class="card-title">2. Sonmarg</h3>
              <p class="card-text">Literally meaning the ‘meadow of gold’, Sonmarg observes a widespread bloom of yellow crocuses during spring. Sonmarg or Sonamarg is a high-altitude tourist attraction in Srinagar’s northeast region. It is home to the famous three sisters – a group of rivers (the Lidder, Sind and the Neelum). It is also a popular base point for trekking excursions to the Thajiwas Glacier. While its surreal beauty will leave you stunned, a river rafting experience on the gushing Indus River will get your heart racing</p>
              <p class="card-text"><strong>Best time to visit:</strong> April To June</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card col-md-8 border-warning">
            <img class="card-img-top" src={gulmarg} alt="gulmarg" />
            <div class="card-body">
              <h3 class="card-title">3. Gulmarg</h3>
              <p class="card-text">Gulmarg is a beautiful place in Kashmir that is an absolute delight for adventure seekers. This is the state’s crowning glory, offering the world’s second-highest gondola ride to Apharwat Peak (14,403 ft.) and the third-highest ski resort. Skiing, snowboarding, trekking and other activities will add more excitement to the trip</p>
              <p class="card-text"><strong>Best time to visit:</strong> October To June</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card col-md-8 border-warning">
            <img class="card-img-top" src={pahalgam} alt="pahalgam" />
            <div class="card-body">
              <h3 class="card-title">4. Pahalgam</h3>
              <p class="card-text">Pahalgam is a visual treat with its breath-taking vistas of lush greenery, vast Himalayan ranges and pristine mountain rivers. Stretched along the Lidder River, it is a popular spot for adventure junkies to try trout fishing, trekking and angling among others. It serves as the base camp for popular trekking getaways to Amarnath, Aru Valley, Kohaloi Glacier, and other high-altitude destinations</p>
              <p class="card-text"><strong>Best time to visit:</strong> April To June</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card col-md-8 border-warning mb-5">
            <img class="card-img-top" src={betaab} alt="betaab" />
            <div class="card-body">
              <h3 class="card-title">5. Betaab Valley</h3>
              <p class="card-text">Located just 5 km from Pahalgam, Betaab Valley is yet another attraction among the beautiful places in Kashmir. You can take in the scenery while sipping tea, coffee, or Kashmiri Kahwa at a roadside café.Bollywood has an undeniable affection for the Betaab Valley, with blockbusters as old as Kashmir Ki Kali in 1964 and movies like Bajrangi Bhaijaan showcasing the best of Kashmir. If you want to soak in the breath-taking combination of nature and peace, it’s right here</p>
              <p class="card-text"><strong>Best time to visit:</strong> October To June</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Kashmir;