import React, { Component, Fragment } from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import ShipCards from "./ShipCards"
import Mission from "../HandleSuccesLaunches/Missions"


const ShipsQuery = gql`
    query ShipsQuery {
        ships {
            ship_id
            ship_name
            home_port
            ship_type
            year_built
            active
        }
    }
`


class AllShips extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="shipHeader"></div>

                <div className="container" style={{ textAlign: "center", margin: "0 auto" }}>

                    <Fragment>
                        <h3 style={{ margin: "50px 0px" }}>All Ship Launches</h3>
                        <Mission />

                        <Query query={ShipsQuery}>
                            {
                                ({ loading, error, data }) => {
                                    if (loading) return <h4>Loading . . .</h4>
                                    if (error) return <h4>Error</h4>

                                    return (
                                        <Fragment>
                                            {data.ships.map(ship => (
                                                <ShipCards key={ship.ship_id} ship={ship} />
                                            ))}
                                        </Fragment>
                                    )
                                }
                            }

                        </Query>
                    </Fragment>
                </div>
            </div>

        );
    }
}

export default AllShips;