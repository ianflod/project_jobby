import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';
import Header from "../Header";

const WatchListJobsDetail = ({ watchedJob, handleChange, handleDelete }) => {


    const url = "/dashboard";

    const handleChangeOfState = () => {
        handleChange(watchedJob.id);
    }

    const onDelete = () => {
        handleDelete(watchedJob.id)
    }

    if (watchedJob) {
        return (

            <div>
                <Header />
                <div className="component">
                    <h2>Job Title: {watchedJob.jobTitle}</h2>
                    <p>Employee Name: {watchedJob.employerName}</p>
                    <p>Location: {watchedJob.locationName}</p>
                    <p>Description: {watchedJob.jobDescription}</p>
                    <a href={watchedJob.jobUrl} target="_blank">Link to Advert</a>
                    {watchedJob.minimumSalary ? <p>£{watchedJob.minimumSalary}</p> : null}
                    {watchedJob.maximumSalary ? <p>£{watchedJob.maximumSalary}</p> : null}
                    <p>date posted:{watchedJob.date}</p>
                    <p>Expiration date:{watchedJob.expirationDate}</p>
                    {/* <Link to={url}><button onClick={handleChangeOfState}>Set to Applied Job</button></Link> */}
                    <a href={watchedJob.jobUrl} target="_blank"><button className="button-general" onClick={handleChangeOfState}>Apply for this Job</button></a>
                    {/* <button onClick={onDelete}>Delete</button> */}

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

export default WatchListJobsDetail;