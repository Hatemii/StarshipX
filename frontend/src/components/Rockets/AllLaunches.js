import React, { Component, Fragment } from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"
import LaunchCards from "./LaunchCards"
import Mission from "../HandleSuccesLaunches/Missions"

const LaunchesQuery = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
            rocket{
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`

export class AllLaunches extends Component {
    render() {
        return (
            <div>
                <div className="rocketHeader"></div>

                <div className="container" style={{ textAlign: "center", margin: "0 auto" }}>

                    <Fragment>
                        <h3 style={{ margin: "50px 0px" }}>All Rocket Launches</h3>

                        <Mission />

                        <Query query={LaunchesQuery}>
                            {
                                ({ loading, error, data }) => {
                                    if (loading) return <h4>Loading . . .</h4>
                                    if (error) return <h4>Error</h4>;

                                    return (
                                        <Fragment>
                                            {data.launches.map(launch => (
                                                <LaunchCards key={launch.flight_number} launch={launch} />
                                            ))}
                                        </Fragment>
                                    )
                                }
                            }

                        </Query>
                    </Fragment>
                </div>
            </div>
        )
    }
}


export default AllLaunches
