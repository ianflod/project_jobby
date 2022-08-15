import React, { useState } from "react";
import ReedJobsList from './ReedJobs/ReedJobsList.js';
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
    <div>
      <div className="search-bar">
        {/* <h4>Filter By:</h4> */}
        <label htmlFor="jobTitle"> Job Title: </label>
        <input type="text" id="jobTitle" name="jobTitle" value={searchTerms.jobTitle} onChange={handleChange} />
        <label htmlFor="location">Location: </label>
        <input type="text" id="location" name="location" value={searchTerms.location} onChange={handleChange} />
      </div>
    </div>
  )


}

export default Search