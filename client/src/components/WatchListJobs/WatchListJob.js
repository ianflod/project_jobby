import React from "react";

const WatchListJob = ({watchedJob}) => {

    if(!watchedJob){
        return "loading..."
    }

    return (
        <p>{watchedJob.jobTitle}</p>
    )
}

export default WatchListJob;
