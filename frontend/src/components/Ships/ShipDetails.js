import React, { Component, Fragment } from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import { Link } from "react-router-dom"
import "./ShipStyle.css"

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

        return (
            <div className="container" style={{ textAlign: "center", margin: "0 auto" }}>

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
                                    active
                                } = data.specific_ship

                                let current_active = active.toString();
                                let current_year = (year_built === null ? "Null" : year_built)

                                return (
                                    <div>
                                        <h3 style={{ margin: "50px 0px" }}>Ship Name:
                                            <span style={{ marginLeft: "20px" }}>{ship_name}</span>
                                        </h3>


                                        <div className="child_1">
                                            <h4>Overview</h4>

                                            <table className="table table-borderless">
                                                <tr>
                                                    <td>Ship Id</td>
                                                    <td className="td">{ship_id}</td>
                                                </tr>

                                                <tr>
                                                    <td>Home Port</td>
                                                    <td className="td">{home_port}</td>
                                                </tr>

                                                <tr>
                                                    <td>Ship Type</td>
                                                    <td className="td">{ship_type}</td>
                                                </tr>

                                                <tr>
                                                    <td>Year Of Built</td>
                                                    <td className="td">{current_year}</td>
                                                </tr>

                                                <tr>
                                                    <td>Active</td>
                                                    <td className="td"><span style={
                                                        current_active === "true" ?
                                                            { color: "rgb(0, 199, 79)", fontWeight: "bold" } : { color: "rgb(220, 10, 10)", fontWeight: "bold" }
                                                    } > {current_active}</span></td>
                                                </tr>

                                            </table>
                                        </div>

                                        <Link to="/ship" className="btn btn-primary" style={{
                                            margin: "100px 0px", fontWeight: "bold"
                                        }}>Back</Link>

                                    </div>
                                );
                            }
                        }

                    </Query >
                </Fragment >

                <hr color="#2f2f2f" />
            </div>
        );
    }
}

export default ShipDetails;