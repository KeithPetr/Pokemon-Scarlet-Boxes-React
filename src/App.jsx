import { useState } from "react";
import Boxes from "./components/Boxes";
import SearchInputs from "./components/SearchInputs";
import Header from "./components/Header";
import Party from "./components/Party";
import Stats from "./components/Stats";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-layout">
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
  );
}
