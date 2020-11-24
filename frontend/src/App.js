import React, { Component } from "react"
import logo from "./images/logo_light.png"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AllLaunches from "./components/Rockets/AllLaunches"
import LaunchDetails from "./components/Rockets/LaunchDetails"
import Navbar from "./components/navbar/Navbar"


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

        <ApolloProvider client={client} >

          <img src={logo} alt="spacex" style={{ width: "300px", display: "block", margin: "auto", marginTop: "50px" }} />

          <Router>
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
