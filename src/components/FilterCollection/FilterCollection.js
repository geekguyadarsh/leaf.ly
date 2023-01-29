import React from "react";
import DropIcon from "../../assets/dropdown-icon.svg";
import "./FilterCollection.css";

const FilterCollection = ({ filterType, filters }) => {
  return (
    <div
      id="FilterCollection"
      className="mt-4 FilterCollection"
      style={{ border: "1px solid #EEEEEE", borderRadius: "4px" }}
    >
      <div
        className="d-flex justify-content-between btn ml-1"
        type="button"
        data-toggle="collapse"
        data-target={`#filter${filterType}`}
        aria-expanded="false"
        aria-controls={`filter${filterType}`}
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
      {filters.map((filter, i) => {
        return (
          <div
            key={i}
            id={`filter${filterType}`}
            className="collapse show mx-2 my-2"
          >
            <div className="form-check ml-2">
              <input
                className="form-check-input largerCheckbox"
                type="checkbox"
                value={filter}
                id={`${filter}`}
              />
              <label
                className="form-check-label my-1 ml-1 largerCheckbox-label"
                htmlhtmlFor={`${filter}`}
              >
                {filter}
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FilterCollection;
