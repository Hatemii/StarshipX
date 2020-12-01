import React, { Component, Fragment } from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import { Link } from "react-router-dom"
import classNames from "classnames"

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
                rocket_type,
            }
        }
    }
`

class LaunchDetails extends Component {
    render() {
        let { flight_number } = this.props.match.params;
        flight_number = parseInt(flight_number);


        // childs_1 / child_2 style
        const child_style = {
            width: "50%",
            float: "left",
            padding: "10px"
        }

        const child_style2 = {
            float: "right",
            width: "50%",
            padding: "10px"
        }

        return (

            <div className="container" style={{ textAlign: "center", margin: "0 auto" }}>

                <Fragment>
                    <Query query={SpecificRocketQuery} variables={{ flight_number }}>
                        {
                            ({ loading, error, data }) => {
                                if (loading) return <h4>Loading . . .</h4>
                                if (error) return <h4>Error</h4>;

                                const {
                                    mission_name,
                                    flight_number,
                                    launch_year,
                                    launch_success,
                                    rocket: { rocket_id, rocket_name, rocket_type },
                                } = data.specific_launch



                                return (
                                    <div>
                                        <h3 style={{ margin: "50px 0px" }}>Mission Name:
                                            <span style={{ marginLeft: "20px", }} >{mission_name}</span>
                                        </h3>


                                        <div>
                                            <div className="child_1" style={child_style}>
                                                <h4>Launch Details</h4>

                                                <table className="table table-borderless">
                                                    <tr>
                                                        <td>Flight Number</td>
                                                        <td className="td">{flight_number}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Launch Year</td>
                                                        <td className="td">{launch_year}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Launch Success</td>
                                                        <td className="td"> <span className={
                                                            classNames({
                                                                "text-success": launch_success,
                                                                "text-danger": !launch_success
                                                            })}>
                                                            <b style={{ marginLeft: "5px" }}>{
                                                                launch_success ? "Yes" : "No"
                                                            }</b></span> </td>
                                                    </tr>
                                                </table>

                                            </div>



                                            <div className="child_2" style={child_style2}>
                                                <h4>Rocket Details</h4>

                                                <table className="table table-borderless">
                                                    <tr>
                                                        <td>Rocket Id</td>
                                                        <td className="td">{rocket_id}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Rocket Name</td>
                                                        <td className="td">{rocket_name}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Rocket Type</td>
                                                        <td className="td"> {rocket_type}</td>
                                                    </tr>
                                                </table>

                                            </div>
                                        </div>

                                        <Link to="/rockets" className="btn btn-primary" style={{
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

export default LaunchDetails;