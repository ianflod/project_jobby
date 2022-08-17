import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import NavBar from "../components/NavBar.js"
import DashboardContainer from "./DashboardContainer.js";
import Home from "./Home.js";
import DashJobsForm from "../components/DashBoardJobs/DashJobsForm.js";
import ReedJobsDetail from "../components/ReedJobs/ReedJobsDetail.js";
import Request from '../helpers/request.js';
import DashJobsDetails from "../components/DashBoardJobs/DashJobsDetails.js";
import WatchListJobsDetail from "../components/WatchListJobs/WatchListJobsDetails";
import Login from "./Login.js";
import DashJobsUpdateForm from "../components/DashBoardJobs/DashJobsUpdateForm.js";
import EventJobsCreateForm from "../components/DashBoardJobs/EventJobsCreateForm.js"
import Logout from "./Logout.js";





const MainContainer = () => {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const saved = localStorage.getItem("loggedInUser");
    const initialValue = JSON.parse(saved);
    return initialValue || {}
  });
  const [users, setUsers] = useState([]);
  const [reedJobs, setReedJobs] = useState([]);
  const [watchedJobs, setWatchedJobs] = useState([]);
  const [appliedForJobs, setAppliedForJobs] = useState([]);
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [events, setEvents] = useState([]);
  const [jobEvents, setJobEvents] = useState(() => {
    const saved = localStorage.getItem("jobEvents");
    const initialValue = JSON.parse(saved);
    return initialValue || []
  })



  useEffect(() => {
    getEvents()
  }, [])

  useEffect(() => {
    getFeaturedJobs();
  }, [])

  useEffect(() => {
    getReedJobs()
  }, []);

  useEffect(() => {
    getAppliedForJobs()
  }, []);

  useEffect(() => {
    getWatchedJobs()
  }, []);




  const getEvents = () => {
    fetch("http://localhost:8080/api/events")
      .then(res => res.json())
      .then(eventsData => setEvents(eventsData))
  }




  useEffect(() => {
    getAllUsers()
  }, [])

  useEffect(() => {
    window.localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser))
  }, [loggedInUser])

  useEffect(() => {
    setLoggedInUser(JSON.parse(window.localStorage.getItem('loggedInUser')))
  }, [])

  useEffect(() => {
    window.localStorage.setItem("jobEvents", JSON.stringify(jobEvents))
  }, [jobEvents])

  useEffect(() => {
    setJobEvents(JSON.parse(window.localStorage.getItem("jobEvents")))
  }, [])

  const getAllUsers = () => {
    fetch("http://localhost:8080/api/users")
      .then(res => res.json())
      .then(allUsers => setUsers(allUsers));
  }


  const getFeaturedJobs = () => {
    fetch("http://localhost:9000/api/jobs")
      .then(res => res.json())
      .then(featuredJobsData => setFeaturedJobs(featuredJobsData))
  }

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

  const getLoggedInUser = (userToLogIn) => {
    setLoggedInUser(userToLogIn);
    getWatchedJobs();
    getAppliedForJobs();
  }



  const createAppliedJob = (appliedJob) => {
    // console.log("create applied job called", appliedJob);
    if (appliedJob) {
      const request = new Request();
      request.post("/api/jobs/applied", appliedJob)
        .then(() => window.location = '/dashboard');
    }
    else {
      console.log("no applied job");
    }
  }

  const createEvent = (event, appliedJob) => {
    console.log(appliedJob);
    appliedForJobs.pop(appliedJob);
    if (Object.keys(appliedJob).indexOf("events") == -1) {
      appliedJob["events"] = []
    }
    const copyEvents = [...appliedJob.events]
    copyEvents.push(event)
    appliedJob.events = copyEvents
    let jobToUpdate = findAppliedForJobById(appliedJob.id)
    jobToUpdate = appliedJob;
    setAppliedForJobs([...appliedForJobs, jobToUpdate])
    const copyJobEvents = [...jobEvents, event]
    setJobEvents(copyJobEvents)
    window.location = "/applied-for-jobs/" + appliedJob.id;
  }

  const createWatchedJob = (watchedJob) => {
    // console.log(watchedJob);
    if (watchedJob) {
      const request = new Request();
      request.post("/api/jobs/watched", watchedJob)
        .then(() => window.location = '/dashboard');
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
    // console.log(foundJob);
    return foundJob;
  };

  const findWatchedJobById = (id) => {
    const foundJob = watchedJobs.find((watchedJob) => {
      return watchedJob.id == id;
    })
    return foundJob;
  };

  const AppliedForJobsDetailWrapper = () => {
    const { id } = useParams();

    const foundAppliedForJob = findAppliedForJobById(id)
    // console.log(foundAppliedForJob); undefined
    return <DashJobsDetails appliedForJob={foundAppliedForJob} handleDelete={handleDelete} events={jobEvents} />;
  };

  const WatchedJobsDetailWrapper = () => {
    const { id } = useParams();
    const foundWatchedJob = findWatchedJobById(id);
    return <WatchListJobsDetail watchedJob={foundWatchedJob} handleChange={handleChangeOfJobFromWatchedToApplied} />
  };

  const handleSelectedJob = function (reedJob) {
    const foundJob = watchedJobs.find(job => job._id === reedJob._id);
    if (!foundJob) {
      const newJob = {
        employerName: reedJob.employerName,
        jobTitle: reedJob.jobTitle,
        locationName: reedJob.locationName,
        minimumSalary: reedJob.minimumSalary,
        maximumSalary: reedJob.maximumSalary,
        date: new Date(reedJob.expirationDate),
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
      console.log("Job already in watch list ")
    }

  };

  const handleDelete = (id) => {
    const jobToDelete = appliedForJobs.find(job => job.id === id);
    if (jobToDelete) {
      const request = new Request();
      const url = '/api/jobs/applied/' + id;
      request.delete(url)


        .then(() => window.location = '/dashboard');

    }
    else {
      console.log("job not found");
    }

  };

  const handleChangeOfJobFromWatchedToApplied = (id) => {
    const watchedJob = findWatchedJobById(id);
    // console.log(watchedJob);
    watchedJob.favorite = false;
    watchedJob.appliedFor = true;
    createAppliedJob(watchedJob)
    //enter delete function for watchedJob
  };


  const handleUpdate = (appliedForJob) => {
    console.log(appliedForJob);
    const request = new Request();
    request.put('/api/jobs/applied/' + appliedForJob.id, appliedForJob)
      .then(() => {
        console.log(appliedForJob.id)
        window.location = '/applied-for-jobs/' + appliedForJob.id;
      })
  }

  const DashJobsUpdateFormWrapper = () => {
    const { id } = useParams();
    let foundAppliedForJob = findAppliedForJobById(id)
    return <DashJobsUpdateForm appliedForJob={foundAppliedForJob} onUpdate={handleUpdate} onCreate={createAppliedJob} />
  }

  const logoutUser = () => {

    window.localStorage.removeItem("loggedInUser")
  }

  const EventsCreateFormWrapper = () => {
    const { id } = useParams();
    const foundAppliedForJob = findAppliedForJobById(id)
    console.log(foundAppliedForJob)
    return <EventJobsCreateForm createEvent={createEvent} appliedForJob={foundAppliedForJob} />
  }


  return (
    <Router>
      <NavBar loggedInUser={loggedInUser} logoutUser={logoutUser} />
      <div className="welcome-message">
        {loggedInUser.email == null ? <h3 >Welcome to Joable!</h3> : <h3>Welcome back {loggedInUser.firstName}!</h3>}
      </div>
      <Routes>
        <Route path="/dashboard" element={
          loggedInUser.email == null ?
            <Login users={users} getLoggedInUser={getLoggedInUser} loggedInUser={loggedInUser} /> : <DashboardContainer watchedJobs={watchedJobs} appliedForJobs={appliedForJobs} />}
        > </Route>
        <Route path="/" element={
          <Home reedJobs={reedJobs} featuredJobs={featuredJobs} />}
        > </Route>
        <Route path="/application-form" element={
          loggedInUser.email == null ?
            <Login users={users} getLoggedInUser={getLoggedInUser} loggedInUser={loggedInUser} /> : <DashJobsForm onCreate={createAppliedJob} />}
        > </Route>
        <Route path="/applied-for-jobs/:id/edit" element={

          <DashJobsUpdateFormWrapper />
        } />
        <Route path="/applied-for-jobs/:id/create-event" element={
          <EventsCreateFormWrapper />
        } />
        <Route path="/:id" element={
          <ReedJobsDetailWrapper />
        } />
        <Route path="/applied-for-jobs/:id" element={
          <AppliedForJobsDetailWrapper />
        } />
        <Route path="/watched-for-jobs/:id" element={
          <WatchedJobsDetailWrapper />
        } />
        <Route path="/login" element={
          <Login users={users} getLoggedInUser={getLoggedInUser} loggedInUser={loggedInUser} />
        } />
        <Route path="/logout" element={<Logout />}
        />
      </Routes>
    </Router>
  )

}

export default MainContainer;