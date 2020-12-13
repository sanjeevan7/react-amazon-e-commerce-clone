import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12"
            title="The lean startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            id="13"
            title="AmazonBasics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
            price={99.99}
            image="https://m.media-amazon.com/images/I/71nDX36Y9UL._AC_UL320_.jpg"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            id="14"
            title="AmazonBasics MFi-Certified Lightning to USB A Cable for Apple iPhone and iPad - 6 Feet (1.8 Meters) - 2 -Pack - White"
            price={19.99}
            image="https://m.media-amazon.com/images/I/613Wvm+VqKL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="15"
            title="AmazonBasics MFi-Certified Lightning to USB A Cable for Apple iPhone and iPad - 6 Feet (1.8 Meters) - 2 -Pack - White"
            price={129.99}
            image="https://m.media-amazon.com/images/I/81swfV3ZbtL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="16"
            title="AmazonBasics Lightning to USB Cable - Advanced Collection, MFi Certified Apple iPhone Charger, Black, 6-Foot (Durability Rated 10,000 Bends)"
            price={49.99}
            image="https://m.media-amazon.com/images/I/61eAMEqFhxL._AC_UL320_.jpg"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            id="17"
            title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
            price={9.99}
            image="https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UL320_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
