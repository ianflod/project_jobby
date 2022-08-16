import React, { useEffect, useState } from "react";
import "./Form.css";
import Header from "../Header";

const DashJobsForm = ({ onCreate }) => {

    const [appliedJobsState, setAppliedJobsState] = useState(
        {

            employerName: "",
            jobTitle: "",
            locationName: "",
            minimumSalary: 0,
            maximumSalary: 0,
            date: Date,
            jobDescription: "",
            applications: 1,
            jobUrl: "",
            appliedFor: true,
            userFave: [],
            userApplied: [],
            favorite: false
        }
    )

    const handleChange = function (event) {
        let propertyName = event.target.name;
        let copiedAppliedJobs = { ...appliedJobsState }
        copiedAppliedJobs[propertyName] = event.target.value;
        setAppliedJobsState(copiedAppliedJobs)
    }


    const handleSubmit = function (event) {
        // console.log("handle submit called");
        event.preventDefault();
        onCreate(appliedJobsState);
    }


    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit} className="form">    {/* Form to be reStyled */}
                <input type="text" placeholder="Employer Name" name="employerName" onChange={handleChange} value={appliedJobsState.employerName} />
                <input type="text" placeholder="Job Title" name="jobTitle" onChange={handleChange} value={appliedJobsState.jobTitle} />
                <input type="text" placeholder="Minimum Salary" name="minimumSalary" onChange={handleChange} value={appliedJobsState.minimumSalary} />
                <input type="text" placeholder="Maximum Salary" name="maximumSalary" onChange={handleChange} value={appliedJobsState.maximumSalary} />
                <input type="date" placeholder="" name="date" onChange={handleChange} value={appliedJobsState.date} />
                <input type="text" placeholder="Job Description" name="jobDescription" onChange={handleChange} value={appliedJobsState.jobDescription} />
                <input type="text" placeholder="Job Url" name="jobUrl" onChange={handleChange} value={appliedJobsState.jobUrl} />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default DashJobsForm;

