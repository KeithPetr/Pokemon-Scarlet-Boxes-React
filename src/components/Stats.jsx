import React, { useContext } from "react";
import UltraBall from "../PokemonIcons/ultra-ball.png";
import Male from "../PokemonIcons/male.png";
import Revive from "../PokemonIcons/revive.png";
import fire from "../PokemonIcons/fire.svg";
import psychic from "../PokemonIcons/psychic.svg";
import bug from "../PokemonIcons/bug.svg";
import dark from "../PokemonIcons/dark.svg";
import dragon from "../PokemonIcons/dragon.svg";
import electric from "../PokemonIcons/electric.svg";
import fighting from "../PokemonIcons/fighting.svg";
import fairy from "../PokemonIcons/fairy.svg";
import flying from "../PokemonIcons/flying.svg";
import ghost from "../PokemonIcons/ghost.svg";
import grass from "../PokemonIcons/grass.svg";
import ground from "../PokemonIcons/ground.svg";
import ice from "../PokemonIcons/ice.svg";
import normal from "../PokemonIcons/normal.svg";
import poison from "../PokemonIcons/poison.svg";
import rock from "../PokemonIcons/rock.svg";
import steel from "../PokemonIcons/steel.svg";
import water from "../PokemonIcons/water.svg";

import Circle from "../ShapeIcons/circle.png";
import Heart from "../ShapeIcons/heart.png";
import Kite from "../ShapeIcons/kite.png";
import Square from "../ShapeIcons/square.png";
import Star from "../ShapeIcons/star.png";
import Triangle from "../ShapeIcons/triangle.png";
import PokemonContext from "../PokemonContext";
import MovesList from "./MovesList";

export default function Stats() {
  const { selectedPokemon, droppedPokemon } = useContext(PokemonContext);
  console.log(selectedPokemon);

  if (!selectedPokemon) {
    return (
      <div className="stats">Blank</div>
    );
  }

  function getTypeStyle(type) {
    let backgroundColor = "";
    let typeIcon = "";

    if (type === "psychic") {
      backgroundColor = "pink";
      typeIcon = psychic;
    } else if (type === "grass") {
      backgroundColor = "green";
      typeIcon = grass;
    } else if (type === "bug") {
      backgroundColor = "yellowgreen";
      typeIcon = bug;
    } else if (type === "fire") {
      backgroundColor = "red";
      typeIcon = fire;
    } else if (type === "water") {
      backgroundColor = "blue";
      typeIcon = water;
    } else if (type === "dark") {
      backgroundColor = "purple";
      typeIcon = dark;
    } else if (type === "dragon") {
      backgroundColor = "orange";
      typeIcon = dragon;
    } else if (type === "electric") {
      backgroundColor = "yellow";
      typeIcon = electric;
    } else if (type === "fairy") {
      backgroundColor = "palevioletred";
      typeIcon = fairy;
    } else if (type === "fighting") {
      backgroundColor = "burlywood";
      typeIcon = fighting;
    } else if (type === "flying") {
      backgroundColor = "whitesmoke";
      typeIcon = flying;
    } else if (type === "ground") {
      backgroundColor = "brown";
      typeIcon = ground;
    } else if (type === "ice") {
      backgroundColor = "lightblue";
      typeIcon = ice;
    } else if (type === "normal") {
      backgroundColor = "#ccccb3";
      typeIcon = normal;
    } else if (type === "poison") {
      backgroundColor = "plum";
      typeIcon = poison;
    } else if (type === "rock") {
      backgroundColor = "gray";
      typeIcon = rock;
    } else if (type === "steel") {
      backgroundColor = "silver";
      typeIcon = steel;
    } else if (type === "ghost") {
      backgroundColor = "darkmagenta";
      typeIcon = ghost;
    }

    return {
      backgroundColor,
      typeIcon,
    };
  }

  function renderTypes() {
    const typeOne = selectedPokemon.types[0].type.name;
    const typeOneStyle = getTypeStyle(typeOne);

    if (selectedPokemon.types.length > 1) {
      const typeTwo = selectedPokemon.types[1].type.name;
      const typeTwoStyle = getTypeStyle(typeTwo);

      return (
        <>
          <div
            className="type"
            style={{ backgroundColor: typeOneStyle.backgroundColor }}
          >
            <img
              className="type-icon"
              src={typeOneStyle.typeIcon}
              alt={typeOne}
            />
            <div className="type-name">{typeOne}</div>
          </div>
          <div
            className="type"
            style={{ backgroundColor: typeTwoStyle.backgroundColor }}
          >
            <img
              className="type-icon"
              src={typeTwoStyle.typeIcon}
              alt={typeTwo}
            />
            <div className="type-name">{typeTwo}</div>
          </div>
        </>
      );
    } else {
      return (
        <div
          className="type"
          style={{ backgroundColor: typeOneStyle.backgroundColor }}
        >
          <img
            className="type-icon"
            src={typeOneStyle.typeIcon}
            alt={typeOne}
          />
          <div className="type-name">{typeOne}</div>
        </div>
      );
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
        {renderTypes()}
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
      <MovesList />
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
