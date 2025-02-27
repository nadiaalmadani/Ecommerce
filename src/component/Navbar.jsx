
import React from 'react';
import { NavLink } from "react-router-dom";
import {  useSelector } from "react-redux";
//import handleCart from "../redux/reducer/handleCart";

const Navbar = () => {
    const state = useSelector((state)=> state.handleCart)
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 bg-white shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="#">Collection</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">
                                    Products
                                </NavLink>
                            </li>
                           
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                           </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark">
                                <i className='fa fa-sign-in me-1'></i>login
                            </NavLink>
                           
                            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                <i className='fa fa-shopping-cart me-1'></i>cart ({state.length})
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
