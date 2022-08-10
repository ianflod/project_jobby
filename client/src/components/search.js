import React, { useState } from "react";
import ReedJobsList from './ReedJobs/ReedJobsList.js';
import Scroll from './ReedJobs/Scroll';

const Search = ({ filteredJobs }) => {

  const [searchField, setSearchField] = useState("");


  const handleChange = e => {
    filteredJobs(e.target.value)
  }

  function reedJobsList() {
    return (
      <Scroll>
        <ReedJobsList reedJobs={reedJobs} />
      </Scroll>
    );
  }

  return (
    <>
      <button >
        <div >
          <h2>Search jobs</h2>
        </div>
        <div >
          <input

            type="search"
            placeholder="Search jobs"
            onChange={handleChange}
          />
        </div>

      </button>
    </>
  )
}

export default Search; 