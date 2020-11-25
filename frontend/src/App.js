import React, { Component } from "react"
import "./App.css"
import logo from "./images/logo.png"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import AllLaunches from "./components/Rockets/AllLaunches"
import LaunchDetails from "./components/Rockets/LaunchDetails"
import Navbar from "./components/navbar/Navbar"
import Ship from "./components/Ships/Ship"

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

        <header> <Navbar /> </header>

        <div>
          <ApolloProvider client={client} >
            <Router>

              <div className="container" style={{
                textAlign: "center",
                margin: "0 auto"
              }}>


                <Switch>
                  <Route exact path="/" component={AllLaunches} />
                  <Route path="/launch/:flight_number" component={LaunchDetails} />
                  <Route path="/ships" component={Ship} />
                </Switch>

              </div>
            </Router>
          </ApolloProvider >
        </div>
      </div>
    );
  }
}

export default App;
