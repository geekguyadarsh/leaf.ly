import React from "react";

const ProductCard = ({
  imageUrl,
  category = "NA",
  title = "NA",
  price = "NA",
  discount,
}) => {
  return (
    <a id="product-card" href="/product" className="btn text-left" style={{}}>
      <div className="card mt-1" style={{ border: "none" }}>
        <img src={imageUrl} className="card-img-top" alt="product" />
        {discount ? (
          <div
            className="discount"
            style={{
              position: "absolute",
              background: "#FF0080",
              borderRadius: "5px",
              top: "10px",
              left: "10px",
              fontSize: "12px",
              color: "white",
              padding: "1px 6px",
              fontWeight: "600",
            }}
          >
            {discount}
          </div>
        ) : (
          ""
        )}

        <div className="card-body p-1">
          <p
            className="card-text my-1 card-category"
            style={{
              color: "#929292 !important",
              fontSize: "11px",
              fontFamily: "Poppins !important",
              letterSpacing: "0.32px",
              fontWeight: "500",
            }}
          >
            <small className="text-muted">{category.toUpperCase()}</small>
          </p>
          <h5
            className="card-title my-1 card-title"
            style={{
              fontWeight: 600,
              fontFamily: "Poppins !important",
              fontSize: "13px",
              letterSpacing: "0.58px",
              color: "#384355 !important",
              textTransform: "capitalize",
            }}
          >
            {title}
          </h5>
          <p
            className="card-text my-1 card-price"
            style={{
              letterSpacing: "0.58px",
              color: "#000000",
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            ₹ {price}
          </p>
        </div>
      </div>
    </a>
  );
};
export default ProductCard;
