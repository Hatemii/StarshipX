import React, { Component } from "react";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav class="navbar navbar-dark bg-dark">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Rockets</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Ships</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;