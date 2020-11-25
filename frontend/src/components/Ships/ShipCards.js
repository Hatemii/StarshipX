import React, { Component } from 'react'
import classNames from "classnames"
import Moment from "react-moment"
import { Link } from "react-router-dom"



export default function ShipCards({
    ship: {
        ship_id,
        ship_name,
        ship_type,
        year_built,
        active
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

                        <h5 className="card-title">Ship</h5>
                        <hr color="white" />

                        <h5>Name: <span style={{ marginLeft: "5px" }}>{ship_name}</span></h5>
                        <p>Type: {ship_type}</p>

                    </div>

                    <Link to={`/ship/${ship_id}`}>
                        <button type="button" className="btn btn-primary"
                            style={{
                                marginTop: "50px", marginBottom: "20px"
                            }}>Ship Details</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}