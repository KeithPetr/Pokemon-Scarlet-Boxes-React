import React, { createContext, useEffect, useState } from "react";

const PokemonContext = createContext();

export default PokemonContext;

export function PokemonProvider({ children }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  function handleBoxItemClick(pokemonObj) {
    setSelectedPokemon(pokemonObj);
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
    <PokemonContext.Provider value={{pokemonData, selectedPokemon, handleBoxItemClick}}>
      {children}
    </PokemonContext.Provider>
  );
}