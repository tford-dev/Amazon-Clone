import React from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    /*src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" */
                    src="https://m.media-amazon.com/images/I/61sTbvRL01L._SX3000_.jpg"
                    alt="home banner"  
                />

                <div className="home__row"> {/*2 rows*/}
                    <Product title='Free Agent Lifestyle' image={"https://m.media-amazon.com/images/I/41ZixpeNaiL.jpg"} price={12.99} rating={5}/>
                    <Product title="Passnag Lightsaber with 3 Mode Sound, Force FX Heavy Dueling, Real RGB 12 Colors Changeable Light Saber with Blaster Sound" image={"https://m.media-amazon.com/images/I/51JC+pOQDmL._AC_UL320_.jpg"} price={99.99} rating={4} />
                </div>

                <div className="home__row"> {/*3 rows*/}
                    <Product title="Men's Yeezy Boost 350 V2 Yechiel" image={"https://m.media-amazon.com/images/I/715pEC69DZL._AC_UL320_.jpg"} price={350} rating={4} />
                    <Product title="Men's Yeezy Boost 350 V2 Sand Taupe" image={"https://m.media-amazon.com/images/I/71nErAL6TtL._AC_UL320_.jpg"} price={350} rating={3} />
                    <Product title="Men's Yeezy Boost 700 Wave Runner" image={"https://m.media-amazon.com/images/I/51Nz4A11nbL._AC_UL320_.jpg"} price={700} rating={5} />
                </div>

                <div className="home__row"> {/*1 row*/}
                    <Product title="Alienware m15 R4 Gaming Laptop, 15.6 inch Full HD (FHD) - Intel Core i7-10870H, 16GB DDR4 RAM, 512GB SSD, NVIDIA GeForce RTX 3060 6GB GDDR6, Windows 10 Home - Lunar Light (Latest Model)" image={"https://m.media-amazon.com/images/I/71Jp27bTQoL._AC_UY218_.jpg"} price={1899.99} rating={4} />
                </div>
            </div>
        </div>
    )
}

export default Home
