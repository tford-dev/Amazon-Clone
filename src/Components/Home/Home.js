//Products available for purchase in this component for now are hard coded in JSX
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
                    src="https://m.media-amazon.com/images/I/61aJz0UdMuL._SX3000_.jpg"
                    alt="home banner"  
                />

                <div className="home__row"> {/*2 rows*/}
                    <Product id={10} title='Apple iPhone 12 Pro Max (256GB, Graphite)' image={"https://m.media-amazon.com/images/I/71XXJC7V8tL._FMwebp__.jpg"} price={1198.99} rating={4}/>
                    <Product id={11} title='Apple iPhone 13 (512GB, Blue)' image={"https://m.media-amazon.com/images/I/71xb2xkN5qL._FMwebp__.jpg"} price={1128.99} rating={4} />
                </div>

                <div className="home__row"> {/*3 rows*/}
                    <Product id={12} title="Apple Leather Case with MagSafe (for iPhone 13 Pro Max) - Sequoia Green" image={"https://m.media-amazon.com/images/I/81klsR82-BL._AC_SL1500_.jpg"} price={58.99} rating={4} />
                    <Product id={13} title="OTTERBOX DEFENDER SERIES XT SCREENLESS EDITION Case for iPhone 13 Pro Max" image={"https://m.media-amazon.com/images/I/61c63HtIxYL._AC_SL1500_.jpg"} price={69.95} rating={5} />
                    <Product id={14} title="Spigen Silicone Fit Designed for iPhone 13 Pro Max Case" image={"https://m.media-amazon.com/images/I/61A97CDlLAL._AC_SL1500_.jpg"} price={16.99} rating={3} />
                </div>

                <div className="home__row"> {/*1 row*/}
                    <Product id={15} title="2021 Apple MacBook Pro (16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 512GB SSD) - Space Gray" image={"https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_SL1500_.jpg"} price={2398.99} rating={4} />
                </div>
            </div>
        </div>
    )
}

export default Home
