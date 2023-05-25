import React, { useContext } from "react";
import UltraBall from "../PokemonIcons/ultra-ball.png";
import Male from "../PokemonIcons/male.png";
import Revive from "../PokemonIcons/revive.png";
import Fire from "../PokemonIcons/fire.svg";
import Psychic from "../PokemonIcons/psychic.svg";
import Ghost from "../PokemonIcons/ghost.svg";
import Circle from "../ShapeIcons/circle.png";
import Heart from "../ShapeIcons/heart.png";
import Kite from "../ShapeIcons/kite.png";
import Square from "../ShapeIcons/square.png";
import Star from "../ShapeIcons/star.png";
import Triangle from "../ShapeIcons/triangle.png";
import PokemonContext from "../PokemonContext";

export default function Stats() {
  const { selectedPokemon } = useContext(PokemonContext);
  console.log(selectedPokemon);

  if (!selectedPokemon) {
    // Render blank elements or a loading indicator
    return (
      <div className="stats">
        <h1>Blank</h1>
      </div>
    );
  }

  function typeTwo() {
    if (selectedPokemon.types.length > 1) {
      return (
        <div className="type">
          <img className="type-icon" src={Psychic} />
          <div className="type-name">{selectedPokemon.types[1].type.name}</div>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="stats">
      <div className="stats-header">
        <div className="ball-h2">
          <img className="ultra-ball" src={UltraBall} />
          <h2 className="stats-h2">{selectedPokemon.species.name}</h2>
        </div>
        <div className="level-gender">
          <div className="poke-level">Lv. 100</div>
          <img className="gender-icon" src={Male} />
        </div>
      </div>
      <div className="poke-number">
        <div className="index-number">No. {selectedPokemon.id}</div>
        <h3>{selectedPokemon.species.name}</h3>
        <img className="revive" src={Revive} />
      </div>
      <div className="type-header">
        <div className="type">
          <img className="type-icon" src={Fire} />
          <div className="type-name">{selectedPokemon.types[0].type.name}</div>
        </div>
        {typeTwo()}
        <div className="type">
          <img className="type-icon" src={Ghost} />
          <div className="type-name">Ghost</div>
        </div>
      </div>
      <div className="base-stats">
        <div className="hp">
          <div>
            HP {selectedPokemon.stats[0].base_stat}/
            {selectedPokemon.stats[0].base_stat}
          </div>
        </div>
        <div className="attack-stats">
          <div className="special-attack">
            <div>Sp. Attack</div>
            <div>{selectedPokemon.stats[3].base_stat}</div>
          </div>
          <div className="attack">
            <div>Attack</div>
            <div>{selectedPokemon.stats[1].base_stat}</div>
          </div>
        </div>
        <div className="defense-stats">
          <div className="special-defense">
            <div>Sp. Defense</div>
            <div>{selectedPokemon.stats[4].base_stat}</div>
          </div>
          <div className="defense">
            <div>Defense</div>
            <div>{selectedPokemon.stats[2].base_stat}</div>
          </div>
        </div>
        <div className="speed">
          <div>Speed {selectedPokemon.stats[5].base_stat}</div>
        </div>
      </div>
      <div className="ability">
        <div className="ability-title">Ability</div>
        <div className="ability-name">
          {selectedPokemon.abilities[0].ability.name}
        </div>
      </div>
      <div className="held-item">
        <div className="held-item-title">Held Item</div>
        <div className="held-item-name"> -- </div>
      </div>
      <div className="move-list">
        <div className="move">
          <img className="move-icon" src={Fire} />
          <div className="move-name">{selectedPokemon.moves[0].move.name}</div>
        </div>
        <div className="move">
          <img className="move-icon" src={Fire} />
          <div className="move-name">{selectedPokemon.moves[1].move.name}</div>
        </div>
        <div className="move">
          <img className="move-icon" src={Fire} />
          <div className="move-name">{selectedPokemon.moves[2].move.name}</div>
        </div>
        <div className="move">
          <img className="move-icon" src={Fire} />
          <div className="move-name">{selectedPokemon.moves[3].move.name}</div>
        </div>
      </div>
      <div className="all-shapes">
        <img className="shape" src={Circle} />
        <img className="shape" src={Triangle} />
        <img className="shape" src={Square} />
        <img className="shape" src={Heart} />
        <img className="shape" src={Star} />
        <img className="shape" src={Kite} />
      </div>
    </div>
  );
}
