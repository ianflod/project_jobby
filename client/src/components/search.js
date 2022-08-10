import React, { useState } from "react";
import ReedJobsList from './ReedJobs/ReedJobsList.js';
import Scroll from './ReedJobs/Scroll';

const Search = ({ filterTitle, filterLocation }) => {

  const [searchField, setSearchField] = useState("");


  const handleTitle = e => {
    filterTitle(e.target.value)
  }

  const handleLocation = e => {
    filterLocation(e.target.value)
  }



  // function reedJobsList() {
  //   return (
  //     <Scroll>
  //       <ReedJobsList reedJobs={reedJobs} />
  //     </Scroll>
  //   );
  // }

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
            onChange={handleTitle}
          />
        </div>
      </button>
      <button >
        <div >
          <h2>Search location</h2>
        </div>
        <div >
          <input
            type="search"
            placeholder="Search location"
            onChange={handleLocation}
          />
        </div>
      </button>
    </>
  )
}

export default Search; 