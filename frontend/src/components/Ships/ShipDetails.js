import React, { Component, Fragment } from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import { Link } from "react-router-dom"

const SpecificShipQuery = gql`
    query SpecificShipQuery($ship_id: String!) {
        specific_ship(ship_id: $ship_id) {
            ship_id
            ship_name
            home_port
            ship_type
            year_built
            active
        }
    }
`

class ShipDetails extends Component {
    render() {
        let { ship_id } = this.props.match.params


        // childs_1 / child_2 style
        const child_style = {
            width: "50%",
            margin: "auto",
            padding: "10px",
        }


        // details
        const someDetails = {
            color: "white",
            fontWeight: "bold",
            marginLeft: "5px"
        }


        return (
            <Fragment>
                <Query query={SpecificShipQuery} variables={{ ship_id }}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading . . .</h4>
                            if (error) return <h4>Error</h4>;

                            const {
                                ship_id,
                                ship_name,
                                home_port,
                                ship_type,
                                year_built,
                                latitude,
                                active
                            } = data.specific_ship

                            let current_active = active.toString();
                            let current_year = (year_built === null ? "Null" : year_built)

                            return (
                                <div>
                                    <h3 style={{ margin: "40px 0px" }}>Ship Name:
                                        <span style={{ marginLeft: "20px" }}>{ship_name}</span>
                                    </h3>


                                    <div>
                                        <div className="child_1" style={child_style}>
                                            <h4>Ship Details</h4>
                                            <ul className="list-group">
                                                <li className="list-group-item">Ship Id:  <span style={someDetails}>{ship_id}</span></li>
                                                <li className="list-group-item">Home Port:  <span style={someDetails}>{home_port}</span></li>
                                                <li className="list-group-item">Ship Type: <span style={someDetails}>{ship_type}</span></li>
                                                <li className="list-group-item">Year Of Built: <span style={someDetails}>{current_year}</span></li>
                                                <li className="list-group-item">Latitude: <span style={someDetails}>{latitude}</span></li>


                                                <li className="list-group-item">Ship Active: <span style={
                                                    current_active === "true" ?
                                                        { color: "rgb(0, 199, 79)", fontWeight: "bold" } : { color: "rgb(220, 10, 10)", fontWeight: "bold" }
                                                } > {current_active}</span></li>

                                            </ul>
                                        </div>

                                    </div>


                                    <Link to="/ship" className="btn btn-secondary" style={{
                                        margin: "100px 0px"
                                    }}>Back</Link>


                                </div>
                            );
                        }
                    }

                </Query >

            </Fragment >
        );
    }
}

export default ShipDetails;