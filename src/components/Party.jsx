import React, { useState, useContext } from "react";
import PartyItem from "./PartyItem";
import PokemonContext from "../PokemonContext";

export default function Party() {
  const {partyPokemon, handleDrop, handleBoxItemClick} = useContext(PokemonContext)

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const renderPartyPokemon = () => {
    const blankPartyItems = Array.from({ length: 6 - partyPokemon.length }, (_, index) => index);

    return (
      <>
        {partyPokemon.map((pokemon) => (
          <PartyItem key={pokemon.id} pokemon={pokemon} handleBoxItemClick={handleBoxItemClick}/>
        ))}
        {blankPartyItems.map((index) => (
          <PartyItem key={index} pokemon={null} />
        ))}
      </>
    );
  };

  return (
    <section className="party" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="party-header">
        <div className="party-pokeball">O</div>
        <div className="party-current-title">Current Party</div>
      </div>
      {renderPartyPokemon()}
    </section>
  );
}
