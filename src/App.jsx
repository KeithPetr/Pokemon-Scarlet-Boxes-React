import React, { useState, useEffect } from "react";
import Boxes from "./components/Boxes";
import SearchInputs from "./components/SearchInputs";
import Header from "./components/Header";
import Party from "./components/Party";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import { PokemonProvider } from "./PokemonContext";

export default function App() {

  return (
    <PokemonProvider>
      <div className="app-layout">
        <div className="app-row">
          <div className="pokemon-side">
            <Header />
            <div className="pokemon-items">
              <Party />
              <div className="pokemon-grid">
                <Boxes />
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
    </PokemonProvider>
  );
}
