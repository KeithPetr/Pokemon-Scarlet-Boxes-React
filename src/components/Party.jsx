import React, { useContext, useState } from "react";
import PartyItem from "./PartyItem";

export default function Party() {
  const [partyPokemon, setPartyPokemon] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();

    // Get the Pokémon data from the dropped data
    const droppedPokemon = JSON.parse(event.dataTransfer.getData("text/plain"));

    // Add the dropped Pokémon to the party
    if (partyPokemon.length < 6) {
      setPartyPokemon([...partyPokemon, droppedPokemon]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const renderPartyPokemon = () => {
    const blankPartyItems = Array.from({ length: 6 - partyPokemon.length }, (_, index) => index);

    return (
      <>
        {partyPokemon.map((pokemon) => (
          <PartyItem key={pokemon.id} pokemon={pokemon} />
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
