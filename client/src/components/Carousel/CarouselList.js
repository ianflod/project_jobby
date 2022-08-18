import React from "react";
import CarouselItem from "./CarouselItem";
import "./carousel.css";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';

import '@brainhubeu/react-carousel/lib/style.css';
import Header from "../Header"

const CarouselList = ({ featuredJobs }) => {



    const carouselItemsElement = featuredJobs.filter((featuredJob, index) => index < 40 && index > 20).map((featuredJob, index) => {
        return (
            <li key={index} className="featured-component-item">
                <div className="featured-jobs-component">
                    <CarouselItem featuredJob={featuredJob} />
                </div>
            </li>
        )
    })


    // console.log(carouselItemsElement)

    return (
        <>
            <div className="featured">
                <h2>Featured jobs </h2>
            </div>

            <Carousel className="featured-component-list"
                plugins={[
                    'centered',
                    'infinite',
                    'arrows',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 3,
                        },
                    },
                ]}
            >
                {carouselItemsElement}
            </Carousel>
        </>
    )
}
export default CarouselList;