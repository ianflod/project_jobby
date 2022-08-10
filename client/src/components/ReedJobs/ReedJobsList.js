import React from "react";
import ReedJob from './ReedJob.js';

const ReedJobsList = ({ reedJobs }) => {
	const reedJobsElements = reedJobs.map
		((reedJob, index) => <ReedJob reedJob={reedJob} key={index} />);
	return (
		<div>

			{reedJobsElements}
		</div>)
}

export default ReedJobsList;
