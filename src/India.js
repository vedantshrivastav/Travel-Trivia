import React from 'react';
import { NavLink } from 'react-router-dom';
import './India.css';
import Footer from './Footer';

const India = () => {
    const data = [
        { name: 'Goa' }, { name: 'Himachal' }, { name: 'Kashmir' }, { name: 'Kerala' }, { name: 'Meghalaya' }, { name: 'Ooty' },
        { name: 'Rajasthan' }
    ]
    return (
        <div className="body-india">
            <h1 className="h1-india">Indian Tourism</h1>
            <p className="p1-india">
                <img className="image1-india" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh1Ohr8atJKkW9R1N0C1yiAJUyjyYaCufTfjjFwo5WIm9ncUuQ6rjiJ8sLepPj90IhQV9usZfNrkQlk6QVBimXuw" alt="Indian Tourism" />
                Indian Tourism is the rapid growing industry. India is a country which has several unique temples famous for its cultural heritage, various wildlife sanctuaries and it is surrounded by Indian Ocean, Himalayas, Bay of Bengal and Arabian Sea. It’s a Multilingual Country where people speak different languages. Every foreigner has a dream to visit this fascinating country. It has many tourist attractions like waterfalls, Deserts, Famous river bodies like Ganga, Yamuna, and Indus etc.

                India Tourism Campaign was promoted by many Indian Celebrities and its tagline is “Atithi Devo Bhava” which means honoring the guest as God. This happens only in India. Whenever a guest enters in India, it’s our prime duty to treat them with respect and provide best services. Indians treat their foreign guests with enthusiasm. India Tourism is today one of the largest service industry. Its campaign “Incredible India” was developed by Ministry of Tourism. This industry is based on certain standards which are: Safai(Cleanliness), Surakshaa(Security), Sahyog(Cooperation), Suchna(Information), Sanrachna(Infrastructure), Swagat(Welcome), and Suvidha(Facilitation).
            </p>
            <br />
            <p className="p2-india">
                Goa is everything leisurely tropical holidays are made of. The smallest state in India is an internationally famous beach holiday destination. Snuggled in between lush Western Ghats and azure waters of the Arabian Sea, Goa is languid. Goa holiday packages offers you a chance to explore and experience the best of this place. The cerulean waters, sandy shores, thriving parties, delicious gastronomy.Embraced in the heart of the mighty Himalayan range, Himachal Pradesh is a paradise embellished with various natural riches. The mountain state is the ideal location to relax and spend holidays with friends, families, and loved ones. From the snow capped peaks, lush valleys, orchards of fruits, pine forests, bubbling rivers, ancient holy sites, natural springs, thrilling adventures, the Land of Himalayas is simply exquisite. The breathtaking panorama is a sight one never forgets.
            </p>
            <h2 className="h2-india">Tourist Spots : From Beaches to Mountains,Lakes,Forests.</h2>
            <p className="p3-india">
                Rajasthan is one of the most popular travel destination in India. Every domestic and foreign tourist visiting India are keen to explore Rajasthan. The Royal state of Rajputs, erstwhile brave warrior rulers, the place lingers with an indescribable charm. Known for its historical monuments, tourism is benchmarked with majestic forts, places, temples and lakes in the scorching desert. The warm hospitality is catered at internationally awarded hotels & resorts some converted from the former royal residences. Relish the perfect mix of old traditional culture, modern luxuries with the backdrop of sun kissed desert.

                Rajasthan Tour Packages caters to the alluring delights of the state. Touring Rajasthan is a unique experience which leaves you spell bounded. The major destinations like Jaipur, Jodhpur, Jaisalmer, Udaipur, Ranthambore, Mount Abu, Bikaner etc. are covered. The enchanting Golden Triangle Tour is incomplete without a city of the royal state.




                Popular Rajasthan Tour Packages
                Rajasthan Packages	No. of Days
                Colorful Rajasthan Tour	10 Days / 9 Nights
                Golden Triangle India Tour Package	6 Days / 5 Nights
                Magnificent Rajasthan Tour	6 Days / 5 Nights
                Golden Triangle 7 Days Tour	7 Days / 6 Nights
                Udaipur and Mount Abu Tour Package	5 Days / 4 Nights
            </p>
            <div className="container-fluid">
            <div className="row mx-0">
                    {data.map((data, index) => (
                        <div className="col-md-5 mx-0">
                            <div className="card pt-0" key={index}>
                                <img className="card-img-top" src={require(`../src/assets/${data.name.toLowerCase()}.jpg`).default} alt={data.name} width="100%" />
                                <div className="card-body">
                                    <h4 className="card-title">
                                        {data.name}
                                    </h4>
                                    <NavLink to='/Booking.js' className="btn btn-outline-warning">Book Now</NavLink>
                                    <NavLink to={'/' + data.name + '.js'} className="btn btn-success">See more</NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <br />
            </div>
            <h3 className="h3-india">Interested ?<NavLink to="/Booking.js" className="h3-india">Travel Now</NavLink></h3>
            <p className="p2-india">
                Travel and tourism is the largest service industry in India. It provides heritage, cultural, medical, business and sports tourism. The main objective of this sector is to develop and promote tourism, maintain competitiveness of India as tourist destination and improve and expand existing tourism products to ensure employment generation and economic growth. In this section, we provide information about various tourist destinations, modes of travel, accommodation and approved travel agents.
                BannerImage
                About India
                Tourism in India has shown a phenomenal growth in the past decade. One of the reasons is that the Ministry of tourism, India has realized the immense potential of tourism in India during vacations. India travel tourism has grown rapidly with a great influx of tourists from all across the globe who have been irresistibly attracted to the rich culture, heritage, and incredible natural beauty of India. India tourism with its foggy hill stations, captivating beaches, historical monuments, golden deserts, serene backwaters, pilgrimage sites, rich wildlife, and colourful fairs capture the heart of every tourist.
            </p>
            < Footer />
        </div>
    )
};
export default India;
