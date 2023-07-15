import React from "react";
import { NavLink } from "react-router-dom";
import './Goa.css';
import butterfly from './assets/butterfly-beach.jpg'
import colva from './assets/colva-beach.jpg'
import dudhsagar from './assets/dudhsagar.jpg'
import mollem from './assets/mollem-NP.jpg'
import cabo from './assets/cabo-fort.jpg'
import Footer from './Footer';

const Goa = () => {
  return (
    <div class="container-fluid">
      <div class="container-fluid content">
        <div class="row">
          <h1>Travelling To Goa? Know Some Things About It !</h1>
          <p>Soulful and serene, Goa offers you a heady mix of exotic and sandy beaches, churches and temples rich in history, glimpses into Portuguese culture, mind-blowing seafood, undiluted lush greenery</p>
        </div>
        <div class="row">
          <div class="card col-md-8 border-warning">
            <img class="card-img-top" src={butterfly} alt="butterfly" />
            <div class="card-body">
              <h3 class="card-title">1. Butterfly Beach</h3>
              <p class="card-text">Butterfly Beach is truly a hidden gem in South Goa. An unexploited paradise, this semi-circular bay is where you can spot millions of butterflies flying over the hilltop. Once you turn your attention to the turquoise water, you can spot goldfish and crabs playing about. You will have to take a boat ride to reach this beach as the land route demands you to undergo a challenging hike through the forest</p>
              <p class="card-text"><strong>Best time to visit:</strong> All year</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card col-md-8 border-warning">
            <img class="card-img-top" src={colva} alt="colva" />
            <div class="card-body">
              <h3 class="card-title">2. Colva Beach</h3>
              <p class="card-text">Colva is a hot favorite among the families and couples heading towards South Goa for a wonderful holiday. While adventure freaks can have a great time indulging in a number of water-based activities, those looking for sunbathing and a peaceful time won’t feel disappointed either. Hip and happening Colva is also famous for its vibrant nightlife and full moon parties, which makes it one of the fun places to visit in South Goa</p>
              <p class="card-text"><strong>Best time to visit:</strong> All year</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card col-md-8 border-warning">
            <img class="card-img-top" src={dudhsagar} alt="dudhsagar" />
            <div class="card-body">
              <h3 class="card-title">3. Dudhsagar Waterfalls</h3>
              <p class="card-text">Located in the Bhagwan Mahaveer Sanctuary and Mollem National Park, this picturesque falls forms the border between Goa and Karnataka. The whole region is surrounded by lush green forests and the falls cascade down from a height of 310 meters, offering a spectacular sight. The word Dudhsagar literally means ‘the sea of milk’ and that’s exactly what this waterfall is – milky, foamy</p>
              <p class="card-text"><strong>Best time to visit:</strong> All year</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card col-md-8 border-warning">
            <img class="card-img-top" src={mollem} alt="mollem" />
            <div class="card-body">
              <h3 class="card-title">4. Mollem National Park</h3>
              <p class="card-text">The core area of Bhagwan Mahaveer Sanctuary, Mollem National Park is home to a large number of wildlife species, birds, reptiles, and butterflies. You can easily spot wild boar, barking deer, Bonnet Macaque, and big cats like leopards and tigers while roaming around this park. If you are a bird lover, you will be delighted to visit this place since it houses more than 120 species of birds</p>
              <p class="card-text"><strong>Best time to visit:</strong> All year</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card col-md-8 border-warning mb-5">
            <img class="card-img-top" src={cabo} alt="cabo" />
            <div class="card-body">
              <h3 class="card-title">5. Cabo De Rama Fort</h3>
              <p class="card-text">With a captivating architecture which is still worth remembering, the fort also presents a mesmerizing view of the Arabian Sea and the Goan coastline. There is also a church of Saint Antonio, small yet captivating, around the Fortress. One can also visit the Cabo de Rama Beach which is located nearby and have a few relaxing moments by the side of refreshing nature</p>
              <p class="card-text"><strong>Best time to visit:</strong> All year</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Goa;