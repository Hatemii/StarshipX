import React from 'react'
import { Link } from "react-router-dom"
import "./ShipStyle.css"

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

    return (

        <div className="row">
            <div className="col-md-4">

                <div className="card">
                    <div className="card-body">

                        <h6 className="card-title" style={{ fontSize: "20px", fontWeight: "bold" }}>{ship_name}</h6>
                        <hr color="white" />

                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>Ship Id</td>
                                    <td className="td">{ship_id}</td>
                                </tr>

                                <tr>
                                    <td>Ship Type</td>
                                    <td className="td" style={{ color: "white", fontWeight: "bold" }}>{ship_type}</td>
                                </tr>

                                <tr>
                                    <td>Active</td>
                                    <td className="td"><span style={
                                        current_active === "true" ? { color: "rgb(0, 199, 79)", fontWeight: "bold" } : { color: "rgb(220, 10, 10)", fontWeight: "bold" }
                                    } > {current_active}</span> </td>
                                </tr>
                            </tbody>
                        </table>

                        <div style={{
                            position: "absolute",
                            bottom: "30px",
                            left: "0",
                            right: "0",
                            textAlign: "center",
                        }}>

                            <Link to={`/ship/${ship_id}`} className="btn btn-primary"
                                style={{
                                    fontWeight: "bold",
                                }}>Ship Details
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    )
}