import React from "react";
import CarouselItem from "./CarouselItem";
import "./carousel.css";

const CarouselList = ({featuredJobs}) => {
    
    

    const carouselItemsElement = featuredJobs.filter((featuredJob, index) => index < 20).map((featuredJob, index) => {
        return(
            <li key={index} className="featured-component-item">
                <div className="featured-jobs-component">
                    <CarouselItem featuredJob={featuredJob}/>
                </div>
            </li>
        )
    })
    
    return (
        <ul className="featured-component-list">
            {carouselItemsElement}
        </ul>
    )
}
export default CarouselList;