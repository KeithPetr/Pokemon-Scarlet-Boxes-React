import React from "react";

export default function PartyItem({ pokemon, handleBoxItemClick }) {
  return (
    <div className="party-item">
      {pokemon ? (
        <div className="party-component" onClick={() => handleBoxItemClick(pokemon)}>
          <div className="party-details">
            <div className="poke-level">Lv. 100</div>
            <div className="party-poke-name">{pokemon.species.name}</div>
          </div>
          <img
            className="party-poke-image"
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.species.name}
          />
        </div>
      ) : (
        <div className="party-component">
          <div className="party-details"></div>
        </div>
      )}
    </div>
  );
}
