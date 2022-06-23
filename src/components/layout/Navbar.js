import React, {useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    const logout = async () => {
        localStorage.clear()
        window.location.reload()
        // window.location.href = `${process.env.REACT_APP_URL}`
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

            <div className="container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Musala</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="row w-100 collapse navbar-collapse">
                        <ul className="col navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" exact to="/users">
                                    Users
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" exact to="/gateway">
                                    Gateway
                                </NavLink>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') && (
                            <ul className="col-2 navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" exact to="/signUp">
                                        SignUp
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" exact to="/signIn">
                                        SignIn
                                    </Link>
                                </li>
                            </ul>
                        )}
                        {localStorage.getItem('token') && (
                            <ul className="col-2 navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to={'#'} onClick={() => logout()} className="nav-link" exact>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        )}

                    </div>

                </div>
            </div>
        </nav>
    )
};

export default Navbar;
