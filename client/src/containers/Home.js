import React, { Fragment } from "react"
import ReedJobsList from "../components/ReedJobs/ReedJobsList"
import Search from "../components/search";

const Home = () => {
    return (
    <Fragment>  
        <Search/>
        <ReedJobsList/>
    </Fragment>  
    )
  
}

export default Home;