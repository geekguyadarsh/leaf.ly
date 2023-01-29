import React from "react";
import product from "../../assets/Product.png";
import "./ProductInCheckout.css";

const ProductInCheckout = () => {
  return (
    <div className="my-2">
      <div className="row m-1 p-1">
        <div className="col-3 d-flex justify-content-center align-items-center">
          <img
            src={product}
            alt="product"
            height="75px"
            width="75px"
            className="rounded"
          />
        </div>
        <div className="col-8">
          <div className="checkout-item-name">
            String of Pearls Succulent Plant
          </div>
          <div className="checkout-item-price">₹ 2000</div>
          <div className="checkout-item-quantity">Quantity - 1</div>
        </div>
      </div>
    </div>
  );
};
export default ProductInCheckout;
