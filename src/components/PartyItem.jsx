import React from "react";

export default function PartyItem({ pokemon }) {
  return (
    <div className="party-component">
      <div className="party-details">
        <div className="poke-level">Lv. 100</div>
        <div className="party-poke-name">{pokemon.species.name}</div>
      </div>
      <img className="party-poke-image" src={pokemon.sprites.front_default} alt={pokemon.species.name} />
    </div>
  );
}
