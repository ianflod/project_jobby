import React from "react";
import { Link } from 'react-router-dom';
import './ReedJob.css'

const ReedJob = ({ reedJob }) => {

  const url = "/" + reedJob._id;


  if (!reedJob) {
    return "loading..."
  }

  return (

    <div className="reedJob">
      <h2>{reedJob.jobTitle}</h2>
      <p>Location:{reedJob.locationName}</p>
      <p>Employer Name:{reedJob.employerName}</p>
      <p>Expiration Date: {reedJob.expirationDate}</p>
      <Link to={url}><button>More details</button></Link>
    </div>
  )
}

export default ReedJob;