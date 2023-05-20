import React from "react"
import UltraBall from "../PokemonIcons/ultra-ball.png"

export default function Stats() {
    return (
        <div className="stats">
            <div>
                <img className="ultra-ball" src={UltraBall}/>
                <h2>Charmander</h2>
                <div className="poke-level">Lv. 100</div>
                <img/>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}