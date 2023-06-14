import React, { useContext, useEffect, useState } from "react";
import BoxItem from "./BoxItem";
import Cube from "../ShapeIcons/cube.png";
import PokemonContext from "../PokemonContext";

export default function Boxes() {
  const { pokemonData, handleBoxItemClick, droppedPokemon } = useContext(PokemonContext);
  const [boxPokemon, setBoxPokemon] = useState([]);

  useEffect(() => {
    // Set the initial boxPokemon state when pokemonData is available
    setBoxPokemon(pokemonData);
  }, [pokemonData]);

  useEffect(() => {
    // Update the boxPokemon state when droppedPokemon changes
    if (droppedPokemon) {
      setBoxPokemon((prevBoxPokemon) => {
        const updatedBoxPokemon = prevBoxPokemon.map((pokemon) => {
          if (pokemon.id === droppedPokemon.id) {
            // Create a copy of the Pokémon object without the sprites
            return { ...pokemon};
          }
          return pokemon;
        });

        return updatedBoxPokemon;
      });
    }
  }, [droppedPokemon]);

  function createBoxItems() {
    return boxPokemon.map((pokemon) => {
      const image = pokemon.sprites
        ? pokemon.sprites.other["official-artwork"].front_default
        : null;

      return (
        <BoxItem
          key={pokemon.id}
          image={image}
          handleBoxItemClick={handleBoxItemClick}
          pokemon={pokemon}
          droppedPokemon={droppedPokemon}
        />
      );
    });
  }

  return (
    <section className="boxes">
      <div className="boxes-header">
        <div className="left-trigger">L</div>
        <div className="box-info">
          <div className="cube-icon">
            <img src={Cube} alt="Cube" />
          </div>
          <div className="box-number">Box 1</div>
        </div>
        <div className="right-trigger">R</div>
      </div>
      <div className="box-grid">{createBoxItems()}</div>
    </section>
  );
}
