import React, { Component } from "react"
import "./App.css"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AllLaunches from "./components/Rockets/AllLaunches"
import LaunchDetails from "./components/Rockets/LaunchDetails"
import Navbar from "./components/Header/Navbar"
import AllShips from "./components/Ships/AllShips"
import ShipDetails from "./components/Ships/ShipDetails"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"

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

        <Navbar />

        <ApolloProvider client={client} >

          <Router>
            <Switch>

              <Route exact path="/" component={Home} />
              <Route path="/rockets" exact component={AllLaunches} />
              <Route path="/rockets/:flight_number" component={LaunchDetails} />
              <Route exact path="/ship" component={AllShips} />
              <Route path="/ship/:ship_id" component={ShipDetails} />

            </Switch>
          </Router>


        </ApolloProvider >

        <Footer />


      </div >
    );
  }
}

export default App;
