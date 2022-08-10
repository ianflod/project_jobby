import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import NavBar from "../components/NavBar.js"
import DashboardContainer from "./DashboardContainer.js";
import Home from "./Home.js";
import DashJobsForm from "../components/DashBoardJobs/DashJobsForm.js";
import ReedJobsDetail from "../components/ReedJobs/ReedJobsDetail.js";



const MainContainer = () => {


    const [reedJobs, setReedJobs] = useState([]);
    const [watchedJobs, setWatchedJob] = useState([]);

    useEffect(() => {
      getReedJobs()
    },[]);


    const getReedJobs = () => {
        fetch("http://localhost:9000/api/jobs")
        .then(res => res.json())
        .then(reedJobsData => setReedJobs(reedJobsData))
      }
//add in get for watchlist
      const findReedJobById = (id) => {
        return reedJobs.find((reedJob) => {
          return reedJob._id === id;
        })
    }


      const ReedJobsDetailWrapper = () => {
        const { id } = useParams();
        let foundReedJob = findReedJobById(id)
        return <ReedJobsDetail reedJob={foundReedJob} handleSelectedJob={handleSelectedJob}/>;
      };

      const handleSelectedJob = function(id) {
        const copyWatchedJobs = [...watchedJobs]
        copyWatchedJobs.push(findReedJobById(id));
        console.log(copyWatchedJobs);
        setWatchedJob(copyWatchedJobs);
      };





    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/dashboard" element={
                    <DashboardContainer watchedJobs={watchedJobs}/>}
                > </Route>
                <Route path="/" element={
                    <Home reedJobs={reedJobs}/>}
                > </Route>
                <Route path="/application-form" element={
                    <DashJobsForm />}
                > </Route>
                <Route path="/:id" element={
                        <ReedJobsDetailWrapper/>
                    }/>
            </Routes>
        </Router>
    )

}

export default MainContainer;