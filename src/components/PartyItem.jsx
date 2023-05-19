import React from "react";

export default function PartyItem() {
const imgURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png"

  return (
    <div className="party-component">
      <div className="party-details">
        <div className="party-poke-level">Lv. 100</div>
        <div className="party-poke-name">Dragonite</div>
      </div>
      <img className="party-poke-image" src={imgURL}/>
    </div>
  );
}
