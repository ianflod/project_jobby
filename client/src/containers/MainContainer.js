import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import NavBar from "../components/NavBar.js"
import DashboardContainer from "./DashboardContainer.js";
import Home from "./Home.js";
import DashJobsForm from "../components/DashBoardJobs/DashJobsForm.js";
import ReedJobsDetail from "../components/ReedJobs/ReedJobsDetail.js";
import Request from '../helpers/request.js';
import DashJobsDetails from "../components/DashBoardJobs/DashJobsDetails.js";



const MainContainer = () => {


    const [reedJobs, setReedJobs] = useState([]);
    const [watchedJobs, setWatchedJobs] = useState([]);
    const [appliedForJobs, setAppliedForJobs] = useState([]);

    useEffect(() => {
      getReedJobs()
    },[]);

    useEffect(() => {
      getAppliedForJobs()
    },[]);

    useEffect(() => {
      getWatchedJobs()
    },[]);

    const getWatchedJobs = () => {
      fetch("http://localhost:8080/api/jobs/watched")
      .then(res => res.json())
      .then(watchedJobData => setWatchedJobs(watchedJobData))
    }


    const getAppliedForJobs = () => {
      fetch("http://localhost:8080/api/jobs/applied")
        .then(res => res.json())
        .then(appliedForJobsData => setAppliedForJobs(appliedForJobsData))
    }
    
    const createAppliedJob = (appliedJob) => {
      // console.log("create applied job called", appliedJob);
      if(appliedJob){
        const request = new Request();
        request.post("/api/jobs/applied", appliedJob)
        .then(() => window.location = '/dashboard');
      }
      else {
        console.log("no applied job");
      }
      
    }

    const createWatchedJob = (watchedJob) => {
      // console.log(watchedJob);
      if(watchedJob){

        const request = new Request();
        request.post("/api/jobs/watched", watchedJob)
        // .then(() => window.location = '/dashboard');
      }
      else {
        console.log("no watched job");
      }
    }

    const getReedJobs = () => {
        fetch("http://localhost:9000/api/jobs")
        .then(res => res.json())
        .then(reedJobsData => setReedJobs(reedJobsData))
      }

      const findReedJobById = (id) => {
        return reedJobs.find((reedJob) => {
          return reedJob._id === id;
        })
    }

      const ReedJobsDetailWrapper = () => {
        const { id } = useParams();
        let foundReedJob = findReedJobById(id)
        return <ReedJobsDetail reedJob={foundReedJob} handleSelectedJob={handleSelectedJob} />;
      };

      const findAppliedForJobById = (id) => {
            const foundJob = appliedForJobs.find((appliedForJob) => {
              // console.log(appliedForJob.id);
              // console.log(id);
              return appliedForJob.id == id;
            })
            console.log(foundJob);
            return foundJob;
        };

        const AppliedForJobsDetailWrapper = () => {
          const { id } = useParams();
          
          const foundAppliedForJob = findAppliedForJobById(id)
          // console.log(foundAppliedForJob); undefined
          return <DashJobsDetails appliedForJob={foundAppliedForJob}/>;
        }; 

      const handleSelectedJob = function(reedJob) {
        const foundJob = watchedJobs.find(job => job._id === reedJob._id);
        if(!foundJob){
          const newJob = {
          employerName: reedJob.employerName,
            jobTitle: reedJob.jobTitle,
            locationName: reedJob.locationName,
            minimumSalary: reedJob.minimumSalary,
            maximumSalary: reedJob.maximumSalary,
            date: reedJob.date,
            jobDescription: reedJob.jobDescription,
            applications: reedJob.applications,
            jobUrl: reedJob.jobUrl,
            appliedFor: false,
            userFave: [],
            userApplied: [],
            favorite: true
          }
          createWatchedJob(newJob); 
        }
        // const singleJob = watchedJobs.find(reedJobs._id)
        // // console.log(singleJob);
        // if (singleJob = null) {
            
         
        else {
        return "Job already in watch list "
        }
      
      };





    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/dashboard" element={
                    <DashboardContainer watchedJobs={watchedJobs} appliedForJobs={appliedForJobs}/>}
                > </Route>
                <Route path="/" element={
                    <Home reedJobs={reedJobs}/>}
                > </Route>
                <Route path="/application-form" element={
                    <DashJobsForm onCreate={createAppliedJob} />}
                > </Route>
                <Route path="/:id" element={
                        <ReedJobsDetailWrapper/>
                    }/>
                <Route path="/applied-for-jobs/:id" element={
                        <AppliedForJobsDetailWrapper/>
                    }/>
            </Routes>
        </Router>
    )

}

export default MainContainer;