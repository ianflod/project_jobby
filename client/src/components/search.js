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
    <div className="search-container">
      <div className="search-bar">
        {/* <h4>Filter By:</h4> */}
        <div className="search-label">
          <label htmlFor="jobTitle"> Job Title: </label>
          <input type="text" placeholder="Job Title" id="jobTitle" name="jobTitle" value={searchTerms.jobTitle} onChange={handleChange} />
        </div>
        <div className="search-label">
          <label htmlFor="location">Location: </label>
          <input type="text" id="location" name="location" value={searchTerms.location} onChange={handleChange} />
        </div>
      </div>
    </div>

  )


}

export default Search