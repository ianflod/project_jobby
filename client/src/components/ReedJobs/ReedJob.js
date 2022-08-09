import React from "react";

const ReedJob = ({reedJob}) => {


  if (!reedJob){
    return "loading..."
  }

  return (
    <p>{reedJob.jobTitle}</p>
  )
}

export default ReedJob;