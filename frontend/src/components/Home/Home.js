import React, { Component } from 'react'
import "./HomeStyle.css"

export default class Home extends Component {
    render() {
        return (
            <div>
                <header>
                    <div style={{ margin: "auto", fontFamily: "Libre Baskerville" }}>
                        <h2>Welcome to SpaceX</h2>
                        <p>Launching Stats</p>
                    </div>
                </header>
            </div>
        )
    }
}
