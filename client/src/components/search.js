import React, { useState } from "react";
import ReedJobsList from './ReedJobs/ReedJobsList.js';
import "./search.css"
// import Scroll from './ReedJobs/Scroll';

const Search = ({ filterJobs }) => {

  const [searchTerms, setSearchTerms] = useState({
    jobTitle: '',
    location: ''
  })

  const handleChange = (e) => {
    const copySearch = { ...searchTerms }
    copySearch[e.target.name] = e.target.value
    setSearchTerms(copySearch)
    filterJobs(copySearch)
  }

  return (
    <div className="wrap">
      {/* <h4>Filter By:</h4> */}
      <div className="centre">
        <label htmlFor="jobTitle"> Job Title </label>
        <input type="text" className="search" name="jobTitle" placeholder="Job Role" value={searchTerms.jobTitle} onChange={handleChange} />
        <label id="location" htmlFor="location">Location </label>
        <input type="text" className="search" name="location" placeholder="Location" value={searchTerms.location} onChange={handleChange} />
      </div>
    </div>
  )


}

export default Search