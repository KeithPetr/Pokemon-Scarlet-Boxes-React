import React from "react";

export default function BoxItem({ image, pokemon, handleBoxItemClick }) {
  return (
    <div className="box-item" onClick={() => handleBoxItemClick(pokemon)}>
      <img className="box-item-image" src={image} alt="Pokemon" />
    </div>
  );
}
