import React, { useState, useEffect, Fragment, paginate } from "react"
import ReedJobsList from "../components/ReedJobs/ReedJobsList"
import Search from "../components/search";

const Home = ({ reedJobs }) => {

    const [filteredList, setFilteredList] = useState([])

    useEffect(() => {
        setFilteredList(reedJobs)
    }, [reedJobs])

    const filterTitle = (query) => {
        const filterJobs = filteredList.filter(
            filteredList => {
                return (
                    filteredList.jobTitle.toLowerCase()
                        .includes(query.toLowerCase())
                )

            }
        )
        setFilteredList(filterJobs)

    }

    const filterLocation = (query) => {
        const filterJobs = filteredList.filter(
            filteredList => {
                return (
                    filteredList.locationName.toLowerCase()
                        .includes(query.toLowerCase())

                )

            }
        )
        setFilteredList(filterJobs)

    }




    return (
        <>
            <Fragment>
                <Search filterTitle={filterTitle} filterLocation={filterLocation} />
                <ReedJobsList reedJobs={filteredList} />
            </Fragment>


        </>
    )





}

export default Home;