import React, { useState, useEffect, Fragment } from "react"
import ReedJobsList from "../components/ReedJobs/ReedJobsList"
import Search from "../components/search";

const Home = ({ reedJobs }) => {

    const [filteredList, setFilteredList] = useState([])

    useEffect(() => {
        setFilteredList(reedJobs)
    }, [reedJobs])

    const filteredJobs = (query) => {
        const filterJobs = reedJobs.filter(
            reedJob => {
                return (
                    reedJob.jobTitle.toLowerCase()
                        .includes(query.toLowerCase())
                )
            }
        )
        setFilteredList(filterJobs)
    }



    return (
        <>
            <Fragment>
                <Search filteredJobs={filteredJobs} />
                <ReedJobsList reedJobs={filteredList} />
            </Fragment>
        </>
    )

}

export default Home;