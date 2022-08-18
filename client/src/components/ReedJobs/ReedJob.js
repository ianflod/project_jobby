import React from "react";
import { Link } from 'react-router-dom';
import './ReedJob.css'

const ReedJob = ({ reedJob }) => {

  const url = "/" + reedJob._id;

  //From https://stackoverflow.com/questions/1301512/truncate-a-string-straight-javascript
  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }


  if (!reedJob) {
    return "loading..."
  }

  return (

    <div className="reedJob">
      <h3>
        <a href={url}>{truncateString(reedJob.jobTitle, 60)} </a>
      </h3>

      <p>{reedJob.locationName}</p>
      <p>{reedJob.employerName}</p>
      <p>{reedJob.expirationDate}</p>
      <p>{reedJob.date}</p>
      {/* <Link to={url}><button>More details</button></Link> */}
    </div>
  )
}

export default ReedJob;