import React, { Component } from "react"
import logo from "./logo_light.png"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Launches from "./components/Launches"
import Launch from "./components/Launch"


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
      <ApolloProvider client={client}>
        <img src={logo} alt="spacex" style={{ width: "300px", display: "block", margin: "auto", marginTop: "50px" }} />

        <Router>
          <div className="container" style={{
            textAlign: "center",
            alignItems: "center"
          }}>

            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>


        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
