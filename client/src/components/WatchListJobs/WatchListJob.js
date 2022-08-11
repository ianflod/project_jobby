import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';
const WatchListJob = ({ watchedJob }) => {
    const url = "/watched-for-jobs/" + watchedJob.id

    if (!watchedJob) {
        return "loading..."
    }

    return (
        <>
            <p>{watchedJob.jobTitle}@{watchedJob.employerName}</p>
            <a href={watchedJob.jobUrl}>Apply Here!</a>
            <Link to={url}><button>More details</button></Link>
        </>
    )
}

export default WatchListJob;
