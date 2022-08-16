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
      <div className="search-container">

        <div className="logo">
          <img className="home-logo" src="/images/logo_transparent_background.png" />
        </div>
        <div></div>
        <div className="search-bar">


          <div className="search-label">
            <div className="search-label-text">
              <label htmlFor="findAJob">Find your dream job!</label>
            </div>
            <input type="text" placeholder="Job Title" id="jobTitle" name="jobTitle" value={searchTerms.jobTitle} onChange={handleChange} />
            <br></br>
          </div>
          <div className="search-label">
            <input type="text" placeholder="Location" id="location" name="location" value={searchTerms.location} onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>

  )


}

export default Search