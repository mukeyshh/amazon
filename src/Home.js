import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* src="https://images-na.ssl-images-amazon.com/images/I/6164brQiyBL._AC_SL1500_.jpg" alt="" /> */}

      <div className="home__row">
        <Product
          id=""
          title="the lean startup"
          price={1.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/3135hsFnHDL._SX425_.jpg"
        />

        <Product
          id=""
          title="the lean startup"
          price={1.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/3135hsFnHDL._SX425_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id=""
          title="the lean startup"
          price={1.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/3135hsFnHDL._SX425_.jpg"
        />

        <Product
          id=""
          title="the lean startup"
          price={1.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/3135hsFnHDL._SX425_.jpg"
        />

        <Product
          id=""
          title="the lean startup"
          price={1.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/3135hsFnHDL._SX425_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id=""
          title="the lean startup"
          price={1.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/3135hsFnHDL._SX425_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
