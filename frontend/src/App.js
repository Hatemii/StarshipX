import React, { Component } from "react"
import "./App.css"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
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
            <Routes>

              <Route exact path="/" element={<Home/>} />
              <Route path="/rockets" exact element={<AllLaunches/>} />
              <Route path="/rockets/:flight_number" element={<LaunchDetails/>} />
              <Route exact path="/ship" element={<AllShips/>} />
              <Route path="/ship/:ship_id" element={<ShipDetails/>} />

            </Routes>
          </Router>


        </ApolloProvider >

        <Footer />


      </div >
    );
  }
}

export default App;
