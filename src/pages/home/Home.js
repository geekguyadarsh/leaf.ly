import React from "react";
import Base from "../../components/Base/Base";
import OfferCard from "../../components/OfferCard/OfferCard";
import Slider from "../../components/Slider/Slider";
import PrettyHeader from "../../components/PrettyHeader/PrettyHeader";
import ProductShowcaseSection from "../../components/ProductShowcaseSection/ProductShowcaseSection";

const Home = () => {
  return (
    <div className="home">
      <Base homepage="true">
        {/* Product Carousel Section */}

        <Slider />

        {/* Offer Card Section */}

        <div className="container my-5">
          <OfferCard />
        </div>

        {/* Suggested Product Section */}

        <ProductShowcaseSection showcaseTitle="Suggested For You" />

        {/* How are we different Heading */}

        <div className="container my-5">
          <div className="row my-3 d-flex justify-content-center">
            <div className="col-10 col-md-5 my-4">
              <PrettyHeader
                title="How are we different"
                subtext="Leafly is a company that connects farmers and consumers directly, eliminating the need of middleman which helps both farmers and consumers cutting extra-cost"
              />
            </div>
          </div>
        </div>

        {/* Popular Picks Section */}

        <ProductShowcaseSection showcaseTitle="Popular Picks" />
      </Base>
    </div>
  );
};
export default Home;
