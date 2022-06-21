import React from 'react';
import {Link, NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Universidad</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="row w-100 collapse navbar-collapse">
                        <ul className="col navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink  className="nav-link" aria-current="page" exact to="/users">
                                    Users
                                </NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink  className="nav-link" aria-current="page" exact to="/grupos">
                                    Grupos
                                </NavLink >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" exact to="/estudiantes">
                                    Estudiantes
                                </Link>
                            </li>
                        </ul>
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
                            </li></ul>
                    </div>

                </div>
            </div>
        </nav>
)
};

export default Navbar;
