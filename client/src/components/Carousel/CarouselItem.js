import React from "react";
import CarouselList from "./CarouselList";
import { Link } from "react-router-dom";


const CarouselItem = ({ featuredJob }) => {

    const url = "/" + featuredJob._id;

    // console.log(appliedForJob)

    if (!featuredJob) {
        return "Loading..."
    }

    return (
        <>


            <div className="carousel-text">
                <h4>
                    <a href={url}>{featuredJob.jobTitle}</a>
                </h4>
                <p>{featuredJob.employerName}</p>
                {/* <Link to={url}><button>More details</button></Link> */}
            </div>

        </>
    )

}

export default CarouselItem;