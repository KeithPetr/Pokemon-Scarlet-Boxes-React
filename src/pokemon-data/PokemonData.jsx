import { useEffect, useState } from "react";

export default function PokemonData() {
  const [pokemonData, setPokemonData] = useState([]);
  const randNum = Math.ceil(Math.random() * 100);
  console.log(randNum);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
        console.log(data);
      });
  }, []);

  console.log(pokemonData);

  return { pokemonData };
}

