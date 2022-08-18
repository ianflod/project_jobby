import React from "react";
import ReedJob from "./ReedJob";
import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';
import Header from "../Header";


const ReedJobsDetail = ({ reedJob, handleSelectedJob }) => {

    // change to dashboard
    const url = "/";

    const handleWatchedJobsSelection = () => {
        handleSelectedJob(reedJob);
    }
    if (reedJob) {
        return (
            <div>
                <Header />
                <div className="component">
                    <h2>Job Title: {reedJob.jobTitle}</h2>
                    <p>Employee Name: {reedJob.employerName}</p>
                    <p>Location: {reedJob.locationName}</p>
                    <p>Description: {reedJob.jobDescription}</p>
                    <a href={reedJob.jobUrl}>Link to Advert</a>
                    {reedJob.minimumSalary ? <p>£{reedJob.minimumSalary}</p> : null}
                    {reedJob.maximumSalary ? <p>£{reedJob.maximumSalary}</p> : null}
                    <p>date posted:{reedJob.date}</p>
                    <p>Expiration date:{reedJob.expirationDate}</p>
                    <Link to={url}><button className="button-general" onClick={handleWatchedJobsSelection}>ADD TO WATCHLIST</button></Link>
                </div>
            </div>
        )
    }
    return (
        <>
            <p>Loading...</p>
        </>
    )


}

export default ReedJobsDetail;