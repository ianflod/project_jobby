import React from "react";

import Header from "../Header";



import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';
import EventsList from './EventsList.js'


const DashJobsDetails = ({ appliedForJob, handleDelete, events }) => {

    console.log(events)
    if (!appliedForJob) {
        return "Loading..."
    }


    const url = "/applied-for-jobs/" + appliedForJob.id + "/edit";
    const urlEvent = "/applied-for-jobs/" + appliedForJob.id + "/create-event"




    const onDelete = () => {
        handleDelete(appliedForJob.id)
    }

    return (

        <>
            <div>
                <Header />
            </div>

            <div className="component">
                <p>{appliedForJob.employerName}</p>
                <div className="applied-btn-container">

                    <button className="button-general" onClick={onDelete}>Delete</button>
                    <Link to={url}>
                        <button className="button-general">Update</button></Link>
                    <Link to={urlEvent}>
                        <button className="button-general">Add Event</button></Link>
                    <EventsList events={appliedForJob.events} />

                </div>
            </div>
        </>
    )
}

export default DashJobsDetails;