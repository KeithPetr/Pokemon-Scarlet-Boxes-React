import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";

export default function BoxItem({ image, pokemon, handleBoxItemClick }) {
  const { droppedPokemon } = useContext(PokemonContext);

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", JSON.stringify(pokemon));
  };

  return (
    <div
      className="box-item"
      onClick={() => handleBoxItemClick(pokemon)}
      draggable="true"
      onDragStart={handleDragStart}
    >
      {droppedPokemon && pokemon.id === droppedPokemon.id ? (
        <div className="box-item-placeholder"></div>
      ) : (
        <img className="box-item-image" src={image} alt="Pokemon" />
      )}
    </div>
  );
}
