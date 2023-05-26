import React, { createContext, useEffect, useState } from "react";

const PokemonContext = createContext();

export default PokemonContext;

export function PokemonProvider({ children }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [selectedMove, setSelectedMove] = useState(null);

  function handleBoxItemClick(pokemonObj) {
    setSelectedPokemon(pokemonObj);
    setSelectedMove(pokemonObj.moves[0].move.name)
    // console.log(`-----SELECTED MOVE----- ${selectedMove}`)
  }

  useEffect(() => {
    const fetchPokemonData = async () => {
      const uniqueNumbers = new Set();
      const requests = [];

      while (uniqueNumbers.size < 30) {
        const randNum = Math.ceil(Math.random() * 500);

        if (!uniqueNumbers.has(randNum)) {
          uniqueNumbers.add(randNum);
          requests.push(
            fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}`).then((res) =>
              res.json()
            )
          );
        }
      }

      try {
        const responseData = await Promise.all(requests);
        setPokemonData(responseData);
        console.log(responseData);
      } catch (error) {
        console.log("Error occurred while fetching Pokemon data:", error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <PokemonContext.Provider value={{pokemonData, selectedPokemon, selectedMove, handleBoxItemClick}}>
      {children}
    </PokemonContext.Provider>
  );
}