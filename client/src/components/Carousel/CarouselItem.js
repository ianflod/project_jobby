import React from "react";
import CarouselList from "./CarouselList";
import {Link} from "react-router-dom";
import "./carousel.css";


const CarouselItem = ({featuredJob}) => {

    const url = "/" + featuredJob._id;

    // console.log(appliedForJob)

    if (!featuredJob){
        return "Loading..."
      }

    return (
        <div id="carouselItems">
            <p>Job Title: {featuredJob.jobTitle}</p>
            <p>Empolyer Name:{featuredJob.employerName}</p>
            <p>Location: {featuredJob.locationName}</p>
            <a href={featuredJob.jobUrl}>Apply Here!</a>
            <p>{featuredJob.minimumSalary ? <p>Salary: £{featuredJob.minimumSalary}</p> : null}</p>
            <Link to = {url}><button className="button">More details</button></Link>
        </div>
    )

}

export default CarouselItem;