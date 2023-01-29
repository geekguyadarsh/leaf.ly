import React from "react";
import Base from "../../components/Base/Base";
import "./Cart.css";
import CartProduct from "../../components/CartProduct/CartProduct";
import btnArrowLeft from "../../assets/btnArrowLeft.svg";

const Cart = () => {
  return (
    <div id="Cart">
      <Base>
        <div className="container mt-5">
          <div className="page-title">Shopping Cart</div>
          <div className="container-fluid p-0 mt-2">
            <div className="row d-none d-md-flex mt-4 cart-headers">
              <div className="col-2">Product</div>
              <div className="col-4">Product Name and Category</div>

              <div className="col-2">Amount</div>
              <div className="col-2">Price</div>
              <div className="col-2"></div>
            </div>
            <CartProduct />
            <CartProduct />
            <CartProduct />

            <div className="cart-actions mt-5">
              <div className="row d-flex align-items-center justify-content-between m-1">
                <div className="col-12 col-md-6 d-flex justify-content-between align-items-center">
                  <div className="go-back d-none d-md-block">
                    <div
                      type="button"
                      className="d-flex"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        fontSize: "12px",
                      }}
                    >
                      <img src={btnArrowLeft} alt="" />
                      <div className="ml-3">Continue shopping</div>
                    </div>
                  </div>
                  <form>
                    <div
                      className="promo d-flex align-items-center px-2"
                      style={{
                        border: "1px solid #d8d8d8",
                        borderRadius: "5px",
                      }}
                    >
                      <input
                        className="input-box form-control p-0"
                        type="text"
                        placeholder="Promo Code"
                        size="15"
                      />
                      <div className="input-group-append">
                        <div
                          className="apply-btn"
                          type="button"
                          style={{
                            color: "#384355",
                            fontWeight: "500",
                            fontSize: "12px",
                          }}
                        >
                          Apply
                        </div>
                      </div>
                    </div>
                  </form>
                  <div
                    className="cart-total d-block d-md-none font-weight-light"
                    style={{
                      fontSize: "16px",
                      color: "#000000",
                    }}
                  >
                    Total cost
                    <span
                      className="ml-2"
                      style={{
                        fontWeight: "600",
                        fontSize: "16px",
                        color: "#000000",
                      }}
                    >
                      ₹ 4600
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-none d-md-flex justify-content-around align-items-center">
                  <div
                    className="cart-total d-md-block d-none font-weight-light"
                    style={{
                      fontSize: "16px",
                      color: "#000000",
                    }}
                  >
                    Total cost
                    <span
                      className="ml-2"
                      style={{
                        fontWeight: "600",
                        fontSize: "16px",
                        color: "#000000",
                      }}
                    >
                      ₹ 4600
                    </span>
                  </div>
                  <div className="">
                    <div className="ask-email">
                      <input
                        className="input-box pr-3 px-2"
                        style={{ border: "1px solid #d8d8d8" }}
                        type="email"
                        size="25"
                        placeholder="Enter your email to checkout"
                      />
                    </div>
                  </div>
                  <div className="checkout-btn ml-1">
                    <button className="btn btn-checkout p-2 px-3">
                      CHECKOUT
                    </button>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-block d-md-none justify-content-around align-items-center mt-2">
                  <div className="">
                    <div className="ask-email d-flex flex-grow">
                      <input
                        className="input-box"
                        style={{ border: "1px solid #d8d8d8", width: "100%" }}
                        type="email"
                        placeholder="Enter your email to checkout"
                      />
                    </div>
                  </div>
                  <div className="checkout-btn mt-2">
                    <button className="btn btn-checkout btn-block p-2 px-3 rounded">
                      CHECKOUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
};
export default Cart;
