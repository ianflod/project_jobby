import React, { Fragment } from "react"
import ReedJobsList from "../components/ReedJobs/ReedJobsList"
import Search from "../components/search";

const Home = ({reedJobs}) => {
    return (
    <Fragment>  
        <Search/>
        <ReedJobsList reedJobs={reedJobs}/>
    </Fragment>  
    )
  
}

export default Home;