import React from "react";
import BoxItem from "./BoxItem";

export default function Boxes() {
  function createBoxItems() {
    const boxItems = [];
    for (let i = 0; i < 30; i++) {
      boxItems.push(<BoxItem key={i} />);
    }
    return boxItems;
  }

  return (
    <section className="boxes">
      <div className="boxes-header">
        <div className="left-trigger">L</div>
        <div className="box-info">
          <div className="box-icon">Q</div>
          <div className="box-number">Box 1</div>
        </div>
        <div className="right-trigger">R</div>
      </div>
      <div className="box-grid">
        {createBoxItems()}
      </div>
    </section>
  );
}
