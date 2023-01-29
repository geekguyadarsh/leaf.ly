import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const producturl = product ? `${API}/product/photo/${product.imageURL}` : "";
  return <img src={producturl} className="card-img-top" alt="product" />;
};

export default ImageHelper;
