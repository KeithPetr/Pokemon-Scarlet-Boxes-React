import React from "react"
import BoxItem from "./BoxItem"

export default function Boxes() {
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
                <BoxItem />
            </div>
            <div className="box-searches">
                <div className="all-boxes"></div>
                <div className="search"></div>
            </div>
        </section>
    )
}