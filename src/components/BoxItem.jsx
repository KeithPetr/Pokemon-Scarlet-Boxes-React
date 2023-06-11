import React from "react";

export default function BoxItem({ image, pokemon, handleBoxItemClick }) {
  const handleDragStart = (event) => {
    // Set the data being dragged as the stringified Pokémon data
    event.dataTransfer.setData("text/plain", JSON.stringify(pokemon));
  };

  return (
    <div
      className="box-item"
      onClick={() => handleBoxItemClick(pokemon)}
      draggable="true"
      onDragStart={handleDragStart}
    >
      <img className="box-item-image" src={image} alt="Pokemon" />
    </div>
  );
}
