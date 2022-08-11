import React from "react";

const DashJobs = ({appliedForJob}) => {
    if (!appliedForJob){
        return "Loading..."
      }

    return (
        <p>{appliedForJob.employerName}</p>
    )

}

export default DashJobs;