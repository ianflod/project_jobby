import React from "react";
import WatchListJob from "./WatchListJob";

const WatchListJobsList = ({watchedJobs}) => {

    const watchJobsElements = watchedJobs.map((watchedJob, index) => {
        
    return(    
            <div key={index} >
                <div className="watch-list-component">
                    <WatchListJob watchedJob = {watchedJob}/>
                </div>
            </div>   
    )
  
})
        return (
            <>
            
            <div >
                {watchJobsElements}
            </div>
            </>

        )
}

export default WatchListJobsList;

