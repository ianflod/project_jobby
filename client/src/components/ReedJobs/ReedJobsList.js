import React, { Fragment } from "react";
import ReedJob from './ReedJob.js';

const ReedJobsList = ({reedJobs}) => {
  
  
  const reedJobsElements = reedJobs.map((reedJob, index) => {
		return(
			<li key={index} className="component-item">
				<div className="component">
					<ReedJob reedJob={reedJob}/>
				</div>
			</li>
		)	
	})

	


	return (
		<ul className='component-list'>
			{reedJobsElements}
		</ul>
     
	)
}


export default ReedJobsList;
