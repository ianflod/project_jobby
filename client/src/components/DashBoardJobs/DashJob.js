import React from "react";
import {Link} from "react-router-dom";

const DashJob = ({appliedForJob}) => {

    const url = "/applied-for-jobs/" + appliedForJob.id;

    // console.log(appliedForJob)

    if (!appliedForJob){
        return "Loading..."
      }

    return (
        <>
            <p>{appliedForJob.employerName}</p>
            <Link to={url}><button>More details</button></Link>
        </>
    )

}

export default DashJob;