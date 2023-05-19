import React, { useEffect, useState } from "react";

export default function BoxItem() {
  const [pokemonImage, setPokemonData] = useState([]);
  const randNum = Math.ceil(Math.random() * 100);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data.sprites.other["official-artwork"].front_default);
        console.log();
      });
  }, []);

  console.log(pokemonImage)

  return (
    <div className="box-item">
        <img className="box-item-image" src={`${pokemonImage}`}/>
    </div>
  );
}
