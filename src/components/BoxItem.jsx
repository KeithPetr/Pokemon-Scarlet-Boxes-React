import React from "react";

export default function BoxItem({ image }) {
  return (
    <div className="box-item">
      <img className="box-item-image" src={image} alt="Pokemon" />
    </div>
  );
}
