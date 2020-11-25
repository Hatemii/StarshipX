import React, { Component } from "react"
import { Link } from "react-router-dom"

class Ship extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h2>Ship class</h2>

                <button><Link to="/">Home</Link></button>
            </div>
        );
    }
}

export default Ship;