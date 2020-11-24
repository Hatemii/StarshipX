import React, { Component } from "react"
import logo from "./images/logo_light.png"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import AllLaunches from "./components/Rockets/AllLaunches"
import LaunchDetails from "./components/Rockets/LaunchDetails"
import Navbar from "./components/navbar/Navbar"
import space from "./images/space.jpg"

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div>

        <header>
          <img src={space} style={{
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}></img>
          <h2>This is header</h2>
        </header>



        <ApolloProvider client={client} >
          <Router>

            <Link to={"/"}>
              <img src={logo} alt="spacex" style={{ width: "300px", display: "block", margin: "auto", marginTop: "50px" }} />
            </Link>

            <div className="container" style={{
              textAlign: "center",
              alignItems: "center"
            }}>

              <Route exact path="/" component={AllLaunches} />
              <Route exact path="/launch/:flight_number" component={LaunchDetails} />
            </div>


          </Router>
        </ApolloProvider >

      </div>
    );
  }
}

export default App;
