import React from "react";

export default function Header() {
  return (
    <header>
      <ul className="nav-bar-top">
      <div className="x-border-right"><li className="x-button">X</li></div>
        <li className="nav-party">Party and Boxes</li>
        <li className="nav-held">Held Items</li>
        <li className="nav-battle">Battle Teams</li>
      </ul>
    </header>
  );
}
