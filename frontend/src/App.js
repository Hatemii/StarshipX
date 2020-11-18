import React, { Component } from "react"
import logo from "./logo_light.png"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import Launches from "./components/Launches"

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

        <div className="container">
          {/* SpaceX Logo */}
          <img src={logo} alt="spacex" style={{ width: "300px", display: "block", margin: "auto", marginTop: "50px" }} />

          <Launches />
        </div>

      </ApolloProvider>
    );
  }
}

export default App;
