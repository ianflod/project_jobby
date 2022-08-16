import React from "react";

import Header from "../Header";



import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';

const DashJobsDetails = ({ appliedForJob, handleDelete }) => {
    if (!appliedForJob) {
        return "Loading..."
    }


    const url = "/applied-for-jobs/" + appliedForJob.id + "/edit";




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
                <button onClick={onDelete}>Delete</button>
                <Link to={url}><button>Update</button></Link>


            </div>
        </>
    )
}

export default DashJobsDetails;