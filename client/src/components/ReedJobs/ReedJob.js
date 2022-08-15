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
      <h3>{reedJob.jobTitle}</h3>
      <p>{reedJob.locationName}</p>
      <p>{reedJob.employerName}</p>
      <p>{reedJob.date}</p>
      <Link to={url}><button>More details</button></Link>
    </div>
  )
}

export default ReedJob;