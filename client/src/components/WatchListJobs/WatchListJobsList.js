import React from "react";
import WatchListJob from "./WatchListJob";

const WatchListJobsList = ({watchedJobs}) => {

    const watchJobsElements = watchedJobs.map((watchedJob, index) => {
        
    return(    
            <li key={index} className="watch-list-item">
                <div className="watch-list-component">
                    <WatchListJob watchedJob = {watchedJob}/>
                </div>
            </li>   
    )
  
})
        return (
            <>
            <h3>Watch List</h3>
            <ul className="watch-list-item">
                {watchJobsElements}
            </ul>
            </>

        )
}

export default WatchListJobsList;

