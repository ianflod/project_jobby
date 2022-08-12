package com.example.codeclan.Project_Jobby.contollers;

import com.example.codeclan.Project_Jobby.models.Job;
import com.example.codeclan.Project_Jobby.repositories.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class JobController {

    @Autowired
    JobRepository jobRepository;

    // Watched Jobs
    @GetMapping(value = "/jobs/watched")
    public ResponseEntity<List<Job>> getAllWatchedJobs(){
        return new ResponseEntity<>(jobRepository.findByIsFavorite(true), HttpStatus.OK);
    }

    @GetMapping(value = "/jobs/watched/{id}")
    public ResponseEntity getWatchedJobs(@PathVariable Long id){
        return new ResponseEntity<>(jobRepository.findById(id), HttpStatus.OK);
    }
    @CrossOrigin
    @PostMapping(value = "/jobs/watched")
    public ResponseEntity<Job> postWatchedJob(@RequestBody Job job){
        jobRepository.save(job);
        return new ResponseEntity<>(job, HttpStatus.CREATED);
    }
    @CrossOrigin
    @DeleteMapping(value = "/jobs/watched/{id}")
    public ResponseEntity<Job> deleteWatchedJob(@PathVariable Long id) {
        Job found = jobRepository.getOne(id);
        jobRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
    @CrossOrigin
    @PutMapping(value = "/jobs/watched/{id}")
    public ResponseEntity<Job> updateWatchedJob(@PathVariable Long id, @RequestBody Job job) {
        Job found = jobRepository.getOne(id);
        found.setApplications(job.getApplications());
        found.setDate(job.getDate());
        found.setJobDescription(job.getJobDescription());
        found.setJobTitle(job.getJobTitle());
        found.setEmployerName(job.getEmployerName());
        found.setEvents(job.getEvents());
        found.setLocationName(job.getLocationName());
        found.setMinimumSalary(job.getMinimumSalary());
        found.setMaximumSalary(job.getMaximumSalary());
        found.setAppliedFor(job.getAppliedFor());
        found.setFavorite(job.getFavorite());
        jobRepository.save(found);
        return new ResponseEntity<>(found, HttpStatus.OK);
    }

    // Applied for Jobs
    @GetMapping(value = "/jobs/applied")
    public ResponseEntity<List<Job>> getAllAppliedJobs(){
        return new ResponseEntity<>(jobRepository.findByAppliedFor(true), HttpStatus.OK);
    }

    @GetMapping(value = "/jobs/applied/{id}")
    public ResponseEntity getAppliedJobs(@PathVariable Long id){
        return new ResponseEntity<>(jobRepository.findById(id), HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping(value = "/jobs/applied")
    public ResponseEntity<Job> postAppliedJob(@RequestBody Job job){
        jobRepository.save(job);
        return new ResponseEntity<>(job, HttpStatus.CREATED);
    }

    @CrossOrigin
    @DeleteMapping(value = "/jobs/applied/{id}")
    public ResponseEntity<Job> deleteAppliedJob(@PathVariable Long id) {
        Job found = jobRepository.getOne(id);
        jobRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
    @CrossOrigin
    @PutMapping(value = "/jobs/applied/{id}")
    public ResponseEntity<Job> updateAppliedJob(@PathVariable Long id, @RequestBody Job job) {
        Job found = jobRepository.getOne(id);
        jobRepository.save(job);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
