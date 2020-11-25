import React, { Component } from "react"
import "./App.css"
import logo from "./images/logo.png"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom"
import AllLaunches from "./components/Rockets/AllLaunches"
import LaunchDetails from "./components/Rockets/LaunchDetails"
import Navbar from "./components/navbar/Navbar"
import AllShip from "./components/Ships/AllShips"

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

          <Router>
            <header> <Navbar /> </header>


            <div className="container" style={{
              textAlign: "center",
              margin: "0 auto"
            }}>


              <Switch>
                <Route exact path="/" component={AllLaunches} />
                <Route path="/launch/:flight_number" component={LaunchDetails} />
                <Route path="/ships" component={AllShip} />
              </Switch>

            </div>
          </Router>

        </ApolloProvider >
      </div>
    );
  }
}

export default App;
