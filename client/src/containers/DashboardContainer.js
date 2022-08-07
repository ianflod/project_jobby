import React from "react";
import DashJobsForm from "../components/DashBoardJobs/DashJobsForm";
import DashJobsList from "../components/DashBoardJobs/DashJobsList"

const  DashboardContainer = () => {
    
    return (
        <frameElement>
            <h2>I am the dashboard container</h2>
            <DashJobsForm/>
            <DashJobsList/>
        </frameElement>
    )
}

export default DashboardContainer;

