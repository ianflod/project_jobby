package com.example.codeclan.Project_Jobby.contollers;

import com.example.codeclan.Project_Jobby.models.Job;
import com.example.codeclan.Project_Jobby.repositories.JobRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class JobController {

    JobRepository jobRepository;

    // Reed Api Jobs
    @GetMapping(value = "/jobs")
    public ResponseEntity<List<Job>> getAllJobs(){
        return new ResponseEntity<>(jobRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/jobs/{id}")
    public ResponseEntity getJobs(@PathVariable Long id){
        return new ResponseEntity<>(jobRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/jobs")
    public ResponseEntity<Job> postJob(@RequestBody Job job){
        jobRepository.save(job);
        return new ResponseEntity<>(job, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/jobs/{id}")
    public ResponseEntity<Job> deleteJob(@PathVariable Long id) {
        Job found = jobRepository.getOne(id);
        jobRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PutMapping(value = "/jobs/{id}")
    public ResponseEntity<Job> updateJob(@PathVariable Long id, @RequestBody Job job) {
        Job found = jobRepository.getOne(id);
        jobRepository.save(job);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    // Watched Jobs
    @GetMapping(value = "/jobs/watched")
    public ResponseEntity<List<Job>> getAllWatchedJobs(){
        return new ResponseEntity<>(jobRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/jobs/watched/{id}")
    public ResponseEntity getWatchedJobs(@PathVariable Long id){
        return new ResponseEntity<>(jobRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/jobs/watched")
    public ResponseEntity<Job> postWatchedJob(@RequestBody Job job){
        jobRepository.save(job);
        return new ResponseEntity<>(job, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/jobs/watched/{id}")
    public ResponseEntity<Job> deleteWatchedJob(@PathVariable Long id) {
        Job found = jobRepository.getOne(id);
        jobRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PutMapping(value = "/jobs/watched/{id}")
    public ResponseEntity<Job> updateWatchedJob(@PathVariable Long id, @RequestBody Job job) {
        Job found = jobRepository.getOne(id);
        jobRepository.save(job);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    // Applied for Jobs
    @GetMapping(value = "/jobs/applied")
    public ResponseEntity<List<Job>> getAllAppliedJobs(){
        return new ResponseEntity<>(jobRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/jobs/applied/{id}")
    public ResponseEntity getAppliedJobs(@PathVariable Long id){
        return new ResponseEntity<>(jobRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/jobs/applied")
    public ResponseEntity<Job> postAppliedJob(@RequestBody Job job){
        jobRepository.save(job);
        return new ResponseEntity<>(job, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/jobs/applied/{id}")
    public ResponseEntity<Job> deleteAppliedJob(@PathVariable Long id) {
        Job found = jobRepository.getOne(id);
        jobRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PutMapping(value = "/jobs/applied/{id}")
    public ResponseEntity<Job> updateAppliedJob(@PathVariable Long id, @RequestBody Job job) {
        Job found = jobRepository.getOne(id);
        jobRepository.save(job);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
