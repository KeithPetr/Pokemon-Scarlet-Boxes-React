import React, { useEffect, useState } from "react";

export default function BoxItem() {
  const [pokemonData, setPokemonData] = useState([]);
  const randNum = Math.ceil(Math.random() * 5);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
        console.log(data.sprites.other);
      });
  }, []);

  return (
    <div className="box-item"></div>
  );
}
