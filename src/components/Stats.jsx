import React from "react";
import UltraBall from "../PokemonIcons/ultra-ball.png";
import Male from "../PokemonIcons/male.png";
import Revive from "../PokemonIcons/revive.png"

export default function Stats() {
  return (
    <div className="stats">
      <div className="stats-header">
        <div className="ball-h2">
          <img className="ultra-ball" src={UltraBall} />
          <h2 className="stats-h2">Charmander</h2>
        </div>
        <div className="level-gender">
          <div className="poke-level">Lv. 100</div>
          <img className="gender-icon" src={Male} />
        </div>
      </div>
      <div className="poke-number">
        <div className="index-number">No. 166</div>
        <h3>Charmander</h3>
        <img className="revive" src={Revive} />
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
