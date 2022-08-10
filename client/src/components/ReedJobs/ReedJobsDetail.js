import React from "react";

const ReedJobsDetail = ({ reedJob }) => {
    if (reedJob) {
        return (
            <div className="component">
                <h2>{reedJob.jobTitle}</h2>
            </div>
        )
    }
    return (
        <>
            <p>Loading...</p>
        </>
    )


}

export default ReedJobsDetail;