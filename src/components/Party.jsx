import React, { useContext, useState } from "react";
import PartyItem from "./PartyItem";
import PokemonContext from "../PokemonContext";

export default function Party() {
  const { pokemonData, handleBoxItemClick } = useContext(PokemonContext);
  const [partyPokemon, setPartyPokemon] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
  
    // Get the Pokémon data from the dropped data
    const droppedPokemon = JSON.parse(event.dataTransfer.getData("text/plain"));
  
    // Add the dropped Pokémon to the party
    setPartyPokemon([...partyPokemon, droppedPokemon]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const renderPartyPokemon = () => {
    return partyPokemon.map((pokemon) => (
      <PartyItem key={pokemon.id} pokemon={pokemon} />
    ));
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
