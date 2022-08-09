import React from "react";

const ReedJob = ({reedJob}) => {


  if (!reedJob){
    return "loading..."
  }

  return (
    <>
      <h2>{reedJob.jobTitle}</h2>
      <p>Location:{reedJob.locationName}</p>
      <p>Emplyer Name:{reedJob.employerName}</p>
      <p>Date Posted: {reedJob.date}</p>
      <button>More details</button>
    </>  
  )
}

export default ReedJob;