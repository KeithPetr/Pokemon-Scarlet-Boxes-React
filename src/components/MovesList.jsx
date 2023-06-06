import React, { useContext, useEffect, useState } from "react";
import PokemonContext from "../PokemonContext";

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

export default function MovesList() {
  const { selectedPokemon } = useContext(PokemonContext);
  let moves = [];
  const availableMoves = [...selectedPokemon.moves];

  for (let i = 0; i < 4; i++) {
    if (availableMoves.length > 0) {
      const randNum = Math.floor(Math.random() * availableMoves.length);
      const selectedMove = availableMoves.splice(randNum, 1)[0];
      moves.push(selectedMove);
    }
  }
  const [moveArray, setMoveArray] = useState([]);

  useEffect(() => {
    async function moveData() {
      try {
        const movePromises = moves.map(async (move) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/move/${move.move.name}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          return data;
        });

        const fetchedMoves = await Promise.all(movePromises);
        setMoveArray(fetchedMoves);
      } catch (error) {
        console.log("Error occurred during fetch request:", error);
      }
    }
    moveData();
  }, [selectedPokemon]);

  useEffect(() => {
    console.log(moveArray);
  }, [moveArray]);

  function renderTypes(move) {
    let backgroundColor = "";
    let typeIcon = "";

    switch (move.type.name) {
      case "psychic":
        backgroundColor = "pink";
        typeIcon = psychic;
        break;
      case "grass":
        backgroundColor = "green";
        typeIcon = grass;
        break;
      case "bug":
        backgroundColor = "yellowgreen";
        typeIcon = bug;
        break;
      case "fire":
        backgroundColor = "red";
        typeIcon = fire;
        break;
      case "water":
        backgroundColor = "blue";
        typeIcon = water;
        break;
      case "dark":
        backgroundColor = "purple";
        typeIcon = dark;
        break;
      case "dragon":
        backgroundColor = "orange";
        typeIcon = dragon;
        break;
      case "electric":
        backgroundColor = "yellow";
        typeIcon = electric;
        break;
      case "fairy":
        backgroundColor = "palevioletred";
        typeIcon = fairy;
        break;
      case "fighting":
        backgroundColor = "burlywood";
        typeIcon = fighting;
        break;
      case "flying":
        backgroundColor = "whitesmoke";
        typeIcon = flying;
        break;
      case "ground":
        backgroundColor = "brown";
        typeIcon = ground;
        break;
      case "ice":
        backgroundColor = "lightblue";
        typeIcon = ice;
        break;
      case "normal":
        backgroundColor = "#ccccb3";
        typeIcon = normal;
        break;
      case "poison":
        backgroundColor = "plum";
        typeIcon = poison;
        break;
      case "rock":
        backgroundColor = "gray";
        typeIcon = rock;
        break;
      case "steel":
        backgroundColor = "silver";
        typeIcon = steel;
        break;
      case "ghost":
        backgroundColor = "darkmagenta";
        typeIcon = ghost;
        break;
      default:
        backgroundColor = "white";
        typeIcon = "";
    }

    return {
      backgroundColor,
      typeIcon,
    };
  }

  function renderMoves() {
    return moveArray.map((move) => {
      const { backgroundColor, typeIcon } = renderTypes(move);
      return (
        <div className="move" key={move.id}>
          <img
            className="move-icon"
            src={typeIcon}
            style={{ backgroundColor: backgroundColor }}
            alt={move.type.name}
          />
          <div className="move-name">{move.name}</div>
        </div>
      );
    });
  }

  return (
    <div className="move-list">
      {moveArray.length > 0 ? <>{renderMoves()}</> : <h3>Loading moves...</h3>}
    </div>
  );
}
