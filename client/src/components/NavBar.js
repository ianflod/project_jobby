import React from "react";

const NavBar = () => {
    return (
        <header>
            <ul>
                <li className="navLink">
                    <a href="/">Home</a>
                </li>
                <li className="navLink">
                    <a href="/dashboard">DashBoard</a>
                </li>
            </ul>
        </header>
    )
}

export default NavBar;