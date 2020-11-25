import React, { Component } from 'react'
import classNames from "classnames"
import Moment from "react-moment"
import { Link } from "react-router-dom"



export default function LaunchCards({
    launch: {
        flight_number,
        mission_name,
        launch_date_local,
        launch_success
    } }) {


    const style_row = {
        float: "left",
        margin: "auto"
    }

    const style_cards = {
        margin: "auto",
        marginBottom: "3.5rem",
        width: "20rem",
        height: "18rem",
        color: "white"
    }

    return (



        <div className="row" style={style_row}>
            <div className="col">

                <div className="card" style={style_cards}>
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

                    <Link to={`/rockets/${flight_number}`}>
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