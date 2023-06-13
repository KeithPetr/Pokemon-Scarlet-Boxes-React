import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";

export default function BoxItem({ image, pokemon, handleBoxItemClick }) {
  const { droppedPokemon } = useContext(PokemonContext);

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", JSON.stringify(pokemon));
    setBoxPokemon((prevBoxPokemon) => prevBoxPokemon.filter((p) => p.id !== pokemon.id));
  };

  const isPokemonDropped = droppedPokemon.some((p) => p.id === pokemon.id);

  return (
    <div
      className="box-item"
      onClick={() => handleBoxItemClick(pokemon)}
      draggable="true"
      onDragStart={handleDragStart}
    >
      {isPokemonDropped ? (
        <div className="box-item-placeholder">Blank</div>
      ) : (
        <img className="box-item-image" src={image} alt="Pokemon" />
      )}
    </div>
  );
}
