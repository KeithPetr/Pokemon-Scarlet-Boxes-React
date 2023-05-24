import React from "react";
import Search from "../ShapeIcons/magnifying-glass.png";
import Boxes from "../ShapeIcons/boxes.png";

export default function SearchInputs() {
  return (
    <div className="search-inputs">
      <div className="all-boxes">
        <div className="boxes-icon">
          <img src={Boxes} />
        </div>
        <p>All Boxes</p>
      </div>
      <div className="search">
        <div className="magnifying-glass">
          <img src={Search} />
        </div>
        <p>Search</p>
      </div>
    </div>
  );
}
