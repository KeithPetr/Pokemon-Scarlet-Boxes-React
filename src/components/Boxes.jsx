import React from "react";
import BoxItem from "./BoxItem";
import Cube from "../ShapeIcons/cube.png";

export default function Boxes({ data }) {
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
