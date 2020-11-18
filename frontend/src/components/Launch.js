import React, { Component, Fragment } from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import { Link } from "react-router-dom"
import classNames from "classnames"
import Missions from "./Missions"

// specific_launch <<<--- user same query name as you used in schema.js
const SpecificRocketQuery = gql`
    query SpecificRocketQuery($flight_number: Int!) {
        specific_launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local,
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`

class Launch extends Component {
    render() {
        let { flight_number } = this.props.match.params;
        flight_number = parseInt(flight_number);

        return (
            <Fragment>
                <Query query={SpecificRocketQuery} variables={{ flight_number }}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading . . .</h4>
                            if (error) console.log(error);

                            const {
                                mission_name,
                                flight_number,
                                launch_year,
                                launch_success,
                                rocket: { rocket_id, rocket_name, rocket_type }
                            } = data.specific_launch


                            return (
                                <div>
                                    <h1 className="display-4 my-3" >
                                        <span className="text-dark">Mission:</span>
                                        {mission_name}</h1>
                                </div>
                            );

                        }
                    }

                </Query>

            </Fragment>
        );
    }
}

export default Launch;