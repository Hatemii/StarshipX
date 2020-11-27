import React, { Component } from 'react'
import Moment from "react-moment"
import { Link } from "react-router-dom"


export default function ShipCards({
    ship: {
        ship_id,
        ship_name,
        home_port,
        ship_type,
        year_built,
        active
    } }) {

    let current_active = active.toString();


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

                        <h5 className="card-title">Ship</h5>
                        <hr color="white" />

                        <h5>Name: <span style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "5px" }}>{ship_name}</span></h5>
                        <p>Type: <span style={{ fontWeight: "bold" }}>{ship_type}</span></p>

                        <p>Active: <span style={
                            current_active === "true" ? { color: "rgb(0, 199, 79)", fontWeight: "bold" } : { color: "rgb(220, 10, 10)", fontWeight: "bold" }
                        } > {current_active}</span> </p>

                    </div>
                    <Link to={`/ship/${ship_id}`}>
                        <button type="button" className="btn btn-primary"
                            style={{
                                marginBottom: "20px"
                            }}>Ship Details</button>
                    </Link>

                </div>
            </div>
        </div>

    )
}