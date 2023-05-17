import React from "react"
import PartyItem from "./PartyItem"

export default function Party() {
    return (
        <section className="party">
            <div className="party-header">
                <div className="party-pokeball">O</div>
                <div className="party-current-title">Current Party</div>
            </div>
            <PartyItem />
            <PartyItem />
            <PartyItem />
            <PartyItem />
            <PartyItem />
            <PartyItem />
        </section>
    )
}