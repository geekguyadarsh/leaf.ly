import React from "react";
import "./ProductImageShowcase.css";
import product1 from "../../assets/Product1.png";
import product2 from "../../assets/Product2.png";
import product3 from "../../assets/Product3.png";
import ScrollContainer from "react-indiana-drag-scroll";

const ProductImageShowcase = () => {
  const ProductSlider = () => (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide d-none d-md-block"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="rounded"
              src={product1}
              alt="Los Angeles"
              style={{ width: "100%" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="rounded"
              src={product2}
              alt="Chicago"
              style={{ width: "100%" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="rounded"
              src={product3}
              alt="New york"
              style={{ width: "100%" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="rounded"
              src={product2}
              alt="New york"
              style={{ width: "100%" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="rounded"
              src={product2}
              alt="New york"
              style={{ width: "100%" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="rounded"
              src={product2}
              alt="New york"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <ScrollContainer>
          <ul className="d-md-flex d-none carousel-indicators indicators-large justify-content-start">
            <li
              data-target="#carouselExampleSlidesOnly"
              data-slide-to="0"
              className="active"
            >
              <img className="rounded" src={product1} alt="" />
            </li>
            <li data-target="#carouselExampleSlidesOnly" data-slide-to="1">
              <img className="rounded" src={product2} alt="" />
            </li>
            <li data-target="#carouselExampleSlidesOnly" data-slide-to="2">
              <img className="rounded" src={product3} alt="" />
            </li>
            <li data-target="#carouselExampleSlidesOnly" data-slide-to="3">
              <img className="rounded" src={product2} alt="" />
            </li>
            <li data-target="#carouselExampleSlidesOnly" data-slide-to="4">
              <img className="rounded" src={product2} alt="" />
            </li>
            <li data-target="#carouselExampleSlidesOnly" data-slide-to="5">
              <img className="rounded" src={product2} alt="" />
            </li>
          </ul>
        </ScrollContainer>
      </div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide d-md-none d-block"
        data-ride="carousel"
      >
        <ol className="carousel-indicators indicators-small d-md-none d-flex">
          <li
            data-target="#carouselExampleSlidesOnly"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleSlidesOnly" data-slide-to="1"></li>
          <li data-target="#carouselExampleSlidesOnly" data-slide-to="2"></li>
          <li data-target="#carouselExampleSlidesOnly" data-slide-to="3"></li>
          <li data-target="#carouselExampleSlidesOnly" data-slide-to="4"></li>
          <li data-target="#carouselExampleSlidesOnly" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={product1} alt="Los Angeles" style={{ width: "100%" }} />
          </div>
          <div className="carousel-item">
            <img src={product2} alt="Chicago" style={{ width: "100%" }} />
          </div>
          <div className="carousel-item">
            <img src={product3} alt="New york" style={{ width: "100%" }} />
          </div>
          <div className="carousel-item">
            <img src={product2} alt="New york" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );

  return <ProductSlider />;
};

export default ProductImageShowcase;
