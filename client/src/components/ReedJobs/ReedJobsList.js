import React, { paginate, useState, useEffect } from "react";
import ReedJob from './ReedJob.js';

const ReedJobsList = ({ reedJobs }) => {

	const [paginate, setpaginate] = useState(12);
	const load_more = () => {
		setpaginate((prevValue) => prevValue + 12);
	};



	const reedJobsElements = reedJobs.slice(0, paginate).map
		((reedJob, index) => <ReedJob reedJob={reedJob} key={index} />);
	return (
		<>
			<div className="reedJobList">
				<div className="flex-container">

					{reedJobsElements}
				</div>
			</div>
			<button onClick={load_more}>Load More</button>


		</>
	)


}

export default ReedJobsList;
