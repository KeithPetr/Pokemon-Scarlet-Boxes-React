import React, { useContext, useState } from "react";
import BoxItem from "./BoxItem";
import Cube from "../ShapeIcons/cube.png";
import PokemonContext from "../PokemonContext";

export default function Boxes() {
  const { pokemonData, handleBoxItemClick } = useContext(PokemonContext);

  function createBoxItems() {
    return pokemonData.map((pokemon) => {
      return (
        <BoxItem
          key={pokemon.id}
          image={pokemon.sprites.other["official-artwork"].front_default}
          handleBoxItemClick={handleBoxItemClick}
          pokemon={pokemon}
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
            <img src={Cube} />
          </div>
          <div className="box-number">Box 1</div>
        </div>
        <div className="right-trigger">R</div>
      </div>
      <div className="box-grid">{createBoxItems()}</div>
    </section>
  );
}
