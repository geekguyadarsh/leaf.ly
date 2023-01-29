import React, { useState } from "react";
import DropIcon from "../../assets/dropdown-icon.svg";

const ButtonFilter = ({ filterType }) => {
  const [discounts, setDiscounts] = useState([60, 50, 40, 30, 20]);

  return (
    <div
      id="FilterCollection"
      className="mt-4"
      style={{ border: "1px solid #EEEEEE", borderRadius: "4px" }}
    >
      <div
        className="d-flex justify-content-between btn ml-1"
        type="button"
        data-toggle="collapse"
        data-target={`#filter${2}`}
        aria-expanded="false"
        aria-controls={`filter${2}`}
      >
        <div
          style={{
            textTransform: "uppercase",
            fontSize: "12px",
            fontFamily: "Poppins",
            fontWeight: "600",
            letterSpacing: "1.08px",
          }}
        >
          {filterType}
        </div>
        <img src={DropIcon} alt="" />
      </div>
      <div id={`filter${2}`} className="collapse show m-2">
        <div className="d-flex flex-wrap justify-content-center">
          {discounts.map((discount, i) => {
            return (
              <span
                key={i}
                className="py-1 px-2 rounded m-1 btn"
                style={{
                  backgroundColor: "#FFFFFF",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                  border: "1px solid #EEEEEE",
                }}
              >
                {discount}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ButtonFilter;
