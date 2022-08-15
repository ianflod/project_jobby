import React from "react";
import CarouselList from "./CarouselList";
import {Link} from "react-router-dom";


const CarouselItem = ({featuredJob}) => {

    const url = "/" + featuredJob._id;

    // console.log(appliedForJob)

    if (!featuredJob){
        return "Loading..."
      }

    return (
        <>
            <p>{featuredJob.jobTitle}</p>
            <p>{featuredJob.employerName}</p>
            <Link to = {url}><button>More details</button></Link>
        </>
    )

}

export default CarouselItem;