import React from "react";
import DashJobsForm from "../components/DashBoardJobs/DashJobsForm";
import DashJobsList from "../components/DashBoardJobs/DashJobsList"
import { BrowserRouter as Router, Route, Routes, useParams, link } from 'react-router-dom';
import WatchListJob from "../components/WatchListJobs/WatchListJob"
import WatchListJobsList from "../components/WatchListJobs/WatchListJobsList";
import "../components/DashBoardJobs/DashJobs.css";
import Header from "../components/Header";
import ExplodingConfetti from "../components/ExplodingConfetti";

const DashboardContainer = ({ watchedJobs, appliedForJobs }) => {

    return (
        <div>
            <Header />
            <div className="flex-container">
                <ExplodingConfetti />
            </div>
            <div className='dashBoard'>
                <div className="dashApplied">
                    <h2 id="dashAppliedTitle">My Applied for Jobs!</h2>
                    {/* <p> <a className="link" href="/application-form">Add New Application</a> </p> */}
                    <DashJobsList appliedForJobs={appliedForJobs} />
                </div>
                <div className="dashWatch">
                    <h2 id="dashWatchTitle">My Watch List</h2>
                    <WatchListJobsList watchedJobs={watchedJobs} />
                </div>
            </div>
        </div>
    )
}

export default DashboardContainer;

