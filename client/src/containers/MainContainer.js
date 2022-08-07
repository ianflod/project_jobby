import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import NavBar from "../components/NavBar.js"
import DashboardContainer from "./DashboardContainer.js";
import ReedJobsList from "../components/ReedJobs/ReedJobsList";
import Home from "./Home.js";
import DashJobsForm from "../components/DashBoardJobs/DashJobsForm.js";


const MainContainer = () => {

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/dashboard" element={
                    <DashboardContainer />}
                > </Route>
                <Route path="/" element={
                    <Home />}
                > </Route>
                <Route path="/application-form" element={
                    <DashJobsForm />}
                > </Route>
            </Routes>
        </Router>
    )
}

export default MainContainer;