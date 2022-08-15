import React, { useState, useEffect, Fragment, paginate } from "react"
import ReedJob from "../components/ReedJobs/ReedJob";
import ReedJobsList from "../components/ReedJobs/ReedJobsList"
import Search from "../components/Search";
import CarouselList from "../components/Carousel/CarouselList"

const Home = ({ reedJobs, featuredJobs }) => {

    const [filteredList, setFilteredList] = useState([])

    useEffect(() => {
        setFilteredList(reedJobs)
    }, [])

    const filterJobs = (searchTerms) => {
        let filteredResults = reedJobs
        if (searchTerms.jobTitle) {
            filteredResults = reedJobs.filter((reedJob) => {
                return reedJob.jobTitle.toLowerCase().includes(searchTerms.jobTitle.toLowerCase())
            })
        }

        if (searchTerms.location) {
            filteredResults = filteredResults.filter((reedJob) => {
                return reedJob.locationName.toLowerCase().includes(searchTerms.location.toLowerCase())
            })
        } if (!searchTerms.jobTitle && !searchTerms.location) {
            filteredResults = reedJobs;
        }

        setFilteredList(filteredResults)

    }

    return (
        <div>

            <CarouselList featuredJobs={featuredJobs} />
            <Search filterJobs={filterJobs} />
            <ReedJobsList reedJobs={filteredList} />
        </div>
    )


}

export default Home;