import React from "react";
import DashJob from "./DashJob";
import './DashJobs.css';

const DashJobsList = ({appliedForJobs}) => {

    const appliedForJobsElement = appliedForJobs.map((appliedForJob, index) => {
        return (

                <div key={index} className="component-item">

				    <div className="applied-for-jobs-component">
					    <DashJob appliedForJob={appliedForJob}/>
                    </div>
                </div>
            )
    })

    return (
        <div className='applied-component-list'>
			{appliedForJobsElement}
		</div>
    )
    
}

export default DashJobsList;