import React from "react";

const DashJobsDetails = ({appliedForJob, handleDelete}) => {

    if (!appliedForJob){
        return "Loading..."
      }

      const onDelete = () => {
        handleDelete(appliedForJob.id)
        }

    return (
        <div className = "component">
            <p>{appliedForJob.employerName}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}

export default DashJobsDetails;