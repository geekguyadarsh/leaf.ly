import React, { useState } from "react";
import Base from "../../components/Base/Base";
import shipmentIcon from "../../assets/shipment-icon.svg";
import expressDeliveryIcon from "../../assets/express-delivery.svg";
import ShoppingBagIcon from "../../assets/shopping-bag.svg";
import "./ProductInfo.css";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import QuantityInput from "../../components/QuantityInput/QuantityInput";
import ProductImageShowcase from "../../components/ProductImageShowcase/ProductImageShowcase";
import ProductShowcaseSection from "../../components/ProductShowcaseSection/ProductShowcaseSection";
import { Link, Redirect } from "react-router-dom";

const ProductInfo = () => {
  const [product, setProduct] = useState({
    productId: "j3z7Md6BYE4c",
    id: 6,
    name: "productName",
    category: "succulent Plants",
    material: "LEATHER",
    description: `It has striking grey-green coloured, fleshy spoon-shaped leaves growing in a rosette on a stem. It is a popular groundcover plant in rockeries and water-wise gardens. The string of Pearl s succulent is an unusual succulent that is easy to grow indoors with little attention.`,
    highlights: ["scalable", "flexible", "rich"],
    articleNo: 34,
    mrp: 400,
    gst: 18,
    colors: ["red", "blue", "green", "yellow"],
    sizes: [22, 36, 42],
    updatedAt: "2022-07-29T04:42:30.373Z",
    createdAt: "2022-07-29T04:42:30.373Z",
    pics: ["sdfsd.png", "dsdfsf.png"],
    videos: ["Sdfsf.mp4", "sdfsfsdf.mkv"],
  });

  const {
    productId,
    id,
    name,
    category,
    material,
    description,
    highlights,
    colors,
    sizes,
  } = product;

  const ColorIcon = ({ color }) => {
    return (
      <ToggleButton
        value={color}
        className="mr-4 rounded-circle colr-btn"
        style={{ backgroundColor: color, width: "24px", height: "24px" }}
      ></ToggleButton>
    );
  };

  const SizeIcon = ({ size }) => {
    return (
      <ToggleButton
        value={size}
        className="mr-3 rounded size-btn"
        style={{ width: "36px", height: "36px", border: "none" }}
      >
        {size}
      </ToggleButton>
    );
  };

  const ColorPicker = () => {
    return (
      <div className="color-picker mt-2">
        <ToggleButtonGroup value="" exclusive onChange={() => {}}>
          {colors.map((color, i) => {
            return (
              <div key={i}>
                <ColorIcon color={color} />
              </div>
            );
          })}
        </ToggleButtonGroup>
      </div>
    );
  };

  const SizePicker = () => {
    return (
      <div className="size-picker mt-2">
        <ToggleButtonGroup value="" exclusive onChange={() => {}}>
          {sizes.map((size, i) => {
            return (
              <div key={i}>
                <SizeIcon size={size} />
              </div>
            );
          })}
        </ToggleButtonGroup>
      </div>
    );
  };

  const InputPinCode = () => {
    return (
      <form className="form-inline d-flex justify-content align-items-center">
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control pr-2"
            id="inputZip"
            style={{ backgroundColor: "#FAFAFA", borderRadius: "4px" }}
            placeholder="ENTER YOUR PIN CODE"
          />
          <button
            type="submit"
            className="btn ml-1"
            style={{
              boxShadow: "0px 6px 12px #0000000D",
              borderRadius: "4px",
              backgroundColor: "#FFBC00",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "0.43px",
              width: "91px",
              height: "36px",
            }}
          >
            CHECK
          </button>
        </div>
      </form>
    );
  };

  return (
    <div id="ProductInfo">
      <Base>
        <div className="container justify-content-around ">
          <div className="row justify-content-around">
            <div className="col-12 mt-md-3 col-md-4 mt-0 px-0">
              <ProductImageShowcase />
            </div>
            <div className="col-12 mt-md-3 col-md-4 mt-3">
              <div className="d-flex pl-md-3 flex-column justify-content-center">
                <div
                  className="product-category"
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    letterSpacing: "0.43px",
                    color: "#929292",
                    textTransform: "uppercase",
                  }}
                >
                  Succulent Plants
                </div>
                <div
                  className="product-title font-weight-bold mt-2"
                  style={{
                    fontSize: "24px",
                    letterSpacing: "0.86px",
                    color: "#051220",
                    textTTransform: "capitalize",
                  }}
                >
                  String of Pearls Succulent Plant
                </div>
                <div
                  className="product-price mt-1"
                  style={{
                    fontSize: "20px",
                    letterSpacing: "0.72px",
                    color: "#073260",
                  }}
                >
                  ₹ 2000
                </div>

                <div className="product-pin-code-input mt-3">
                  <div
                    className="text"
                    style={{
                      letterSpacing: "0.43px",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    PIN CODE
                  </div>
                  {/* pin code input */}
                  <InputPinCode />
                  <div className="pin-code-input"></div>
                </div>
                <div className="product-quantity mt-3">
                  <div
                    className="text"
                    style={{
                      letterSpacing: "0.43px",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    QUANTITY
                  </div>
                  {/* quantity Picker */}
                  <div className="quantity-picker">
                    <QuantityInput />
                  </div>
                  {/* Action Picker */}
                  <div className="action-btns d-flex justify-content-start">
                    <Link to="/cart">
                      <button
                        className="btn btn-add-cart d-flex px-3 pt-2 mr-2 justify-content-center"
                        style={{
                          color: "#384355",
                          letterSpacing: "0.43px",
                          border: "1px solid #384355",
                          fontSize: "12px",
                          fontWeight: "500",
                        }}
                      >
                        <img src={ShoppingBagIcon} alt="" className="mr-2" />
                        ADD TO MY BAG
                      </button>
                    </Link>
                    <Link to="/checkout">
                      <button
                        className="btn text-white ml-3"
                        style={{
                          letterSpacing: "0.43px",
                          backgroundColor: "#384355",
                          fontSize: "12px",
                          fontWeight: "500",
                        }}
                      >
                        BUY NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-md-3 col-md-4 mt-3 d-flex justify-content-center flex-column">
              <div className="product-description">
                <div
                  className="text"
                  style={{
                    fontWeight: "600",
                    fontSize: "12px",
                    letterSpacing: "0.43px",
                  }}
                >
                  DESCRIPTION
                </div>
                <div
                  className="subtext mt-2"
                  style={{ fontSize: "12px", lineHeight: "18px" }}
                >
                  {description}
                </div>
              </div>
              <div className="shipping-details mt-4">
                <div className="d-flex standard-shipment">
                  <img src={shipmentIcon} alt="" />
                  <div className="text-area ml-4" style={{ fontSize: "12px" }}>
                    <div className="text" style={{ fontWeight: "600" }}>
                      Standard shipment
                    </div>
                    <div className="subtext " style={{ fontWeight: "300" }}>
                      Free within 3-6 business days
                    </div>
                  </div>
                </div>
                <div className="d-flex standard-shipment mt-3">
                  <img src={expressDeliveryIcon} alt="" />
                  <div className="text-area ml-4" style={{ fontSize: "12px" }}>
                    <div className="text" style={{ fontWeight: "600" }}>
                      Express delivery
                    </div>
                    <div className="subtext " style={{ fontWeight: "300" }}>
                      ₹ 35.00 shipping charge
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Suggested Product Section */}

        <ProductShowcaseSection showcaseTitle="Suggested For You" />
      </Base>
    </div>
  );
};

export default ProductInfo;
