import React, { paginate, useState, useEffect } from "react";
import ReedJob from './ReedJob.js';

const ReedJobsList = ({ reedJobs }) => {

	const [paginate, setpaginate] = useState(5);
	const load_more = () => {
		setpaginate((prevValue) => prevValue + 5);
	};



	const reedJobsElements = reedJobs.slice(0, paginate).map
		((reedJob, index) => <ReedJob reedJob={reedJob} key={index} />);
	return (
		<>
			<div className="reedJobList">

				{reedJobsElements}
			</div>

			<button onClick={load_more}>Load More</button>


		</>
	)


}

export default ReedJobsList;
