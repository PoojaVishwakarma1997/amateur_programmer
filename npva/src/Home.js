import React from 'react';
import "./Home.css";
import Product from "./Product";
import { AnimationWrapper } from 'react-hover-animation'

function Home() {
    return (
        <div className="home">
          <div className="home__container">
            
            <img 
              className="home__image"
              src="https://www.allwhitebackground.com/images/7/Boston-Wallpaper-1500x600-20362.jpg"
              alt=""  
            />

            <div className="home__row">
              <Product
                id="190101"
                title="Zero to One"
                price={119.99}
                image="https://images-na.ssl-images-amazon.com/images/I/71Xygne8+qL.jpg"
                rating={5}
              />
              <Product 
                 id="190102"
                 title="New Apple iPhone 12 Mini (64GB) - White"
                 price={60900}
                 image="https://m.media-amazon.com/images/I/71tT8J5cKuL._AC_UY218_.jpg"
                 rating={4} 
              />
            </div>

            <div className="home__row">
              <Product 
                id="190201"
                title="HP 15 (2021) Thin & Light Ryzen 3-3250 Laptop, 8 GB RAM"
                price={35995}
                image="https://m.media-amazon.com/images/I/41mQtYQUzmL._AC_UY218_.jpg"
                rating={4}
              />
              <Product 
                id="190202"
                title="Fastrack reflex 2.0 Uni-sex activity tracker"
                price={1195}
                image="https://m.media-amazon.com/images/I/814d7DPCPfL._AC_UL320_.jpg"
                rating={4}
              />
              <Product 
                id="190203"
                title="boAt Airdopes 433 Twin Wireless Ear-Buds with Mic(Black)"
                price={1999}
                image="https://m.media-amazon.com/images/I/51x00TKVjLS._AC_UL320_.jpg"
                rating={5}
              />
            </div>

            <div className="home__row">
              <Product
                id="190301"
                title="Panasonic 20L Grill Microwave Oven(NN-GT221WFDG,White, 38 Auto Cook Menus )"
                price={7700}
                image="https://m.media-amazon.com/images/I/81MiBiqx8iL._AC_UY218_.jpg"
                rating={5}
              />
            </div>

            <div className="home__row">
              <Product 
                id="190401"
                title="OnePlus Bullets Wireless Z Bass Edition"
                price={1999}
                image="https://images-na.ssl-images-amazon.com/images/I/61DKcGr12OL._SL1500_.jpg"
                rating={5}
              />
              <Product 
                id="190402"
                title="Milton Glassy Thermosteel 1000ml Vaccum Flasks"
                price={990}
                image="https://m.media-amazon.com/images/I/81b4G+2e0QL._AC_UL320_.jpg"
                rating={4}
              />
              <Product 
                id="190403"
                title="Casio SA-46 32 Mini Keys Musical Keyboard"
                price={2498.99}
                image="https://m.media-amazon.com/images/I/315UVNeVnPS.jpg"
                rating={4}
              />
            </div>

            <div className="home__row">
              <Product
                id="190501"
                title="Samsung 1.5 Ton 3 Star Inverter Split AC (Copper, Convertible 5 in 1)"
                price={33990}
                image="https://images-na.ssl-images-amazon.com/images/I/61N44JgNZjL._SL1500_.jpg"
                rating={5}
              />
              <Product 
                 id="190502"
                 title="Samsung Fully-Automatic Front Loading Washing Machine"
                 price={21990.90}
                 image="https://images-na.ssl-images-amazon.com/images/I/614-yYoVkUL._SL1500_.jpg"
                 rating={4} 
              />
            </div>

            <div className="home__row">
              <Product
                id="190601"
                title="Amazon Brand - Solimo Fame Engineered Wood Study Desk (Walnut and Black)"
                price={4799}
                image="https://images-na.ssl-images-amazon.com/images/I/81OO9-uuAsL._SL1500_.jpg"
                rating={5}
              />
            </div>

          </div>   
        </div>
    )
}

export default Home
