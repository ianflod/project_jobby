import React from "react";
import DashJobsForm from "../components/DashBoardJobs/DashJobsForm";
import DashJobsList from "../components/DashBoardJobs/DashJobsList"
import { BrowserRouter as Router, Route, Routes, useParams, link } from 'react-router-dom';


const DashboardContainer = () => {

    return (
        <frameElement>
            <h2>I am the dashboard container hello</h2>
            <p> <a className="link" href="http://localhost:3001/application-form">Add New application(this will need changed I think)</a> </p>
            <DashJobsList />
        </frameElement>
    )
}

export default DashboardContainer;

