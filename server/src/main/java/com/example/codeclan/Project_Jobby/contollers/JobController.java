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
}
