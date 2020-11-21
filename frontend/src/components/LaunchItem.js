import React, { Component } from 'react'
import classNames from "classnames"
import Moment from "react-moment"
import { Link } from "react-router-dom"
import App from "../App.css"



export default function LaunchItem({
    launch: {
        flight_number,
        mission_name,
        launch_date_local,
        launch_success
    } }) {

    return (
        <div className="row">
            <div className="col">

                <div className="card">
                    <div className="card-body">

                        <h5 className="card-title">Rocket</h5>
                        <hr color="white" />

                        <h4>Mission:
                            <span style={{ marginLeft: "10px" }}
                                className={
                                    classNames({
                                        "text-success": launch_success,
                                        "text-danger": !launch_success
                                    })}>{mission_name}
                            </span>
                        </h4>

                        <p>Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment></p>
                    </div>

                    <Link to={`/launch/${flight_number}`}>
                        <button type="button" className="btn btn-primary"
                            style={{
                                marginBottom: "20px"
                            }}>Rocket Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}