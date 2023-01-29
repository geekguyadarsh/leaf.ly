import React from "react";
import Base from "../../components/Base/Base";
import OrderDetailsCard from "../../components/OrderDetailsCard/OrderDetailsCard";
import btnArrowLeft from "../../assets/btnArrowLeft.svg";

const Orders = () => {
  return (
    <div id="orders">
      <Base>
        <div className="container mt-5">
          <div className="page-title">Orders</div>
          <div
            className="row d-none d-md-flex mt-4 order-headers"
            style={{
              fontSize: "12px",
              fontFamily: "Poppins",
              color: "#929292",
            }}
          >
            <div className="col-4 row m-0 px-1 d-flex justify-content-around">
              <div className="col-3 d-flex justify-content-center">Product</div>
              <div className="col-9 col-md-8">Product Name</div>
            </div>
            <div className="col-2">Order date</div>
            <div className="col-1">Total Amt.</div>
            <div className="col-2">Tracking ID</div>
            <div className="col-1">Receipt</div>
            <div className="col-1"></div>
          </div>
          <OrderDetailsCard />
          <OrderDetailsCard />
          <div className="go-back d-block my-4 px-0 ml-1">
            <div
              type="button"
              className="d-flex btn"
              style={{
                fontWeight: "600",
                fontSize: "12px",
              }}
            >
              <img src={btnArrowLeft} alt="" />
              <div className="ml-3">Go Back</div>
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
};
export default Orders;
