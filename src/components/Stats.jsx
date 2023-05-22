import React from "react";
import UltraBall from "../PokemonIcons/ultra-ball.png";
import Male from "../PokemonIcons/male.png";
import Revive from "../PokemonIcons/revive.png";
import Fire from "../PokemonIcons/fire.svg";
import Psychic from "../PokemonIcons/psychic.svg";
import Ghost from "../PokemonIcons/ghost.svg";

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
      <div className="type-header">
        <div className="type">
          <img className="type-icon" src={Fire} />
          <div className="type-name">Fire</div>
        </div>
        <div className="type">
          <img className="type-icon" src={Psychic} />
          <div className="type-name">Psychic</div>
        </div>
        <div className="type">
          <img className="type-icon" src={Ghost} />
          <div className="type-name">Ghost</div>
        </div>
      </div>
      <div className="base-stats">
        <div className="hp">
          <div>HP 100/100</div>
        </div>
        <div className="attack-stats">
          <div className="special-attack">
            <div>Sp. Attack</div>
            <div>100</div>
          </div>
          <div className="attack">
            <div>Attack</div>
            <div>100</div>
          </div>
        </div>
        <div className="defense-stats">
          <div className="special-defense">
            <div>Sp. Defense</div>
            <div>100</div>
          </div>
          <div className="defense">
            <div>Defense</div>
            <div>100</div>
          </div>
        </div>
        <div className="speed">
          <div>Speed 100</div>
        </div>
      </div>
      <div className="ability">
        <div className="ability-title">Ability</div>
        <div className="ability-name">Weak Armor</div>
      </div>
      <div className="held-item">
        <div className="held-item-title">Held Item</div>
        <div className="held-item-name"> -- </div>
      </div>
      <div className="move-list">
        <div className="move">
            <img className="move-icon" src={Fire}/>
            <div className="move-name">Flamethrower</div>
        </div>
        <div className="move">
            <img className="move-icon" src={Fire}/>
            <div className="move-name">Flamethrower</div>
        </div>
        <div className="move">
            <img className="move-icon" src={Fire}/>
            <div className="move-name">Flamethrower</div>
        </div>
        <div className="move">
            <img className="move-icon" src={Fire}/>
            <div className="move-name">Flamethrower</div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
