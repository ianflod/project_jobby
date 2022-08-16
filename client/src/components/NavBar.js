import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';


const NavBar = ({ loggedInUser, logoutUser }) => {
    return (
        <header>
            <div>
                <ul className="ul-navbar">
                    <li >
                        <Link to="/" >Home</Link>
                    </li>
                    <li >
                        <Link to="/dashboard">DashBoard</Link>
                    </li>
                    <li >
                        <Link to="/application-form">Add New Application</Link>
                    </li>
                    <li>
                        {loggedInUser.email == null ? <Link to="/login">Login</Link> : <Link to="/logout" onClick={logoutUser}>Logout</Link>}

                    </li>

                </ul>
            </div>
        </header>
    )
}


export default NavBar;