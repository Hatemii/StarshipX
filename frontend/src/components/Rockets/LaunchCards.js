import React from 'react'
import classNames from "classnames"
import Moment from "react-moment"
import { Link } from "react-router-dom"
import "./RocketStyle.css"


export default function LaunchCards({
    launch: {
        flight_number,
        mission_name,
        launch_date_local,
        launch_success,
        rocket: { rocket_id, rocket_name, rocket_type }
    } }) {

    return (

        <div className="row">
            <div className="col-md-4">

                <div className="card">
                    <div className="card-body">

                        <h5 className="card-title" style={{ fontSize: "20px", fontWeight: "bold" }}>{rocket_name}</h5>
                        <hr color="white" />


                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>Flight Number</td>
                                    <td className="td_2">{flight_number}</td>
                                </tr>


                                <tr>
                                    <td>Mission</td>
                                    <td className="td_2"><span className={
                                        classNames({
                                            "text-success": launch_success,
                                            "text-danger": !launch_success
                                        })}>{mission_name}
                                    </span></td>
                                </tr>


                                <tr>
                                    <td>Date</td>
                                    <td className="td_2"><Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment> </td>
                                </tr>
                            </tbody>
                        </table>

                        <div style={{
                            position: "absolute",
                            bottom: "15px",
                            left: "0",
                            right: "0",
                            textAlign: "center",
                        }}>
                            <Link to={`/rockets/${flight_number}`}
                                className="btn btn-primary" style={{
                                    fontWeight: "bold"
                                }}>Rocket Details
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    )
}