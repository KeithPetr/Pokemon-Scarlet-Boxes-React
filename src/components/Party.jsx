import React from "react"
import PartyComponent from "./PartyComponent"

export default function Party() {
    return (
        <section className="party">
            <div className="party-header">
                <div className="party-pokeball">O</div>
                <div className="party-current-title">Current Party</div>
            </div>
            <PartyComponent />
            <PartyComponent />
            <PartyComponent />
            <PartyComponent />
            <PartyComponent />
            <PartyComponent />
        </section>
    )
}