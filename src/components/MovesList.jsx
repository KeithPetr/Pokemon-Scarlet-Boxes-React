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
          // Handle the fetched move data here

          console.log(data);
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

  return null; // Placeholder return statement, adjust as needed
}
