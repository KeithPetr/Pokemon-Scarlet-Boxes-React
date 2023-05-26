import React, { useContext, useEffect, useState } from "react";
import PokemonContext from "../PokemonContext";

export default function MovesList() {
  const { selectedPokemon } = useContext(PokemonContext);
  const moves = selectedPokemon.moves.slice(0, 4);
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

    if (moves.length > 0) {
      moveData();
    }
  }, [selectedPokemon]);

  useEffect(() => {
    console.log(moveArray);
  }, [moveArray]);

  return (
    <div className="move-list">
      {moveArray.length > 0 ? (
        <>
          <div className="move">
            <img className="move-icon" />
            <div className="move-name">{moveArray[0].name}</div>
          </div>
          <div className="move">
            <img className="move-icon" />
            <div className="move-name">{moveArray[1].name}</div>
          </div>
          <div className="move">
            <img className="move-icon" />
            <div className="move-name">{moveArray[2].name}</div>
          </div>
          <div className="move">
            <img className="move-icon" />
            <div className="move-name">{moveArray[3].name}</div>
          </div>
        </>
      ) : (
        <h3>Loading moves...</h3>
      )}
    </div>
  );
}
