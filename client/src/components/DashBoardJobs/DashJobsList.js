import React from "react";
import DashJob from "./DashJob";

const DashJobsList = ({appliedForJobs}) => {

    const appliedForJobsElement = appliedForJobs.map((appliedForJob, index) => {
        return (
                <li key={index} className="component-item">
				    <div className="applied-for-jobs-component">
					    <DashJob appliedForJob={appliedForJob}/>
                    </div>
                </li>
            )
    })

    return (
        <ul className='applied-component-list'>
			{appliedForJobsElement}
		</ul>
    )
    
}

export default DashJobsList;