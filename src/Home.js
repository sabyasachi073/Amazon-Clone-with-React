import React from "react";
import "./Home.css";
import banner from "./home__page__banner.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={banner} alt="Banner" />

        <div className="home__row">
          <Product
            id="9641032"
            title="Wings of Fire: An Autobiography of Abdul Kalam"
            price={199}
            image="https://rukminim1.flixcart.com/image/352/352/kl2mljk0/regionalbooks/n/j/g/wings-of-fire-original-imagy9rvqehz8anz.jpeg?q=70"
            rating={4}
          />

          <Product
            id="2300064"
            title="Apple iPad (7th Gen) 32 GB ROM 10.2 inch with Wi-Fi Only (Space Grey)"
            price={27200}
            image="https://rukminim1.flixcart.com/image/352/352/k1l1ea80/tablet/t/w/8/apple-mw742hn-a-original-imafh4hg9ycqtszm.jpeg?q=70"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Apple MacBook Pro M1 - (8 GB/512 GB SSD/Mac OS Big Sur)"
            price={139900}
            image="https://rukminim1.flixcart.com/image/352/352/khdqnbk0/computer/e/6/n/apple-original-imafxfyq4agsgysn.jpeg?q=70"
            rating={5}
          />

          <Product
            id="2344593"
            title="Alienware Core i9 10th Gen - (32 GB/1 TB SSD/8 GB Graphics)"
            price={344990}
            image="https://rukminim1.flixcart.com/image/352/352/kcauaa80/computer/8/k/e/alienware-original-imaftgn37g4vzqmy.jpeg?q=70"
            rating={2}
          />

          <Product
            id="4792335"
            title="Apple MacBook Air Core i3 10th Gen - (8 GB/256 GB SSD/Mac OS Catalina)"
            price={83990}
            image="https://rukminim1.flixcart.com/image/352/352/k9bo9e80/computer/k/v/a/apple-na-original-imafr5acnvhzmrzj.jpeg?q=70"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3259014"
            title="Sony 138.8 cm (55 inch) Ultra HD (4K) LED Smart TV  (KD-55X7500H)"
            price={69990}
            image="https://rukminim1.flixcart.com/image/352/352/kfvfwy80/television/b/h/y/sony-kd-55x7500h-original-imafw8d6dmqtdw8h.jpeg?q=70"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
