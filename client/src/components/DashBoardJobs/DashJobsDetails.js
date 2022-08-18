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
                <h3>{appliedForJob.jobTitle}</h3>
                <h4>{appliedForJob.employerName}</h4>
                <div className="applied-btn-container">
                    <EventsList events={events} />
                    <div className="eventButtons">
                        <EventsList events={appliedForJob.events} />
                        <button className="button-general" onClick={onDelete}>Delete</button>
                        <Link to={url}>
                            <button className="button-general">Update</button></Link>
                        <Link to={urlEvent}>
                            <button className="button-general">Add Event</button></Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DashJobsDetails;