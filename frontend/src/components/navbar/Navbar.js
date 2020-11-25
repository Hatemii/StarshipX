import React, { Component } from "react";
import "./Navbar.css"
import white from "../../images/white.png"
import { BrowserRouter as Router, Link } from "react-router-dom"

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Router>
                <div className="nav">

                    <a href="/"><img src={white} alt="spacex" ></img></a>

                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/rockets">ROCKETS</a></li>
                        <li><a href="/ships">SHIPS</a></li>
                    </ul>

                </div>
            </Router>
        );
    }
}

export default Navbar;