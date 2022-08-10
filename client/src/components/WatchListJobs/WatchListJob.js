import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';
const WatchListJob = ({watchedJob}) => {

    if(!watchedJob){
        return "loading..."
    }

    return (
        <>
        <p>{watchedJob.jobTitle}@{watchedJob.employerName}</p>
        <a href={watchedJob.jobUrl}>Apply Here!</a>
        </>
    )
}

export default WatchListJob;
