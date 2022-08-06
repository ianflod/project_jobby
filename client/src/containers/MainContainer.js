import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import NavBar from "../components/NavBar.js"
import DashboardContainer from "./DashboardContainer.js";


const MainContainer = () => {




    return (
        <Router>
            <NavBar />
            <Routes>
            <Route path="/dashboard" element={
                <DashboardContainer/>} 
            > </Route>
            </Routes>


        </Router>
    )
}

export default MainContainer;