import React from "react";
import product from "../../assets/Product.png";

const CartProduct = ({ imgUrl, name, color, size, price }) => {
  return (
    <div>
      <div className="d-none row d-md-flex mt-4 cart-item align-items-center">
        <div className="col-2">
          <img src={product} alt="product" height="72px" width="72px" />
        </div>
        <div className="col-4">
          <div className="cart-item-name">String of Pearls Succulent Plant</div>
          <div className="cart-item-category">Succulent Plant</div>
        </div>

        <div className="col-2 cart-item-price">Amount</div>
        <div className="col-2 cart-item-price">₹ 2000</div>
        <div className="col- cart-item-btn">
          <button className="btn delete-btn">DELETE</button>
        </div>
      </div>
      <div
        className="row d-flex d-md-none mt-4 cart-item m-1 p-1 flex-wrap"
        style={{ border: "0.5px solid #D8D8D8", borderRadius: "4px" }}
      >
        <div className="col-3 d-flex justify-content-center align-items-center">
          <img src={product} alt="product" height="100px" width="100px" />
        </div>
        <div className="col-7 ml-1">
          <div className="cart-item-name">String of Pearls Succulent Plant</div>
          <div className="cart-item-category">Plant</div>
          <div className="cart-item-color">White</div>
          <div className="cart-item-size">XL</div>
          <div className="cart-item-price">₹ 2000</div>
        </div>
        <div className="col-1 cart-item-btn">
          <button className="btn delete-btn">DELETE</button>
        </div>
      </div>
    </div>
  );
};
export default CartProduct;
