import React from "react";
import DashJobsForm from "../components/DashBoardJobs/DashJobsForm";
import DashJobsList from "../components/DashBoardJobs/DashJobsList"
import { BrowserRouter as Router, Route, Routes, useParams, link } from 'react-router-dom';
import WatchListJob from "../components/WatchListJobs/WatchListJob"
import WatchListJobsList from "../components/WatchListJobs/WatchListJobsList";


const DashboardContainer = ({watchedJobs}) => {

    return (
        <frameElement>
            <h2>I am the dashboard container hello</h2>
            <p> <a className="link" href="/application-form">Add New application</a> </p>
            <DashJobsList />
            <WatchListJobsList watchedJobs={watchedJobs}/>
        </frameElement>
    )
}

export default DashboardContainer;

