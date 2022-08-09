import React from "react";
import { Link } from 'react-router-dom';


const ReedJob = ({reedJob}) => {

  const url = "/" + reedJob._id;


  if (!reedJob){
    return "loading..."
  }

  return (
    <>
      <h2>{reedJob.jobTitle}</h2>
      <p>Location:{reedJob.locationName}</p>
      <p>Empolyer Name:{reedJob.employerName}</p>
      <p>Date Posted: {reedJob.date}</p>
      <Link to = {url}><button>More details</button></Link>
    </>  
  )
}

export default ReedJob;