import React from "react";
import product from "../../assets/Product.png";
import "./ProductInOrders.css";

const ProductInOrders = () => {
  return (
    <div id="ProductInOrders" className="mt-1">
      <div className="row m-1 p-1 d-flex justify-content-around">
        <div className="col-3 d-flex justify-content-center align-items-center">
          <img
            src={product}
            alt="product"
            height="75px"
            width="75px"
            className="rounded"
          />
        </div>
        <div className="col-9 col-md-8">
          <div className="orders-item-name my-2" style={{ fontWeight: "600" }}>
            String of Pearls Succulent Plant
          </div>
          <div
            className="orders-item-category"
            style={{
              fontSize: "12px",
              fontWeight: "500",
              textAlign: "left",
              color: "#929292",
              textTransform: "uppercase",
              opacity: "1",
            }}
          >
            Leafly
          </div>
          <button
            className="btn px-0 orders-item-action-btn"
            style={{ fontSize: "12px", color: "#1B6AA8", fontWeight: "600" }}
          >
            CHECK DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInOrders;
