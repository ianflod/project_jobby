import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';


const WatchListJobsDetail = ({ watchedJob, handleChange }) => {


    const url = "/dashboard";

    const handleChangeOfState = () => {
        handleChange(watchedJob.id);
    }
    if (watchedJob) {
        return (

            <div className="component">
                <h2>Job Title: {watchedJob.jobTitle}</h2>
                <p>Employee Name: {watchedJob.employerName}</p>
                <p>Location: {watchedJob.locationName}</p>
                <p>Description: {watchedJob.jobDescription}</p>
                <a href={watchedJob.jobUrl}>Link to Advert</a>
                {watchedJob.minimumSalary ? <p>£{watchedJob.minimumSalary}</p> : null}
                {watchedJob.maximumSalary ? <p>£{watchedJob.maximumSalary}</p> : null}
                <p>date posted:{watchedJob.date}</p>
                <p>Expiration date:{watchedJob.expirationDate}</p>
                <Link to={url}><button onClick={handleChangeOfState}>Set to Applied Job</button></Link>

            </div>
        )
    }
    return (
        <>
            <p>Loading...</p>
        </>
    )


}

export default WatchListJobsDetail;