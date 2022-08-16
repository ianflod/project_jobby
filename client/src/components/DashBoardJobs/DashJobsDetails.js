import React from "react";

import Header from "../Header";



import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';
import EventsList from './EventsList.js'

<<<<<<< HEAD
const DashJobsDetails = ({ appliedForJob, handleDelete }) => {
    if (!appliedForJob) {
        return "Loading..."
    }

=======
const DashJobsDetails = ({appliedForJob, handleDelete, events}) => {

    console.log(events)
        if (!appliedForJob){
                return "Loading..."
            }
>>>>>>> 2e0ea11608231339080e997f6a476b1cf2f949d8

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

<<<<<<< HEAD
            <div className="component">
                <p>{appliedForJob.employerName}</p>
                <button onClick={onDelete}>Delete</button>
                <Link to={url}><button>Update</button></Link>


=======
        <>
            <div className = "component">
                <p>{appliedForJob.employerName}</p>
                <button onClick={onDelete}>Delete</button>
                <Link to={url}><button>Update</button></Link>
                <Link to={urlEvent}><button>Add Event</button></Link>
                <EventsList events={appliedForJob.events}/>
>>>>>>> 2e0ea11608231339080e997f6a476b1cf2f949d8
            </div>
        </>
    )
}

export default DashJobsDetails;