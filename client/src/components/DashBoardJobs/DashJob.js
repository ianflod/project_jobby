import React from "react";
import {Link} from "react-router-dom";
import './DashJobs.css';

const DashJob = ({appliedForJob}) => {

    const url = "/applied-for-jobs/" + appliedForJob.id;

    // console.log(appliedForJob)

    if (!appliedForJob){
        return "Loading..."
      }

    return (
        <div className='dashJob'>
            <h5>
                <a href={url}>{appliedForJob.jobTitle}</a>
            </h5>
            <p>{appliedForJob.employerName}</p>
            <p>{appliedForJob.date}</p>
            {/* <Link to={url}><button>More details</button></Link> */}
        </div>
    )

}

export default DashJob;