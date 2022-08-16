import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';
import './WatchJob.css';

const WatchListJob = ({ watchedJob }) => {
    const url = "/watched-for-jobs/" + watchedJob.id

    if (!watchedJob) {
        return "loading..."
    }

    return (
        <div className='watchedJob'>
            <h5>
             <a href={url}>{watchedJob.jobTitle}</a>
            </h5>
            <p>{watchedJob.employerName}</p>
            <p>{watchedJob.date}</p>
            {/* <a href={watchedJob.jobUrl}>Apply Here!</a> */}
            {/* <Link to={url}><button>More details</button></Link> */}
        </div>
    )
}

export default WatchListJob;
