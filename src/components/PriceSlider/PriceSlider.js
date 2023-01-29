import React, { useState } from "react";
import { Slider } from "@material-ui/core";
import DropIcon from "../../assets/dropdown-icon.svg";

const PriceSlider = () => {
  const [priceRange, setPriceRange] = useState([1000, 20000]);
  const [filterRange, setFilterRange] = useState([
    priceRange[0],
    priceRange[1],
  ]);

  const handleChange = (event, value) => {
    event.preventDefault();

    setFilterRange(value);
  };

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
        data-target={`#filter${1}`}
        aria-expanded="false"
        aria-controls={`filter${1}`}
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
          Price Range
        </div>
        <img src={DropIcon} alt="" />
      </div>
      <div id={`filter${1}`} className="collapse show m-2">
        <div className="d-flex justify-content-between">
          <span
            className="py-1 px-3 rounded"
            style={{
              backgroundColor: "#EEEEEE",
              fontFamily: "Poppins",
              fontSize: "11px",
            }}
          >
            ₹ {filterRange[0]}
          </span>
          <span
            className="py-1 px-3 rounded"
            style={{
              backgroundColor: "#EEEEEE",
              fontFamily: "Poppins",
              fontSize: "11px",
            }}
          >
            ₹ {filterRange[1]}
          </span>
        </div>
        <div className="m-2">
          <Slider
            value={filterRange}
            min={priceRange[0]}
            max={priceRange[1]}
            valueLabelDisplay="auto"
            onChange={handleChange}
            aria-labelledby="range-slider"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
