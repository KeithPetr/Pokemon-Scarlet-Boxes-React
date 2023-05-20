import React from "react";
import BoxItem from "./BoxItem";

export default function Boxes({ data }) {
  // const image = data?.sprites?.other?.["official-artwork"]?.front_default;

  function createBoxItems() {
    return data.slice(0, 30).map((pokemon) => {
      return (
        <BoxItem
          key={pokemon.id}
          image={pokemon.sprites.other["official-artwork"].front_default}
        />
      );
    });
  }

  return (
    <section className="boxes">
      <div className="boxes-header">
        <div className="left-trigger">L</div>
        <div className="box-info">
          <div className="box-icon">Q</div>
          <div className="box-number">Box 1</div>
        </div>
        <div className="right-trigger">R</div>
      </div>
      <div className="box-grid">{createBoxItems()}</div>
    </section>
  );
}
