import React from "react";

const DashJobsDetails = ({appliedForJob}) => {
    console.log(appliedForJob);
    if (!appliedForJob){
        return "Loading..."
      }

    return (
        <p>{appliedForJob.employerName}</p>
    )
}

export default DashJobsDetails;