import React, { Component, Fragment } from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"
import LaunchCards from "./LaunchCards"
import Mission from "./Missions"

const LaunchesQuery = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`

export class AllLaunches extends Component {
    render() {
        return (
            <Fragment>
                <h3>All Rocket Launches</h3>

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
        )
    }
}


export default AllLaunches
