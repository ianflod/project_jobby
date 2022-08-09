import React from "react";
import ReedJob from "./ReedJob";

const ReedJobsDetail = ({reedJob}) => {
    if(reedJob){
        return(

            <div className = "component">
                <h2>{reedJob.jobTitle}</h2>
            </div>
            
        )
    }
    return(
        <>
        <p>Loading...</p>
        </>
    )

    
}

export default ReedJobsDetail;