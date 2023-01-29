import React, { useState } from "react";
import DropIcon from "../../assets/dropdown-icon.svg";

const ColorFilter = ({ filterType }) => {
  const [colors, setColors] = useState([
    "red",
    "yellow",
    "green",
    "grey",
    "blue",
    "black",
    "white",
  ]);

  const isActive = (active) => {
    if (active) {
      return "2px solid #384355";
    } else {
      return "none";
    }
  };

  const ColorIcon = ({ color }) => {
    const [active, setActive] = useState(false);

    const handleColorChange = (event) => {
      event.preventDefault();
      setActive(!active);
    };

    return (
      <span
        type="btn"
        onClick={handleColorChange}
        className="py-1 px-2 m-1 btn ml-1"
        style={{
          backgroundColor: `${color}`,
          height: "24px",
          width: "24px",
          borderRadius: "50%",
          border: isActive(active),
        }}
      ></span>
    );
  };

  return (
    <div
      id="FilterCollection"
      className="mt-4"
      style={{ border: "1px solid #EEEEEE", borderRadius: "4px" }}
    >
      <div
        className="d-flex justify-content-between btn"
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
          {colors.map((color, i) => {
            return (
              <div key={i}>
                <ColorIcon color={color} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ColorFilter;
