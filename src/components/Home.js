import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="123"
          title="The Learn Startup: How Constant Innovation  Creates Radically Successful Businesses Paperback"
          price={11.59}
          rating={5}
          image="https://productimages.hepsiburada.net/s/27/375/10192989716530.jpg"
        />

        <Product
          id="1234"
          title="Facelle Stand Mixer, 660W 6-Speed Tilt-Head Food Mixers Kitchen Electric Stand Mixer with 5.8QT Stainless Steel Bowl, Dough Hook, Flat Beater, Whisk, Splash Guard, for Baking, Cakes..."
          price={245}
          rating={4}
          image="https://m.media-amazon.com/images/I/71mkEM7sIWL._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123"
          title="Smart Watch for Women, AGPTEK Smartwatch for Android and iOS Phones IP68 Waterproof Activity Tracker with Full Touch Color Screen Heart Rate Monitor Pedometer Sleep Monitor..."
          price={45.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71JfGjxM5lL._AC_UY218_.jpg"
        />

        <Product
          id="1234"
          title="Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Twilight Blue"
          price={11.59}
          rating={5}
          image="https://m.media-amazon.com/images/I/71b9icxgIgL._AC_UY218_.jpg"
        />

        <Product
          id="1234"
          title="OnePlus 8 Glacial Green,​ 5G Unlocked Android Smartphone U.S Version, 8GB RAM+128GB Storage, 90Hz Fluid Display,Triple Camera, with Alexa Built-in"
          price={768.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51uEwkqjZTL._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="1234"
          title="Philips Computer Monitors 276E8VJSB 2'' Monitor, 4K UHD IPS, 1 Billion+ Colors, Ultranarrow Borders, Lowblue, Multiview, 4Yr Advance Replacement Warranty"
          price={256.59}
          rating={5}
          image="https://m.media-amazon.com/images/I/91KbrAVTugL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
