import React from "react";
import ReedJob from "./ReedJob";
import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';


const ReedJobsDetail = ({reedJob, handleSelectedJob}) => {

    // change to dashboard
    const url = "/";

    const handleWatchedJobsSelection = () => {
        const id = reedJob._id;
        console.log(id);
        handleSelectedJob(id);
    }
    if(reedJob){
        return(

            <div className = "component">
                <h2>Job Title: {reedJob.jobTitle}</h2>
                <p>Employee Name: {reedJob.employerName}</p>
                <p>Location: {reedJob.locationName}</p>
                <p>Description: {reedJob.jobDescription}</p>
                <a href={reedJob.jobUrl}>Link to Advert</a>
                {reedJob.minimumSalary ? <p>£{reedJob.minimumSalary}</p> : null}
                {reedJob.maximumSalary ? <p>£{reedJob.maximumSalary}</p> : null}
                <p>date posted:{reedJob.date}</p>
                <p>Expiration date:{reedJob.expirationDate}</p>
                <Link to={url}><button onClick={handleWatchedJobsSelection}>ADD TO WATCHLIST BUTTON</button></Link>
            </div>
            
        )
    }
    return(
        <>
        <p>Loading...</p>
        </>
    )

    
}

export default ReedJobsDetail;