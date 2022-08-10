import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <ul>
                <li className="navLink">
                    <Link to = "/" >Home</Link>
                </li>
                <li className="navLink">
                    <Link to = "/dashboard">DashBoard</Link>
                </li>
            </ul>
        </header>
    )
}

export default NavBar;