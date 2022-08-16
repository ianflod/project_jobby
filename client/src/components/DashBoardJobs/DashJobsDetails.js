import React from "react";
import Header from "../Header";

const DashJobsDetails = ({ appliedForJob, handleDelete }) => {

    if (!appliedForJob) {
        return "Loading..."
    }

    const onDelete = () => {
        handleDelete(appliedForJob.id)
    }

    return (
        <div>
            <Header />
            <div className="component">
                <p>{appliedForJob.employerName}</p>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    )
}

export default DashJobsDetails;