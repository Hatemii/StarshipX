import React, { Component } from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiSpacex } from "react-icons/si";

export default class Footer extends Component {
    render() {
        return (
            <div>

                <footer className="page-footer special-color-dark pt-4">

                    <div classNameName="container">
                        <ul className="list-unstyled list-inline text-center">

                            <li className="list-inline-item">
                                <a className="btn-floating btn-fb mx-1">
                                    <i><FaFacebook /></i>
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a className="btn-floating btn-tw mx-1">
                                    <i><FaTwitter /> </i>
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a className="btn-floating btn-gplus mx-1">
                                    <i><FaYoutube /></i>
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a className="btn-floating btn-gplus mx-1">
                                    <i><FaInstagram /></i>
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="footer-copyright text-center py-3">© 2020 Copyright:</div>

                </footer>
            </div >
        )
    }
}
