import React, { useState, useEffect } from "react";
import Boxes from "./components/Boxes";
import SearchInputs from "./components/SearchInputs";
import Header from "./components/Header";
import Party from "./components/Party";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

export default function App() {
  const [pokemonData, setPokemonData] = useState([]);

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
    <div className="app-layout">
      <div className="app-row">
        <div className="pokemon-side">
          <Header />
          <div className="pokemon-items">
            <Party />
            <div className="pokemon-grid">
              <Boxes data={pokemonData} />
              <SearchInputs />
            </div>
          </div>
        </div>
        <div className="stats-side">
          <Stats />
        </div>
      </div>
      <Footer />
    </div>
  );
}
