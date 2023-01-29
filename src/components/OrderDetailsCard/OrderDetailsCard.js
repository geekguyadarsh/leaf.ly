import React from "react";
import ProductInOrders from "../ProductInOrders/ProductInOrders";
import externalLinkIcon from "../../assets/external-link-icon.svg";

const OrderDetailsCard = () => {
  return (
    <div>
      {/* FOR DESKTOP */}

      <div className="d-none row d-md-flex mt-3 order-item align-items-center flex-nowrap">
        <div className="col-4 px-0">
          <ProductInOrders />
          <ProductInOrders />
        </div>
        <div className="col-2 order-item-date">
          08 August 2022 <br />{" "}
          <span
            style={{
              letterSpacing: "0.43px",
              color: "#11C370",
              textTransform: "uppercase",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            Delivered
          </span>
        </div>
        <div className="col-1 order-item-cost">₹ 4600</div>
        <div
          className="col-2 order-item-id"
          style={{
            letterSpacing: "0.14px",
            color: "#384355",
            fontSize: "12px",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          55213ths1314
          <img src={externalLinkIcon} className="ml-1 mb-1" alt="" />
        </div>
        <div
          className="col-1 order-receipt-download btn"
          style={{ fontSize: "12px", fontWeight: "500" }}
        >
          DOWNLOAD
        </div>
        <div className="col-1 order-item-btn">
          <button
            className="btn delete-btn ml-2"
            style={{
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "0.14px",
              color: "#C91F24",
              whiteSpace: "nowrap",
            }}
          >
            CANCEL ORDER
          </button>
        </div>
      </div>

      {/* FOR MOBILE */}

      <div
        className="row d-flex d-md-none mt-4 order-item m-1 p-1 flex-wrap"
        style={{ border: "0.5px solid #D8D8D8", borderRadius: "4px" }}
      >
        <div className="col-12 d-flex flex-column justify-content-center align-items-start">
          <ProductInOrders />
          <ProductInOrders />
        </div>
        <div
          className="col-12 mx-1 m-2"
          style={{ fontWeight: "500", fontSize: "12px" }}
        >
          <div
            className="order-item-date d-flex justify-content-between"
            style={{ fontWeight: "500", fontSize: "12px" }}
          >
            <div className="font-weight-light">Order Date</div>
            <div>
              <span
                className="order-status mx-1"
                style={{
                  letterSpacing: "0.43px",
                  color: "#11C370",
                  textTransform: "uppercase",
                  fontSize: "9px",
                  fontWeight: "500",
                }}
              >
                DELIVERED
              </span>{" "}
              8th August 2022
            </div>
          </div>
          <div className="order-item-cost d-flex justify-content-between py-2">
            <div className="font-weight-light">Total Cost</div>
            <div>₹ 4600</div>
          </div>
          <div className="order-item-tracking-id d-flex justify-content-between">
            <div className="font-weight-light">Tracking ID</div>
            <div>
              55213ths1314
              <img src={externalLinkIcon} className="ml-1 mb-1" alt="" />
            </div>
          </div>
          <div className="order-item-receipt d-flex justify-content-between py-2">
            <div className="font-weight-light">Receipt</div>
            <div>DOWNLOAD</div>
          </div>
          <button
            className="btn delete-btn text-left p-0 py-2"
            style={{
              letterSpacing: "0.14px",
              color: "#C91F24",
              textTransform: "uppercase",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            CANCEL ITEM
          </button>
        </div>
      </div>

      <hr className="d-md-block d-none" style={{ marginLeft: "-10px" }} />
    </div>
  );
};

export default OrderDetailsCard;
