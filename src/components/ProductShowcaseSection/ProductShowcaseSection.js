import React from "react";
import PrettyHeader from "../PrettyHeader/PrettyHeader";
import ProductCard from "../ProductCard/ProductCard";
import product from "../../assets/Product.png";
import product1 from "../../assets/Product1.png";
import product2 from "../../assets/Product2.png";
import product3 from "../../assets/Product3.png";
import { Link } from "react-router-dom";

const ProductShowcaseSection = ({ showcaseTitle }) => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center justify-content-md-between my-2 mx-1 align-items-baseline">
        <div className="col-12 col-md-4 pretty-text-left">
          <PrettyHeader title={showcaseTitle} />
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          <Link to="/products">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary d-md-block d-none show-btn"
              href="/collection"
            >
              SHOW MORE
            </button>
          </Link>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-6 col-sm-6 col-md-3 ">
          <ProductCard
            discount="30%"
            imageUrl={product}
            category="Leafly"
            title="String of Pearls Succulent Plant"
            price="2000"
          />
        </div>
        <div className="col-6 col-sm-6 col-md-3 ">
          <ProductCard
            imageUrl={product1}
            category="Leafly"
            title="String of Pearls Succulent Plant"
            price="2000"
          />
        </div>
        <div className="col-6 col-sm-6 col-md-3 ">
          <ProductCard
            discount="60%"
            imageUrl={product2}
            category="Leafly"
            title="String of Pearls Succulent Plant"
            price="2000"
          />
        </div>
        <div className="col-6 col-sm-6 col-md-3 ">
          <ProductCard
            imageUrl={product3}
            category="Leafly"
            title="String of Pearls Succulent Plant"
            price="2000"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcaseSection;
