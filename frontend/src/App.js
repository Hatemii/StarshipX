import React, { Component } from "react"
import logo from "./logo_light.png"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

const client = new ApolloClient({
  url: "http://localhost:5000/graphql"
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
          <img src={logo} style={{ width: "300px", display: "block", margin: "auto", marginTop: "50px" }} />
        </div>

      </ApolloProvider>
    );
  }
}

export default App;
