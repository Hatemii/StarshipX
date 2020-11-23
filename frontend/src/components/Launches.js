import React, { Component, Fragment } from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"
import LaunchItem from "./LaunchItem"
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

export class Launches extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="display-4 my-3" >Rocket Launches</h1>

                <Mission />

                <Query query={LaunchesQuery}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading . . .</h4>
                            if (error) return <h4>Error</h4>;

                            return (
                                <Fragment>
                                    {data.launches.map(launch => (
                                        <LaunchItem key={launch.flight_number} launch={launch} />
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


export default Launches
